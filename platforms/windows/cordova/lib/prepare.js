/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
*/

var Q = require('q');
var fs = require('fs');
var path = require('path');
var shell = require('shelljs');
var et = require('elementtree');
var Version = require('./Version');
var MRTImage = require('./MRTImage');
var AppxManifest = require('./AppxManifest');
var MSBuildTools = require('./MSBuildTools');
var ConfigParser = require('./ConfigParser');
var events = require('cordova-common').events;
var xmlHelpers = require('cordova-common').xmlHelpers;
var FileUpdater = require('cordova-common').FileUpdater;
var PlatformJson = require('cordova-common').PlatformJson;
var PlatformMunger = require('cordova-common').ConfigChanges.PlatformMunger;
var PluginInfoProvider = require('cordova-common').PluginInfoProvider;

// Default value for VisualElements' Description attribute.
// This is equal to the value that comes with default App template
var DEFAULT_DESCRIPTION = 'CordovaApp';

var PROJECT_WINDOWS10   = 'CordovaApp.Windows10.jsproj',
    MANIFEST_WINDOWS    = 'package.windows.appxmanifest',
    MANIFEST_PHONE      = 'package.phone.appxmanifest',
    MANIFEST_WINDOWS10  = 'package.windows10.appxmanifest';

var TEMPLATE =
    '<?xml version="1.0" encoding="utf-8"?>\n' +
    '<!--\n    This file is automatically generated.\n' +
    '    Do not modify this file - YOUR CHANGES WILL BE ERASED!\n-->\n';

var SUPPORTED_IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];
var SPLASH_SCREEN_SIZE_LIMIT = 200 * 1024; // 200 KBytes
var TARGET_PROJECT_81 = 'TARGET_PROJECT_81', 
    TARGET_PROJECT_WP81 = 'TARGET_PROJECT_WP81', 
    TARGET_PROJECT_10 = 'TARGET_PROJECT_10';
var SPLASH_SCREEN_DESKTOP_TARGET_NAME = 'SplashScreen';
var SPLASH_SCREEN_PHONE_TARGET_NAME = 'SplashScreenPhone';

/** Note: this is only for backward compatibility, since it is being called directly from windows_parser */
module.exports.applyPlatformConfig = function() {
    var projectRoot = path.join(__dirname, '../..');
    var appConfig = new ConfigParser(path.join(projectRoot, '../../config.xml'));
    updateProjectAccordingTo(appConfig);
    copyImages(appConfig, projectRoot);
};

module.exports.updateBuildConfig = function(buildConfig) {
    var projectRoot = path.join(__dirname, '../..');
    var config = new ConfigParser(path.join(projectRoot, 'config.xml'));

    // if no buildConfig is provided dont do anything
    buildConfig = buildConfig || {};

    // Merge buildConfig with config
    for (var attr in buildConfig) {
        config[attr] = buildConfig[attr];
    }

    var root = new et.Element('Project');
    root.set('xmlns', 'http://schemas.microsoft.com/developer/msbuild/2003');
    var buildConfigXML =  new et.ElementTree(root);
    var propertyGroup = new et.Element('PropertyGroup');
    var itemGroup = new et.Element('ItemGroup');

    // Append PropertyGroup and ItemGroup
    buildConfigXML.getroot().append(propertyGroup);
    buildConfigXML.getroot().append(itemGroup);

    // packageCertificateKeyFile - defaults to 'CordovaApp_TemporaryKey.pfx'
    var packageCertificateKeyFile = config.packageCertificateKeyFile || 'CordovaApp_TemporaryKey.pfx';

    if (config.packageCertificateKeyFile) {
        // Convert packageCertificateKeyFile from absolute to relative path
        packageCertificateKeyFile = path.relative(projectRoot, packageCertificateKeyFile);
    }

    var certificatePropertyElement = new et.Element('PackageCertificateKeyFile');
    certificatePropertyElement.text = packageCertificateKeyFile;
    propertyGroup.append(certificatePropertyElement);

    var certificateItemElement = new et.Element('None', { 'Include': packageCertificateKeyFile });
    itemGroup.append(certificateItemElement);

    // packageThumbprint
    if (config.packageThumbprint) {
        var thumbprintElement = new et.Element('PackageCertificateThumbprint');
        thumbprintElement.text = config.packageThumbprint;
        propertyGroup.append(thumbprintElement);
    }

    // DefaultLanguage - defaults to 'en-US'
    var defaultLocale = config.defaultLocale() || 'en-US';
    var defaultLocaleElement = new et.Element('DefaultLanguage');
    defaultLocaleElement.text = defaultLocale;
    propertyGroup.append(defaultLocaleElement);

    var buildConfigFileName = buildConfig.buildType === 'release' ?
        path.join(projectRoot, 'CordovaAppRelease.projitems') :
        path.join(projectRoot, 'CordovaAppDebug.projitems');

    fs.writeFileSync(buildConfigFileName, TEMPLATE + buildConfigXML.write({indent: 2, xml_declaration: false}), 'utf-8');
};

