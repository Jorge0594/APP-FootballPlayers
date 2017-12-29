webpackJsonp([4],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabHome = (function () {
    function TabHome(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TabHome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\home\home.html"*/'<ion-content>\n\n  <h1>Soy el home</h1>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], TabHome);
    return TabHome;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tabs_home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tabs_team_tab_team__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tabs_league_league_tab__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeTabsPage = (function () {
    function HomeTabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabHomeRoot = __WEBPACK_IMPORTED_MODULE_2__Tabs_home_home__["a" /* TabHome */];
        this.tabTeamRoot = __WEBPACK_IMPORTED_MODULE_3__Tabs_team_tab_team__["a" /* TabTeam */];
        this.tabLeagueRoot = __WEBPACK_IMPORTED_MODULE_4__Tabs_league_league_tab__["a" /* TabLeague */];
    }
    HomeTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-tabs',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\home-tabs.html"*/'\n  <ion-tabs>\n    <ion-tab [root]="tabHomeRoot" tabTitle="Home" tabIcon="home">sdasd</ion-tab>\n    <ion-tab [root]="tabTeamRoot" tabTitle="Equipo" tabIcon="football">asdad</ion-tab>\n    <ion-tab [root]="tabLeagueRoot" tabTitle="LIga" tabIcon="trophy" >asdada</ion-tab>\n  </ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\home-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], HomeTabsPage);
    return HomeTabsPage;
}());

//# sourceMappingURL=home-tabs.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabTeam; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabTeam = (function () {
    function TabTeam(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TabTeam.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabTeamPage');
    };
    TabTeam = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tab-team',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\team\tab-team.html"*/'<ion-content>\n    <h1>Soy el Tab del equipo</h1>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\team\tab-team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TabTeam);
    return TabTeam;
}());

//# sourceMappingURL=tab-team.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabLeague; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabLeague = (function () {
    function TabLeague(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TabLeague.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeagueTabPage');
    };
    TabLeague = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'league-tab',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\league\league-tab.html"*/'\n\n\n<ion-content >\n  <h1>Soy el tap de la liga</h1>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\league\league-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TabLeague);
    return TabLeague;
}());

//# sourceMappingURL=league-tab.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.goHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__["a" /* HomeTabsPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\login\login.html"*/'<ion-content>\n    <ion-content>\n\n      <div padding  id="cloud-layer">\n    \n        <ion-row>\n          <ion-col>\n            <img  src="assets/imgs/login.png" />\n          </ion-col>\n        </ion-row>\n    \n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n    \n              <ion-item>\n                <ion-label>Username</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n    \n              <ion-item>\n                <ion-label>Password</ion-label>\n                <ion-input type="password"></ion-input>\n              </ion-item>\n    \n            </ion-list>\n          </ion-col>\n        </ion-row>\n    \n        <ion-row>\n          <ion-col>\n            <button ion-button (click)="goHomePage()" class="login-button" >Login</button>\n          </ion-col>\n        </ion-row>\n    \n      </div>\n    \n    </ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home-tabs/Tabs/league/league-tab.module": [
		687,
		3
	],
	"../pages/home-tabs/Tabs/team/tab-team.module": [
		688,
		2
	],
	"../pages/home-tabs/home-tabs.module": [
		686,
		1
	],
	"../pages/login/login.module": [
		689,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Player } from '../Class/player.model';

var PlayerService = (function () {
    function PlayerService(http) {
        this.http = http;
    }
    ;
    PlayerService.prototype.getHttpPlayers = function () {
        return this.http.get('assets/data/players.json')
            .map(function (response) { return response.json(); });
    };
    PlayerService.prototype.getPlayer = function () {
        return this.players;
    };
    PlayerService.prototype.loadPlayers = function () {
        var _this = this;
        /* this.getHttpPlayers().subscribe(
             reponse => {
                 this.players = reponse.players;
             }
         )*/
        console.log("Llama a load palyers");
        return this.http.get('assets/data/players.json')
            .map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.players = data;
        });
    };
    PlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PlayerService);
    return PlayerService;
}());

;
//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(361);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_app_services_player_service__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_tabs_home_tabs__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_tabs_Tabs_home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_tabs_Tabs_team_tab_team__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_tabs_Tabs_league_league_tab__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_tabs_Tabs_home_home__["a" /* TabHome */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_tabs_Tabs_team_tab_team__["a" /* TabTeam */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_tabs_Tabs_league_league_tab__["a" /* TabLeague */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home-tabs/home-tabs.module#HomeTabsPageModule', name: 'HomeTabsPage', segment: 'home-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tabs/Tabs/league/league-tab.module#LeagueTabPageModule', name: 'TabLeague', segment: 'league-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tabs/Tabs/team/tab-team.module#TabTeamPageModule', name: 'TabTeam', segment: 'tab-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_tabs_Tabs_home_home__["a" /* TabHome */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_tabs_Tabs_team_tab_team__["a" /* TabTeam */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_tabs_Tabs_league_league_tab__["a" /* TabLeague */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__src_app_services_player_service__["a" /* PlayerService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_tabs_Tabs_home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_player_service__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.homePage = __WEBPACK_IMPORTED_MODULE_4__pages_home_tabs_Tabs_home_home__["a" /* TabHome */];
        this.servicePlayer = __WEBPACK_IMPORTED_MODULE_6__services_player_service__["a" /* PlayerService */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map