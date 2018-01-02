webpackJsonp([4],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_httpClient_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_login_service__ = __webpack_require__(130);
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
    function TabHome(navCtrl, loginService, http) {
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.http = http;
        this.loginService.getPlayerLogged();
    }
    TabHome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\home\home.html"*/'<ion-content hideScroll= "true">\n\n  <h1>Soy el home</h1>\n\n  <ion-list>\n\n    <ion-item>Soy el item 1</ion-item>\n\n    <ion-item>{{loginService.getUser()?.nombre}}</ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_services_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_httpClient_service__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_services_httpClient_service__["a" /* HttpClient */]) === "function" && _c || Object])
    ], TabHome);
    return TabHome;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(114);
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



var BASE_URL = "http://localhost:8080/";
var HttpClient = (function () {
    function HttpClient(http) {
        this.http = http;
        this.isLogged = false;
    }
    HttpClient.prototype.generateAuthTokens = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var credentials = btoa(username + ":" + password);
        if (this.isLogged == true) {
            headers.append("Authorization", "Basic " + credentials);
            this.authTokens = headers;
        }
    };
    //All server request they need to be logged.
    HttpClient.prototype.get = function (url) {
        return this.http.get((BASE_URL + url), { headers: this.authTokens }).map(function (response) {
            console.log(response.json());
            return response.json();
        }, function (error) { return console.error(error.json()); });
    };
    HttpClient.prototype.put = function (url) {
    };
    HttpClient.prototype.post = function (url) {
    };
    HttpClient.prototype.delete = function (url) {
    };
    HttpClient.prototype.isLoggedUser = function () {
        return this.isLogged;
    };
    HttpClient.prototype.setIsLoggedUser = function (value) {
        this.isLogged = value;
    };
    HttpClient.prototype.getUserLogged = function () {
        return this.userLoged;
    };
    HttpClient.prototype.setUserLogged = function (user) {
        console.log("Llamo a setUserLogged");
        this.userLoged = user;
    };
    HttpClient.prototype.getAuthTokens = function () {
        return this.authTokens;
    };
    HttpClient = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpClient);
    return HttpClient;
}());

;
//# sourceMappingURL=httpClient.service.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpClient_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var role = "ROLE_JUGADOR";
var LoginService = (function () {
    function LoginService(playerService, http) {
        this.playerService = playerService;
        this.http = http;
    }
    LoginService.prototype.login = function (username, password) {
        if (username == "" || username == null || username == undefined) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Server error (401):Por favor introduzca el nombre de usuario correcto");
        }
        else {
            this.http.setIsLoggedUser(true);
            this.http.generateAuthTokens(username, password);
            return this.http.get("iniciarSesion/" + role).map(function (response) { return response; }, function (error) { return console.error(error); });
        }
    };
    LoginService.prototype.isLoggedUser = function () {
    };
    LoginService.prototype.getPlayerLogged = function () {
        var _this = this;
        return this.http.get("jugadores/usuario").subscribe(function (response) {
            console.log("response");
            _this.http.setUserLogged(response);
        }, function (error) { return console.error(error); });
    };
    LoginService.prototype.getUser = function () {
        return this.http.getUserLogged();
    };
    LoginService.prototype.getIsUserLogged = function () {
        return this.http.isLoggedUser();
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__httpClient_service__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__httpClient_service__["a" /* HttpClient */]) === "function" && _b || Object])
    ], LoginService);
    return LoginService;
    var _a, _b;
}());

;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(114);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PlayerService);
    return PlayerService;
}());

;
//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tabs_home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tabs_team_tab_team__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tabs_league_league_tab__ = __webpack_require__(158);
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
            selector: 'page-home-tabs',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\home-tabs.html"*/'<ion-header>\n  <ion-navbar hideBackButton = "true">\n      <img id = "nav-icon" src ="assets/imgs/icon.png">\n      <h1 id = "nav-title">APP TITLE</h1>\n      <button ion-button id ="profile-button">\n        <ion-icon name="person"></ion-icon>\n      </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="false">\n  <ion-tabs>\n    <ion-tab [root]="tabHomeRoot" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tabTeamRoot" tabTitle="Equipo" tabIcon="football"></ion-tab>\n    <ion-tab [root]="tabLeagueRoot" tabTitle="Liga" tabIcon="trophy" ></ion-tab>\n  </ion-tabs>\n</ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\home-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], HomeTabsPage);
    return HomeTabsPage;
}());

//# sourceMappingURL=home-tabs.js.map

/***/ }),

/***/ 157:
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
            selector: 'tab-team',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\team\tab-team.html"*/'<ion-content >\n    <h1>Soy el Tab del equipo</h1>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\team\tab-team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TabTeam);
    return TabTeam;
}());

//# sourceMappingURL=tab-team.js.map

/***/ }),

/***/ 158:
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
            selector: 'league-tab',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\league\league-tab.html"*/'\n<ion-content >\n  <h1>Soy el tap de la liga</h1>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\league\league-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TabLeague);
    return TabLeague;
}());

//# sourceMappingURL=league-tab.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_login_service__ = __webpack_require__(130);
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
    function LoginPage(navCtrl, navParams, loginService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginService = loginService;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.goHomePage = function (username, password) {
        var _this = this;
        this.loginService.login(username, password).subscribe(function (reponse) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__["a" /* HomeTabsPage */]);
        }, function (error) { return console.error(error); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\login\login.html"*/'\n<ion-content padding>\n      <div padding  id="cloud-layer">\n    \n        <ion-row>\n          <ion-col>\n            <img  src="assets/imgs/login.png" />\n          </ion-col>\n        </ion-row>\n    \n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n    \n              <ion-item>\n                <ion-label>Username</ion-label>\n                <ion-input type="text" #username></ion-input>\n              </ion-item>\n    \n              <ion-item>\n                <ion-label>Password</ion-label>\n                <ion-input type="password" #password></ion-input>\n              </ion-item>\n    \n            </ion-list>\n          </ion-col>\n        </ion-row>\n    \n        <ion-row>\n          <ion-col>\n            <button ion-button (click)="goHomePage(username?.value, password?.value)" class="login-button" >Login</button>\n          </ion-col>\n        </ion-row>\n    \n      </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_services_login_service__["a" /* LoginService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 172:
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
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home-tabs/Tabs/league/league-tab.module": [
		689,
		3
	],
	"../pages/home-tabs/Tabs/team/tab-team.module": [
		690,
		2
	],
	"../pages/home-tabs/home-tabs.module": [
		688,
		1
	],
	"../pages/login/login.module": [
		691,
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
webpackAsyncContext.id = 217;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_app_services_player_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_app_services_login_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_app_services_httpClient_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_tabs_home_tabs__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_tabs_Tabs_home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_tabs_Tabs_team_tab_team__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_tabs_Tabs_league_league_tab__ = __webpack_require__(158);
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
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_tabs_Tabs_home_home__["a" /* TabHome */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_tabs_Tabs_team_tab_team__["a" /* TabTeam */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_tabs_Tabs_league_league_tab__["a" /* TabLeague */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
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
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_tabs_Tabs_home_home__["a" /* TabHome */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_tabs_Tabs_team_tab_team__["a" /* TabTeam */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_tabs_Tabs_league_league_tab__["a" /* TabLeague */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__src_app_services_player_service__["a" /* PlayerService */],
                __WEBPACK_IMPORTED_MODULE_8__src_app_services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_9__src_app_services_httpClient_service__["a" /* HttpClient */],
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

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_tabs_Tabs_home_home__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_player_service__ = __webpack_require__(131);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\app\app.html"*/'\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.js.map