function updateManifestFile (config, manifestPath) {
    var manifest = AppxManifest.get(manifestPath);
    // Break out Windows 10-specific functionality because we also need to
    // apply UAP versioning to Windows 10 appx-manifests.
    var isTargetingWin10 = manifest.prefix === 'uap:';

    applyCoreProperties(config, manifest);
    applyStartPage(config, manifest, isTargetingWin10);

    if (isTargetingWin10) {
        applyNavigationWhitelist(config, manifest);
    } else {
        applyAccessRules(config, manifest);
    }

    // Apply background color, splashscreen background color, etc.
    manifest.getVisualElements()
        .trySetBackgroundColor(config.getPreference('BackgroundColor'))
        .setForegroundText(config.getPreference('ForegroundText'))
        .setSplashBackgroundColor(config.getPreference('SplashScreenBackgroundColor'))
        .setToastCapable(config.getPreference('WindowsToastCapable'))
        .setOrientation(config.getPreference('Orientation'));

    if (isTargetingWin10) {
        manifest.setDependencies(config.getAllMinMaxUAPVersions());

        var badCaps = manifest.getRestrictedCapabilities();
        if (config.hasRemoteUris() && badCaps) {
            events.emit('warn', 'The following Capabilities were declared and are restricted:' +
                '\n\t' + badCaps.map(function(a){return a.name;}).join(', ') +
                '\nYou will be unable to on-board your app to the public Windows Store with these ' +
                'capabilities and access rules permitting access to remote URIs.');
        }
    }

    //Write out manifest
    manifest.write();
}

function applyCoreProperties(config, manifest) {
    // CB-9450: iOS/Android and Windows Store have an incompatibility here; Windows Store assigns the
    // package name that should be used for upload to the store.  However, this can't be set for typical
    // Cordova apps.  So, we have to create a Windows-specific preference here.
    var pkgName = config.getPreference('WindowsStoreIdentityName') || config.packageName();
    if (pkgName) {
        manifest.getIdentity().setName(pkgName);
    }

    var version = config.windows_packageVersion() || config.version();
    if (version) {
        manifest.getIdentity().setVersion(version);
    }

    // Update publisher id (identity)
    if (config.publisherId) {
        manifest.getIdentity().setPublisher(config.publisherId);
    }

    // Update name (windows8 has it in the Application[@Id] and Application.VisualElements[@DisplayName])
    var baselinePackageName = config.packageName();
    if (baselinePackageName) {
        manifest.getApplication().setId(baselinePackageName);
    }

    var name = config.name();
    if (name) {
        manifest.getVisualElements().setDisplayName(name);
    }

    var description = config.description();
    manifest.getProperties().setDescription(description);
    // 'Description' attribute is required for VisualElements node (see
    // https://msdn.microsoft.com/en-us/library/windows/apps/br211471.aspx),
    // so we set it to '<description>' from config.xml or default value
    manifest.getVisualElements().setDescription(description || DEFAULT_DESCRIPTION);

    // CB-9410: Get a display name and publisher display name.  In the Windows Store, certain
    // strings which are typically used in Cordova aren't valid for Store ingestion.
    // Here, we check for Windows-specific preferences, and if we find it, prefer that over
    // the Cordova <widget> areas.
    var displayName = config.getPreference('WindowsStoreDisplayName') || name;
    var publisherName = config.getPreference('WindowsStorePublisherName') || config.author();

    // Update properties
    manifest.getProperties()
        .setDisplayName(displayName)
        .setPublisherDisplayName(publisherName);
}

function applyStartPage(config, manifest, targetingWin10) {
    // If not specified, set default value
    // http://cordova.apache.org/docs/en/edge/config_ref_index.md.html#The%20config.xml%20File
    var startPage = config.startPage() || 'index.html';

    var uriPrefix = '';
    if (targetingWin10) {
        // for Win10, we respect config options such as WindowsDefaultUriPrefix and default to
        // ms-appx-web:// as the homepage.  Set those here.

        // Only add a URI prefix if the start page doesn't specify a URI scheme
        if (!(/^[\w-]+?\:\/\//i).test(startPage)) {
            uriPrefix = config.getPreference('WindowsDefaultUriPrefix');
            if (!uriPrefix) {
                uriPrefix = 'ms-appx-web://';
            }
            else if (/^ms\-appx\:\/\/$/i.test(uriPrefix)) {
                // Explicitly ignore the ms-appx:// scheme because it doesn't validate
                // in the Windows 10 build schema (treat it as the root).
                uriPrefix = '';
            }
        }
    }

    var startPagePrefix = 'www/';
    if ((uriPrefix && uriPrefix.toLowerCase().substring(0, 4) === 'http') ||
        startPage.toLowerCase().substring(0, 4) === 'http') {
        startPagePrefix = '';
    }
    else if (uriPrefix.toLowerCase().substring(0, 7) === 'ms-appx') {
        var pkgName = config.getPreference('WindowsStoreIdentityName') || config.packageName();
        // Workaround to avoid WWAHost.exe bug: https://issues.apache.org/jira/browse/CB-10446
        uriPrefix += pkgName.toLowerCase() + '/'; // add Identity.Name
    }

    manifest.getApplication().setStartPage(uriPrefix + startPagePrefix + startPage);
}

function applyAccessRules (config, manifest) {
    var accessRules = config.getAccesses()
    .filter(function(rule) {
        // https:// rules are always good, * rules are always good
        if (rule.origin.indexOf('https://') === 0 || rule.origin === '*') return true;

        events.emit('warn', 'Access rules must begin with "https://", the following rule will be ignored: ' + rule.origin);
        return false;
    }).map(function (rule) {
        return rule.origin;
    });

    // If * is specified, emit no access rules.
    if (accessRules.indexOf('*') > -1) {
        accessRules = [];
    }

    manifest.getApplication().setAccessRules(accessRules);
}

/**
 * Windows 10-based whitelist-plugin-compatible support for the enhanced navigation whitelist.
 * Allows WinRT access to origins specified by <allow-navigation href="origin" /> elements.
 */
function applyNavigationWhitelist(config, manifest) {

    if (manifest.prefix !== 'uap:') {
        // This never should happen, but to be sure let's check
        throw new Error('AllowNavigation whitelist rules must be applied to Windows 10 appxmanifest only.');
    }

    var UriSchemeTest = /^(?:https?|ms-appx-web):\/\//i;

    var whitelistRules = config.getAllowNavigations()
    .filter(function(rule) {
        if (UriSchemeTest.test(rule.href)) return true;

        events.emit('warn', 'The following navigation rule had an invalid URI scheme and will be ignored: "' + rule.href + '".');
        return false;
    })
    .map(function (rule) {
        return rule.href;
    });

    var defaultPrefix = config.getPreference('WindowsDefaultUriPrefix');
    if ('ms-appx://' !== defaultPrefix) {
        var hasMsAppxWeb = whitelistRules.some(function(rule) {
            return /^ms-appx-web:\/\/\/$/i.test(rule);
        });
        if (!hasMsAppxWeb) {
            whitelistRules.push('ms-appx-web:///');
        }
    }

    manifest.getApplication().setAccessRules(whitelistRules);
}

// Platform default images
var PLATFORM_IMAGES = [
    {dest: 'Square150x150Logo.scale-100', width: 150, height: 150},
    {dest: 'Square30x30Logo.scale-100', width: 30, height: 30},
    {dest: 'StoreLogo.scale-100', width: 50, height: 50},
    {dest: 'SplashScreen.scale-100', width: 620, height: 300, targetProject: TARGET_PROJECT_10},
    {dest: 'SplashScreen.scale-125', width: 775, height: 375, targetProject: TARGET_PROJECT_10},
    {dest: 'SplashScreen.scale-140', width: 868, height: 420, targetProject: TARGET_PROJECT_81},
    {dest: 'SplashScreen.scale-150', width: 930, height: 450, targetProject: TARGET_PROJECT_10},
    {dest: 'SplashScreen.scale-180', width: 1116, height: 540, targetProject: TARGET_PROJECT_81},
    {dest: 'SplashScreen.scale-200', width: 1240, height: 600, targetProject: TARGET_PROJECT_10},
    {dest: 'SplashScreen.scale-400', width: 2480, height: 1200, targetProject: TARGET_PROJECT_10},
    // scaled images are specified here for backward compatibility only so we can find them by size
    {dest: 'StoreLogo.scale-240', width: 120, height: 120},
    {dest: 'Square44x44Logo.scale-100', width: 44, height: 44},
    {dest: 'Square44x44Logo.scale-240', width: 106, height: 106},
    {dest: 'Square70x70Logo.scale-100', width: 70, height: 70},
    {dest: 'Square71x71Logo.scale-100', width: 71, height: 71},
    {dest: 'Square71x71Logo.scale-240', width: 170, height: 170},
    {dest: 'Square150x150Logo.scale-240', width: 360, height: 360},
    {dest: 'Square310x310Logo.scale-100', width: 310, height: 310},
    {dest: 'Wide310x150Logo.scale-100', width: 310, height: 150},
    {dest: 'Wide310x150Logo.scale-240', width: 744, height: 360},
    {dest: 'SplashScreenPhone.scale-100', width: 480, height: 800, targetProject: TARGET_PROJECT_WP81},
    {dest: 'SplashScreenPhone.scale-140', width: 672, height: 1120, targetProject: TARGET_PROJECT_WP81},
    {dest: 'SplashScreenPhone.scale-240', width: 1152, height: 1920, targetProject: TARGET_PROJECT_WP81}
];

function findPlatformImage(width, height) {
    if (!width && !height){
        // this could be default image,
        // Windows requires specific image dimension so we can't apply it
        return null;
    }
    for (var idx in PLATFORM_IMAGES){
        var res = PLATFORM_IMAGES[idx];
        // If only one of width or height is not specified, use another parameter for comparation
        // If both specified, compare both.
        if ((!width || (width == res.width)) &&
            (!height || (height == res.height))){
            return res;
        }
    }
    return null;
}

/** Maps MRT splashscreen image to its target project defined in PLATFORM_IMAGES -> 8.1|WP8.1|10
 * This assumes we have different scales used for 8.1 and 10 projects.
 * The only intersection is scale-100, which is treated as Win10 project' splashscreen (because
 * size limit applies to Win10 project so we'll need to check it).
 * @param  {MRTImage} mrtImage
 * @return {String} targetProject defined in PLATFORM_IMAGES
 */
function mrtSplashScreenToTargetProject(mrtImage) {
    // Gives something like -> splashscreen.scale-100
    var splashDestToFind = [mrtImage.basename, mrtImage.qualifiers].join('.').toLowerCase();
    var matchingSplashScreen = PLATFORM_IMAGES.filter(function (img) {
        return img.dest.toLowerCase() === splashDestToFind;
    })[0];

    return matchingSplashScreen && matchingSplashScreen.targetProject;
}

function mapImageResources(images, imagesDir) {
    function exceedsSizeLimit(filePath) {
        return fs.statSync(filePath).size > SPLASH_SCREEN_SIZE_LIMIT;
    }

    var pathMap = {};

    images.forEach(function (img) {
        var ext = path.extname(img.src).toLowerCase();
        if (SUPPORTED_IMAGE_EXTENSIONS.indexOf(ext) === -1) {
            events.emit('warn', '"' + ext + '" extension is not supported, skipping. Supported image extensions are ' + JSON.stringify(SUPPORTED_IMAGE_EXTENSIONS));
            return;
        }

        if (img.target) {
            // Parse source path into new MRTImage
            var imageToCopy = new MRTImage(img.src);

            // then get all matching MRT images in source directory
            var candidates = fs.readdirSync(imageToCopy.location)
            .map(function (file) { return new MRTImage(path.join(imageToCopy.location, file)); })
            .filter(imageToCopy.matchesTo, imageToCopy);

            // Warn user if no images were copied
            if (candidates.length === 0) {
                events.emit('warn', 'No images found for target: ' + img.target);
            } else {
                candidates.forEach(function(mrtImage) {
                    if (img.target === SPLASH_SCREEN_DESKTOP_TARGET_NAME &&
                        mrtSplashScreenToTargetProject(mrtImage) === TARGET_PROJECT_10 &&
                        exceedsSizeLimit(mrtImage.path)) {
                        events.emit('warn', '"' + mrtImage.path + '" file size exceeds the limit of ' + SPLASH_SCREEN_SIZE_LIMIT + ' bytes, skipping.');
                        return;
                    }

                    // copy images with new base name but keeping qualifier
                    var targetPath = path.join(imagesDir, mrtImage.generateFilenameFrom(img.target));
                    pathMap[targetPath] = mrtImage.path;
                });
            }
        } else {
            // find target image by size
            var targetImg = findPlatformImage(img.width, img.height);
            if (targetImg) {
                if (targetImg.targetProject === TARGET_PROJECT_10 &&
                    exceedsSizeLimit(img.src)) {
                    events.emit('warn', '"' + img.src + '" file size exceeds the limit of ' + SPLASH_SCREEN_SIZE_LIMIT + ' bytes, skipping.');
                    return;
                }

                var targetPath = path.join(imagesDir, targetImg.dest) + ext;
                pathMap[targetPath] = img.src;
            } else {
                events.emit('warn', 'The following image was skipped because it has an unsupported size (' + img.width + 'x' + img.height + '): ' + img.src);
            }
        }
    });

    return pathMap;
}

function copyImages(cordovaProject, locations) {
    var images = cordovaProject.projectConfig.getIcons('windows')
        .concat(cordovaProject.projectConfig.getSplashScreens('windows'));

    if (images.length === 0) {
        events.emit('verbose', 'This app does not have any icons or splash screens defined');
        return;
    }

    var imagesDir = path.join(path.relative(cordovaProject.root, locations.root), 'images');
    var resourceMap = mapImageResources(images, imagesDir);
    events.emit('verbose', 'Updating icons and splash screens at ' + imagesDir);
    FileUpdater.updatePaths(
        resourceMap, { rootDir: cordovaProject.root }, logFileOp);
}

function cleanImages(projectRoot, projectConfig, locations) {
    var images = projectConfig.getIcons('windows')
        .concat(projectConfig.getSplashScreens('windows'));

    if (images.length > 0) {
        var imagesDir = path.join(path.relative(projectRoot, locations.root), 'images');
        var resourceMap = mapImageResources(images, imagesDir);
        Object.keys(resourceMap).forEach(function (targetImagePath) {
            resourceMap[targetImagePath] = null;
        });
        events.emit('verbose', 'Cleaning icons and splash screens at ' + imagesDir);

        // Source paths are removed from the map, so updatePaths() will delete the target files.
        FileUpdater.updatePaths(
            resourceMap, { rootDir: projectRoot, all: true }, logFileOp);
    }
}

function applyUAPVersionToProject(projectFilePath, uapVersionInfo) {
    // No uapVersionInfo means that there is no UAP SDKs installed and there is nothing to do for us
    if (!uapVersionInfo) return;

    var fileContents = fs.readFileSync(projectFilePath).toString().trim();
    var xml = et.parse(fileContents);
    var tpv = xml.find('./PropertyGroup/TargetPlatformVersion');
    var tpmv = xml.find('./PropertyGroup/TargetPlatformMinVersion');

    tpv.text = uapVersionInfo.targetUAPVersion.toString();
    tpmv.text = uapVersionInfo.minUAPVersion.toString();

    fs.writeFileSync(projectFilePath, xml.write({ indent: 4 }), {});
}

// returns {minUAPVersion: Version, targetUAPVersion: Version} | false
function getUAPVersions(config) {
    var baselineVersions = MSBuildTools.getAvailableUAPVersions();
    if (!baselineVersions || baselineVersions.length === 0) {
        return false;
    }

    baselineVersions.sort(Version.comparer);

    var uapTargetMinPreference = config.getUAPTargetMinVersion();

    return {
        minUAPVersion: uapTargetMinPreference,
        targetUAPVersion: baselineVersions[baselineVersions.length - 1] /* The highest available SDK on the system */
    };
}

/**
 * @param  {Object} splash
 * @returns {String} 'SplashScreen'|'SplashScreenPhone'
 */
function getTargetForImage(splash) {
    if (splash.target) {
        // MRT syntax:
        return splash.target;
    }

    // Fall back on find by size for old non-MRT syntax:
    var targetImg = findPlatformImage(splash.width, splash.height);
    if (!targetImg.targetProject) {
        return;
    }

    if (targetImg.targetProject === TARGET_PROJECT_81 || targetImg.targetProject === TARGET_PROJECT_10) {
        return SPLASH_SCREEN_DESKTOP_TARGET_NAME;
    }

    if (targetImg.targetProject === TARGET_PROJECT_WP81) {
        return SPLASH_SCREEN_PHONE_TARGET_NAME;
    }
}

// Updates manifests to match the app splash screen image types (PNG/JPG/JPEG)
function updateSplashScreenImageExtensions(cordovaProject, locations) {

    // Saving all extensions used for targets to verify them later
    var extensionsUsed = {};

    function checkThatExtensionsAreNotMixed() {
        for (var target in extensionsUsed) {
            /*jshint loopfunc: true */
            if (extensionsUsed.hasOwnProperty(target)) {
                var extensionsUsedForTarget = extensionsUsed[target];

                // Check that extensions are not mixed:
                if (extensionsUsedForTarget.length > 1 && extensionsUsedForTarget.some(function(item) {
                    return item !== extensionsUsedForTarget[0];
                })) {
                    events.emit('warn', '"' + target + '" splash screens have mixed file extensions which is not supported. Some of the images will not be used.');
                }
            }
        }
    }

    function checkTargetMatchAndUpdateUsedExtensions(img, target) {
        var matchesTarget = getTargetForImage(img) === target;

        if (matchesTarget === true) {
            extensionsUsed[target] = extensionsUsed[target] || [];
            extensionsUsed[target].push(path.extname(img.src.toLowerCase()));
        }

        return matchesTarget;
    }

    function updateSplashExtensionInManifest(manifestFileName, splashScreen) {
        var manifest = AppxManifest.get(path.join(locations.root, manifestFileName));
        var newExtension = path.extname(splashScreen.src);

        if (manifest.getVisualElements().getSplashScreenExtension() !== newExtension) {
            events.emit('verbose', 'Set ' + manifestFileName + ' SplashScreen image extension to "' + newExtension + '"');
            manifest.getVisualElements().setSplashScreenExtension(newExtension);
            manifest.write();
        }
    }

    var splashScreens = cordovaProject.projectConfig.getSplashScreens('windows');

    var desktopSplashScreen = splashScreens.filter(function(img) { 
        return checkTargetMatchAndUpdateUsedExtensions(img, SPLASH_SCREEN_DESKTOP_TARGET_NAME);
    })[0];

    var phoneSplashScreen = splashScreens.filter(function(img) { 
        return checkTargetMatchAndUpdateUsedExtensions(img, SPLASH_SCREEN_PHONE_TARGET_NAME);
    })[0];

    checkThatExtensionsAreNotMixed();

    var manifestSplashScreenMap = {};
    manifestSplashScreenMap[MANIFEST_WINDOWS] = desktopSplashScreen;
    manifestSplashScreenMap[MANIFEST_WINDOWS10] = desktopSplashScreen;
    manifestSplashScreenMap[MANIFEST_PHONE] = phoneSplashScreen;

    for (var manifest in manifestSplashScreenMap) {
        if (manifestSplashScreenMap.hasOwnProperty(manifest)) {
            var splashScreen = manifestSplashScreenMap[manifest];
            if (!splashScreen) {
                return;
            }

            updateSplashExtensionInManifest(manifest, splashScreen);
        }
    }
}

module.exports.prepare = function (cordovaProject, options) {
    var self = this;

    var platformJson = PlatformJson.load(this.root, this.platform);
    var munger = new PlatformMunger(this.platform, this.root, platformJson, new PluginInfoProvider());
    this._config = updateConfigFilesFrom(cordovaProject.projectConfig, munger, this.locations);

    // CB-10845 avoid using cached appxmanifests since they could be
    // previously modififed outside of AppxManifest class
    // TODO: invalidate only entries that were affected by config munge
    AppxManifest.purgeCache();

    // Update own www dir with project's www assets and plugins' assets and js-files
    return Q.when(updateWww(cordovaProject, this.locations))
    .then(function () {
        // update project according to config.xml changes.
        return updateProjectAccordingTo(self._config, self.locations);
    })
    .then(function () {
        copyImages(cordovaProject, self.locations);

        // Update SplashScreen image extensions in the manifests
        // TODO: Do this only when config.xml changes
        updateSplashScreenImageExtensions(cordovaProject, self.locations);

        // CB-5421 Add BOM to all html, js, css files
        // to ensure app can pass Windows Store Certification
        addBOMSignature(self.locations.www);
    })
    .then(function () {
        events.emit('verbose', 'Prepared windows project successfully');
    });
};

module.exports.clean = function (options) {
    // A cordovaProject isn't passed into the clean() function, because it might have
    // been called from the platform shell script rather than the CLI. Check for the
    // noPrepare option passed in by the non-CLI clean script. If that's present, or if
    // there's no config.xml found at the project root, then don't clean prepared files.
    var projectRoot = path.resolve(this.root, '../..');
    var projectConfigFile = path.join(projectRoot, 'config.xml');
    if ((options && options.noPrepare) || !fs.existsSync(projectConfigFile) ||
            !fs.existsSync(this.locations.configXml)) {
        return Q();
    }

    var projectConfig = new ConfigParser(this.locations.configXml);

    var self = this;
    return Q().then(function () {
        cleanWww(projectRoot, self.locations);
        cleanImages(projectRoot, projectConfig, self.locations);
    });
};

/**
 * Adds BOM signature at the beginning of all js|html|css|json files in
 *   specified folder and all subfolders. This is required for application to
 *   pass Windows store certification successfully.
 *
 * @param  {String}  directory  Directory where we need to update files
 */
function addBOMSignature(directory) {
    shell.ls('-R', directory)
    .map(function (file) {
        return path.join(directory, file);
    })
    .forEach(addBOMToFile);
}

/**
 * Adds BOM signature at the beginning of file, specified by absolute
 * path. Ignores directories and non-js, -html or -css files.
 *
 * @param {String} file Absolute path to file to add BOM to
 */
function addBOMToFile(file) {
    if (!file.match(/\.(js|htm|html|css|json)$/i)) {
        return;
    }

    // skip if this is a folder
    if (!fs.lstatSync(file).isFile()) {
        return;
    }

    var content = fs.readFileSync(file);
    if (content[0] !== 0xEF && content[1] !== 0xBE && content[2] !== 0xBB) {
        fs.writeFileSync(file, '\ufeff' + content);
    }
}

module.exports.addBOMSignature = addBOMSignature;
module.exports.addBOMToFile = addBOMToFile;

/**
 * Updates config files in project based on app's config.xml and config munge,
 *   generated by plugins.
 *
 * @param   {ConfigParser}   sourceConfig  A project's configuration that will
 *   be merged into platform's config.xml
 * @param   {ConfigChanges}  configMunger  An initialized ConfigChanges instance
 *   for this platform.
 * @param   {Object}         locations     A map of locations for this platform
 *
 * @return  {ConfigParser}                 An instance of ConfigParser, that
 *   represents current project's configuration. When returned, the
 *   configuration is already dumped to appropriate config.xml file.
 */
function updateConfigFilesFrom(sourceConfig, configMunger, locations) {
    // First cleanup current config and merge project's one into own
    var defaultConfig = locations.defaultConfigXml;
    var ownConfig = locations.configXml;
    var sourceCfg = sourceConfig.path;
    // If defaults.xml is present, overwrite platform config.xml with it.
    // Otherwise save whatever is there as defaults so it can be
    // restored or copy project config into platform if none exists.
    if (fs.existsSync(defaultConfig)) {
        events.emit('verbose', 'Generating platform-specific config.xml from defaults for windows at ' + ownConfig);
        shell.cp('-f', defaultConfig, ownConfig);
    } else if (fs.existsSync(ownConfig)) {
        shell.cp('-f', ownConfig, defaultConfig);
    } else {
        shell.cp('-f', sourceCfg, ownConfig);
    }

    // Then apply config changes from global munge to all config files
    // in project (including project's config)
    configMunger.reapply_global_munge().save_all();

    events.emit('verbose', 'Merging project\'s config.xml into platform-specific windows config.xml');
    // Merge changes from app's config.xml into platform's one
    var config = new ConfigParser(ownConfig);
    xmlHelpers.mergeXml(sourceConfig.doc.getroot(),
        config.doc.getroot(), 'windows', /*clobber=*/true);

    config.write();
    return config;
}

/**
 * Logs all file operations via the verbose event stream, indented.
 */
function logFileOp(message) {
    events.emit('verbose', '  ' + message);
}

/**
 * Updates platform 'www' directory by replacing it with contents of
 *   'platform_www' and app www. Also copies project's overrides' folder into
 *   the platform 'www' folder
 *
 * @param   {Object}  cordovaProject    An object which describes cordova project.
 * @param   {Object}  destinations      An object that contains destination
 *   paths for www files.
 */
function updateWww(cordovaProject, destinations) {
    var sourceDirs = [
        path.relative(cordovaProject.root, cordovaProject.locations.www),
        path.relative(cordovaProject.root, destinations.platformWww)
    ];

    // If project contains 'merges' for our platform, use them as another overrides
    var merges_path = path.join(cordovaProject.root, 'merges', 'windows');
    if (fs.existsSync(merges_path)) {
        events.emit('verbose', 'Found "merges/windows" folder. Copying its contents into the windows project.');
        sourceDirs.push(path.join('merges', 'windows'));
    }

    var targetDir = path.relative(cordovaProject.root, destinations.www);
    events.emit(
        'verbose', 'Merging and updating files from [' + sourceDirs.join(', ') + '] to ' + targetDir);
    FileUpdater.mergeAndUpdateDir(
        sourceDirs, targetDir, { rootDir: cordovaProject.root }, logFileOp);
}

/**
 * Cleans all files from the platform 'www' directory.
 */
function cleanWww(projectRoot, locations) {
    var targetDir = path.relative(projectRoot, locations.www);
    events.emit('verbose', 'Cleaning ' + targetDir);

    // No source paths are specified, so mergeAndUpdateDir() will clear the target directory.
    FileUpdater.mergeAndUpdateDir(
        [], targetDir, { rootDir: projectRoot, all: true }, logFileOp);
}

/**
 * Updates project structure and AppxManifest according to project's configuration.
 *
 * @param   {ConfigParser}  projectConfig  A project's configuration that will
 *   be used to update project
 * @param   {Object}  locations       A map of locations for this platform
 */
function updateProjectAccordingTo(projectConfig, locations) {
    // Apply appxmanifest changes
    [MANIFEST_WINDOWS, MANIFEST_WINDOWS10, MANIFEST_PHONE]
    .forEach(function(manifestFile) {
        updateManifestFile(projectConfig, path.join(locations.root, manifestFile));
    });

    if (process.platform === 'win32') {
        applyUAPVersionToProject(path.join(locations.root, PROJECT_WINDOWS10), getUAPVersions(projectConfig));
    }
}
