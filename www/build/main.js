webpackJsonp([6],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(45);
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



var BASE_URL = "equipos/";
var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
    }
    TeamService.prototype.getPlayerTeamById = function (teamId) {
        return this.http.get(BASE_URL + "id/" + teamId).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    TeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpClient_service__["a" /* HttpClient */]])
    ], TeamService);
    return TeamService;
}());

//# sourceMappingURL=team.service.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabStandings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_httpClient_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabStandings = (function () {
    function TabStandings(navCtrl, http, userService) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.userService = userService;
    }
    TabStandings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\standings\standings.html"*/'\n\n<ion-content  width ="100%">\n\n  <ion-grid>\n\n    <ion-row id="colum-titles">\n\n        <ion-col col-xs-1>#</ion-col>\n\n        <ion-col col-4 id="title-team">Equipo</ion-col>\n\n        <ion-col col-xs-1>PJ</ion-col>\n\n        <ion-col col-xs-1>G</ion-col>\n\n        <ion-col col-xs-1>E</ion-col>\n\n        <ion-col col-xs-1>P</ion-col>\n\n        <ion-col col-xs-1>GF</ion-col>\n\n        <ion-col col-xs-1>GC</ion-col>\n\n        <ion-col col-xs-2><strong>PT</strong></ion-col>\n\n    </ion-row>\n\n    <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll= "true">\n\n        <ion-row *ngFor ="let team of userService.getUserLeague()" id= "colum-content">\n\n            <ion-col col-xs-1 id="team-position">{{team?.posicion}}</ion-col>\n\n            <ion-col col-4 id= "team-name">{{team?.nombre}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.partidosJugados}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.partidosGanados}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.partidosEmpatados}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.partidosPerdidos}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.goles}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.golesEncajados}}</ion-col>\n\n            <ion-col col-xs-2 class="team-info"><strong>{{team?.puntos}}</strong></ion-col>\n\n        </ion-row>\n\n    </ion-scroll>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\standings\standings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_httpClient_service__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__["a" /* UserService */]])
    ], TabStandings);
    return TabStandings;
}());

//# sourceMappingURL=standings.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpClient_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(45);
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
            this.http.setLogged(true);
            this.http.generateAuthTokens(username, password);
            return this.http.get("iniciarSesion/" + role).map(function (response) { return response; }, function (error) { return console.error(error); });
        }
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_3__httpClient_service__["a" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());

;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tabs_standings_standings__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tabs_team_tab_team__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tabs_league_league_tab__ = __webpack_require__(161);
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
    function HomeTabsPage(navCtrl, navParams, menuController, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuController = menuController;
        this.userService = userService;
        this.tabStandingsRoot = __WEBPACK_IMPORTED_MODULE_3__Tabs_standings_standings__["a" /* TabStandings */];
        this.tabTeamRoot = __WEBPACK_IMPORTED_MODULE_4__Tabs_team_tab_team__["a" /* TabTeam */];
        this.tabLeagueRoot = __WEBPACK_IMPORTED_MODULE_5__Tabs_league_league_tab__["a" /* TabLeague */];
        this.tabs = [];
        this.tabs = [
            { title: "Clasificación", root: __WEBPACK_IMPORTED_MODULE_3__Tabs_standings_standings__["a" /* TabStandings */], icon: "trophy" },
            { title: "Calendario", root: __WEBPACK_IMPORTED_MODULE_4__Tabs_team_tab_team__["a" /* TabTeam */], icon: "calendar" },
            { title: "Goleadores", root: __WEBPACK_IMPORTED_MODULE_5__Tabs_league_league_tab__["a" /* TabLeague */], icon: "podium" }
        ];
    }
    HomeTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-tabs',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\home-tabs.html"*/'<ion-header>\n    <ion-navbar height="20px" color="primary">\n      <button ion-button menuToggle id="button-toggle">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Inicio</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="false">\n  <ion-tabs height="100%" swipeEnable ="false" color="primary">\n    <ion-tab *ngFor ="let tab of tabs" [root]="tab.root" [tabTitle]="tab.title" [tabIcon] = "tab.icon"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\home-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */]])
    ], HomeTabsPage);
    return HomeTabsPage;
}());

//# sourceMappingURL=home-tabs.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabTeam; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_match_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_match__ = __webpack_require__(160);
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
    function TabTeam(navCtrl, navParams, userService, matchService, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.matchService = matchService;
        this.app = app;
        this.roundSelected = 1;
        this.matchService.getMatchByRoundAndLeague(this.roundSelected, this.userService.getUserTeam().liga).subscribe(function (matches) {
            _this.roundMatches = matches;
            console.log(_this.roundMatches);
        }, function (error) { return console.error(error); });
    }
    TabTeam.prototype.roundInfo = function (day) {
        var _this = this;
        this.roundSelected = day;
        this.matchService.getMatchByRoundAndLeague(this.roundSelected, this.userService.getUserTeam().liga).subscribe(function (matches) {
            _this.roundMatches = matches;
            console.log(_this.roundMatches);
        }, function (error) { return console.error(error); });
        console.log(this.roundSelected);
        console.log("Informacion de la jornada " + day);
    };
    TabTeam.prototype.matchInfo = function (id) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__match_match__["a" /* MatchPage */], { matchId: id });
    };
    TabTeam = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tab-team',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\team\tab-team.html"*/'<ion-header style="padding:0px">\n    <ion-toolbar style="padding:0px; max-height:50px">\n        <ion-slides  slidesPerView="3">\n            <ion-slide *ngFor="let num of userService.getRounds()" [class.selected] = "roundSelected === num" (click)="roundInfo(num)"  >\n                    <p id="slide-title">Jornada {{num}}</p>\n            </ion-slide>\n        </ion-slides>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll= "true">\n        <ion-item *ngFor = "let match of roundMatches" (click)="matchInfo(match.id)" id="match-info">\n            <ion-row id ="date">\n                <ion-col>\n                    {{match.fechaPartido}}\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf = "match.estado == \'Finalizado\' || match.estado == \'finalizado\' ">\n                <ion-col col-4 class= "team-local">{{match.equipoLocal.nombre}}</ion-col>\n                <ion-col col-1 class= "score-local"><h1>{{match.golesLocal}}</h1></ion-col>\n                <ion-col col-2><h1>-</h1></ion-col>\n                <ion-col col-1 class = "score-visitor"><h1>{{match.golesVisitante}}</h1></ion-col>\n                <ion-col col-4 class = "team-visitor">{{match.equipoVisitante.nombre}}</ion-col>\n            </ion-row>\n            <ion-row *ngIf = "match.estado != \'Finalizado\'">\n                <ion-col col-4 class= "team-local">{{match.equipoLocal.nombre}}</ion-col>\n                <ion-col col-4><h1>{{match.horaPartido}}</h1></ion-col>\n                <ion-col col-4 class = "team-visitor">{{match.equipoVisitante.nombre}}</ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\team\tab-team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_match_service__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], TabTeam);
    return TabTeam;
}());

//# sourceMappingURL=tab-team.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_match_service__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchPage = (function () {
    function MatchPage(navCtrl, navParams, matchService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.matchService = matchService;
        this.statSelected = "stats";
        this.matchService.getMatchById(this.navParams.get('matchId')).subscribe(function (match) { return _this.match = match; });
    }
    MatchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchPage');
    };
    MatchPage.prototype.selectStat = function (stat) {
        this.statSelected = stat;
    };
    MatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-match',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\match\match.html"*/'\n<ion-header>\n  <ion-navbar height="20px" color ="transparent">\n    <button ion-button menuToggle id="button-toggle">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n  <ion-row *ngIf ="match?.estado == \'Finalizado\' || match?.estado == \'finalizado\'" id = "match-info">\n    <ion-col id = "local-name">\n      <strong>{{match?.equipoLocal.nombre}}</strong>\n    </ion-col>\n    <ion-col id = "goals-local">\n      {{match?.golesLocal}}\n    </ion-col>\n    <ion-col id = "separation">\n      -\n    </ion-col>\n    <ion-col id = "goals-visitor">\n      {{match?.golesVisitante}}\n    </ion-col>\n    <ion-col id = "visitor-name">\n      <strong>{{match?.equipoVisitante.nombre}}</strong>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf= "match?.estado == \'Pendiente\' || match?.estado == \'pendiente\'" id = "match-info">\n    <ion-col id = "local-name">\n      <strong>{{match?.equipoLocal.nombre}}</strong>\n    </ion-col>\n    <ion-col id = "match-time">\n      {{match?.horaPartido}}\n    </ion-col>\n    <ion-col id = "visitor-name">\n      <strong>{{match?.equipoVisitante.nombre}}</strong>\n    </ion-col>\n  </ion-row>\n  <ion-toolbar *ngIf = "match != undefined" style="padding:0px; max-height:50px">\n    <ion-slides  slidesPerView="3">\n        <ion-slide [class.selected] = "statSelected == \'stats\'" (click)="selectStat(\'stats\')">\n                <p id="slide-title">Estadísticas</p>\n        </ion-slide>\n        <ion-slide [class.selected] = "statSelected == \'goals\'" (click)="selectStat(\'goals\')">\n            <p id="slide-title">Goles</p>\n        </ion-slide>\n        <ion-slide [class.selected] = "statSelected == \'lineUp\'" (click)="selectStat(\'lineUp\')">\n          <p id="slide-title">Titulares</p>\n        </ion-slide>\n    </ion-slides>\n</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngIf = "statSelected == \'stats\' && match?.estado == \'Finalizado\' || match?.estado == \'finalizado\'">\n    <ion-item>\n      <ion-row>\n        <ion-col col-xs-4 class = "stats-info-local"><strong>5</strong></ion-col>\n        <ion-col col-xs-4 class = "stats-title">InfoTitle</ion-col>\n        <ion-col col-xs-4 class = "stats-info-visitor"><strong>4</strong></ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf = "statSelected == \'lineUp\' && match?.estado == \'Finalizado\' || match?.estado == \'finalizado\'">\n    <ion-item *ngFor = "let localPlayer of match?.convocadosLocal; let i = index">\n      <ion-row>\n        <ion-col class = "info-lineup">\n          <strong>{{localPlayer.dorsal}}</strong> {{localPlayer.nombre}}\n        </ion-col>\n        <ion-col class = "info-lineup" *ngIf = "match?.convocadosVisitante[i] != null && match?.convocadosVisitante[i] != undefined">\n         <strong>{{match?.convocadosVisitante[i].dorsal}}</strong> {{match?.convocadosVisitante[i].nombre}}\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n  <ion-item no-lines *ngIf = "match?.estado == \'Pendiente\' || match?.estado == \'pendiente\'">\n    <img id = "not-data-icon" src = "/assets/imgs/not-data-icon.png">\n    <p><strong>Pendiente de jugar</strong></p>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\match\match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_match_service__["a" /* MatchService */]])
    ], MatchPage);
    return MatchPage;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabLeague; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_player__ = __webpack_require__(162);
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
    function TabLeague(navCtrl, navParams, userService, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.app = app;
        this.rankSelected = "goals";
    }
    TabLeague.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeagueTabPage');
    };
    TabLeague.prototype.clickPlayer = function (id, teamID) {
        console.log("Id del equipo del jugador es " + teamID);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__player_player__["a" /* PlayerPage */], { playerId: id, teamId: teamID });
    };
    TabLeague.prototype.selectRank = function (type) {
        this.rankSelected = type;
    };
    TabLeague = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'league-tab',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\league\league-tab.html"*/'\n<ion-header style="padding:0px">\n    <ion-toolbar style="padding:0px; max-height:50px">\n        <ion-slides  slidesPerView="3">\n            <ion-slide [class.selected] = "rankSelected == \'goals\'" (click)="selectRank(\'goals\')">\n                    <p id="slide-title">Goleadores</p>\n            </ion-slide>\n            <ion-slide [class.selected] = "rankSelected == \'foul\'" (click)="selectRank(\'foul\')">\n                <p id="slide-title">Faltas</p>\n            </ion-slide>\n            <ion-slide [class.selected] = "rankSelected == \'cards\'" (click)="selectRank(\'cards\')">\n              <p id="slide-title">Tarjetas</p>\n            </ion-slide>\n        </ion-slides>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll= "true">\n      <ion-row (click)="clickPlayer(player.id, player.equipo)" *ngFor = "let player of userService.getTopGoals(); let position = index;" class = "player-info">\n        <ion-col col-xs-1 id="player-position">{{position+1}}</ion-col>\n        <ion-col col-xs-3 id="col-player-image">\n            <img id = "player-image" src="http://192.168.1.39:8080/images/{{player?.fotoJugador}}">\n        </ion-col>\n        <ion-col col-6 id="player-name">{{player.nombre}}</ion-col>\n        <ion-col col-xs-2 id ="player-goals"><h1>{{player.goles}}</h1></ion-col>\n      </ion-row>\n  </ion-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\league\league-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], TabLeague);
    return TabLeague;
}());

//# sourceMappingURL=league-tab.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_player_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerPage = (function () {
    function PlayerPage(navCtrl, navParams, playerService, teamService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.playerService = playerService;
        this.teamService = teamService;
        this.teamService.getPlayerTeamById(this.navParams.get('teamId')).subscribe(function (team) { return _this.playerTeam = team; });
        this.playerService.getPlayerById(this.navParams.get('playerId')).subscribe(function (player) { return _this.player = player; });
    }
    PlayerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayerPage');
    };
    PlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-player',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\player\player.html"*/'<ion-header>\n    <ion-navbar height="20px" color ="transparent">\n      <button ion-button menuToggle id="button-toggle">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n    <ion-row id = "main-info" *ngIf="player != undefined">\n      <ion-col col-xs-8 class ="col-player-image">\n          <img id = "player-image" src ="http://192.168.1.39:8080/images/{{player?.fotoJugador}}">\n      </ion-col>\n      <ion-col col-xs-1> \n        <h1 id = "player-number">{{player?.dorsal}}</h1>\n      </ion-col>\n      <ion-col col-xs-3 id ="player-team">\n        <strong>{{playerTeam?.nombre}}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="player != undefined">\n      <ion-col col-xs-12 id = "player-name">\n          <h1 id = "player-name-text">{{player?.nombre}}    {{player?.apellidos}}</h1>\n      </ion-col>\n    </ion-row>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-row>\n        <ion-col class = "name-player-atribute">\n            Posición\n        </ion-col>\n        <ion-col class = "player-atribute">\n            <strong>{{player?.posicion}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n        <ion-row>\n          <ion-col class = "name-player-atribute">\n            Nacionalidad\n          </ion-col>\n          <ion-col class = "player-atribute">\n            <strong>{{player?.nacionalidad}}</strong>\n          </ion-col>\n        </ion-row>\n    </ion-item>\n    <ion-item>\n        <ion-row>\n          <ion-col class = "name-player-atribute">\n            Edad\n          </ion-col>\n          <ion-col class = "player-atribute">\n            <strong>{{player?.edad}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    <ion-item>\n        <ion-row>\n          <ion-col class = "name-player-atribute">\n            Goles\n          </ion-col>\n          <ion-col class = "player-atribute">\n            <strong>{{player?.goles}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col class = "name-player-atribute">\n            Tarjetas Amarillas \n        </ion-col>\n        <ion-col class = "player-atribute">\n            <strong>{{player?.tarjetasAmarillas}}</strong>\n        </ion-col>\n      </ion-row>          \n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col class = "name-player-atribute">\n          Tarjetas Rojas\n        </ion-col>\n        <ion-col class = "player-atribute">\n          <strong>{{player?.tarjetasRojas}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\player\player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__["a" /* TeamService */]])
    ], PlayerPage);
    return PlayerPage;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_login_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_user_service__ = __webpack_require__(44);
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
    function LoginPage(navCtrl, navParams, menuController, loginService, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuController = menuController;
        this.loginService = loginService;
        this.userService = userService;
    }
    LoginPage.prototype.goHomePage = function (username, password) {
        var _this = this;
        this.loginService.login(username, password).subscribe(function (reponse) {
            _this.userService.generateUserData();
            _this.menuController.enable(true);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__["a" /* HomeTabsPage */]);
        }, function (error) { return console.error(error); });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.menuController.enable(false);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\login\login.html"*/'\n<ion-content padding>\n      <div padding  id="cloud-layer">\n    \n        <ion-row>\n          <ion-col>\n            <img  src="assets/imgs/login.png" />\n          </ion-col>\n        </ion-row>\n    \n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n    \n              <ion-item>\n                <ion-label>Username</ion-label>\n                <ion-input type="text" #username></ion-input>\n              </ion-item>\n    \n              <ion-item>\n                <ion-label>Password</ion-label>\n                <ion-input type="password" #password></ion-input>\n              </ion-item>\n    \n            </ion-list>\n          </ion-col>\n        </ion-row>\n    \n        <ion-row>\n          <ion-col>\n            <button ion-button (click)="goHomePage(username?.value, password?.value)" class="login-button" >Login</button>\n          </ion-col>\n        </ion-row>\n    \n      </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__app_services_user_service__["a" /* UserService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 176:
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
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home-tabs/Tabs/league/league-tab.module": [
		695,
		5
	],
	"../pages/home-tabs/Tabs/team/tab-team.module": [
		696,
		4
	],
	"../pages/home-tabs/home-tabs.module": [
		694,
		3
	],
	"../pages/login/login.module": [
		697,
		2
	],
	"../pages/match/match.module": [
		698,
		1
	],
	"../pages/player/player.module": [
		699,
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
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(45);
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



var BASE_URL = "ligas/";
var LeagueService = (function () {
    function LeagueService(http) {
        this.http = http;
    }
    LeagueService.prototype.getLeagueByName = function (name) {
        return this.http.get(BASE_URL + name).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    LeagueService.prototype.getStandings = function (name) {
        return this.http.get(BASE_URL + name + '/clasificacion').map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    LeagueService.prototype.getTopGoals = function (name) {
        return this.http.get(BASE_URL + name + '/goleadores').map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    LeagueService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpClient_service__["a" /* HttpClient */]])
    ], LeagueService);
    return LeagueService;
}());

//# sourceMappingURL=league.service.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_app_services_player_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_app_services_login_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_app_services_httpClient_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_app_services_team_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_app_services_match_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_app_services_user_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_app_services_league_service__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_tabs_home_tabs__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_tabs_Tabs_standings_standings__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_tabs_Tabs_team_tab_team__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_tabs_Tabs_league_league_tab__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_player_player__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_match_match__ = __webpack_require__(160);
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
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_tabs_Tabs_standings_standings__["a" /* TabStandings */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_tabs_Tabs_team_tab_team__["a" /* TabTeam */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_tabs_Tabs_league_league_tab__["a" /* TabLeague */],
                __WEBPACK_IMPORTED_MODULE_20__pages_player_player__["a" /* PlayerPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_match_match__["a" /* MatchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home-tabs/home-tabs.module#HomeTabsPageModule', name: 'HomeTabsPage', segment: 'home-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tabs/Tabs/league/league-tab.module#LeagueTabPageModule', name: 'TabLeague', segment: 'league-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tabs/Tabs/team/tab-team.module#TabTeamPageModule', name: 'TabTeam', segment: 'tab-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match/match.module#MatchPageModule', name: 'MatchPage', segment: 'match', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/player/player.module#PlayerPageModule', name: 'PlayerPage', segment: 'player', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_tabs_Tabs_standings_standings__["a" /* TabStandings */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_tabs_Tabs_team_tab_team__["a" /* TabTeam */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_tabs_Tabs_league_league_tab__["a" /* TabLeague */],
                __WEBPACK_IMPORTED_MODULE_20__pages_player_player__["a" /* PlayerPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_match_match__["a" /* MatchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__src_app_services_player_service__["a" /* PlayerService */],
                __WEBPACK_IMPORTED_MODULE_8__src_app_services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_10__src_app_services_team_service__["a" /* TeamService */],
                __WEBPACK_IMPORTED_MODULE_11__src_app_services_match_service__["a" /* MatchService */],
                __WEBPACK_IMPORTED_MODULE_9__src_app_services_httpClient_service__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_12__src_app_services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_13__src_app_services_league_service__["a" /* LeagueService */],
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

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(45);
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



var BASE_URL = "http://192.168.1.39:8080/";
var HttpClient = (function () {
    function HttpClient(http) {
        this.http = http;
        this.logged = false;
    }
    HttpClient.prototype.generateAuthTokens = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var credentials = btoa(username + ":" + password);
        if (this.logged == true) {
            headers.append("Authorization", "Basic " + credentials);
            this.authTokens = headers;
        }
    };
    //All server request they need to be logged.
    HttpClient.prototype.get = function (url) {
        return this.http.get((BASE_URL + url), { headers: this.authTokens }).map(function (response) {
            //console.log(response.json())
            return response.json();
        }, function (error) { return console.error(error.json()); });
    };
    HttpClient.prototype.put = function (url) {
    };
    HttpClient.prototype.post = function (url) {
    };
    HttpClient.prototype.delete = function (url) {
    };
    HttpClient.prototype.isLogged = function () {
        return this.logged;
    };
    HttpClient.prototype.setLogged = function (value) {
        this.logged = value;
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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__league_service__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http, teamService, matchService, leagueService) {
        this.http = http;
        this.teamService = teamService;
        this.matchService = matchService;
        this.leagueService = leagueService;
        this.rounds = [];
    }
    UserService.prototype.generateUserData = function () {
        var _this = this;
        return this.http.get("jugadores/usuario").subscribe(function (response) {
            _this.user = response;
            _this.teamService.getPlayerTeamById(response.equipo).subscribe(function (team) {
                if (team != null || team != undefined) {
                    _this.userTeam = team;
                    _this.leagueService.getStandings(team.liga).subscribe(function (league) {
                        _this.userLeague = league;
                        for (var i = 1; i <= ((league.length - 1) * 2); i++) {
                            _this.rounds.push(i);
                        }
                        ;
                    });
                    _this.leagueService.getTopGoals(team.liga).subscribe(function (top) { return _this.userLeaguePlayers = top; });
                    _this.matchService.getMatchByLeague(team.liga).subscribe(function (leagueMatches) { return _this.leagueMaches = leagueMatches; });
                    _this.matchService.getMatchTeamById(response.equipo).subscribe(function (matches) { return _this.userMatches = matches; });
                }
                ;
            });
            /*this.matchService.getMatchTeamById(response.equipo).subscribe(
                matches => this.userMatches = matches
            )*/
        }, function (error) { return console.error(error); });
    };
    UserService.prototype.isLogged = function () {
        return this.http.isLogged();
    };
    UserService.prototype.getUserLogged = function () {
        return this.user;
    };
    UserService.prototype.getUserTeam = function () {
        return this.userTeam;
    };
    UserService.prototype.getUserLeague = function () {
        return this.userLeague;
    };
    UserService.prototype.getUserMatches = function () {
        return this.userMatches;
    };
    UserService.prototype.getRounds = function () {
        return this.rounds;
    };
    UserService.prototype.getTopGoals = function () {
        return this.userLeaguePlayers;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpClient_service__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_4__match_service__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_3__league_service__["a" /* LeagueService */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_tabs_Tabs_standings_standings__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_player_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_login_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__(44);
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
    function MyApp(platform, statusBar, splashScreen, loginService, userService) {
        this.loginService = loginService;
        this.userService = userService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        //rootPage:any = HomeTabsPage;
        this.homePage = __WEBPACK_IMPORTED_MODULE_4__pages_home_tabs_Tabs_standings_standings__["a" /* TabStandings */];
        this.servicePlayer = __WEBPACK_IMPORTED_MODULE_6__services_player_service__["a" /* PlayerService */];
        /*this.loginService.login("alex","pass").subscribe(
          reponse => {
            this.userService.generateUserData();
          },
          error => console.error(error)
        );*/
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color = "primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item>Boton</button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(45);
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



var BASE_URL = "partidos/";
var MatchService = (function () {
    function MatchService(http) {
        this.http = http;
    }
    MatchService.prototype.getMatchTeamById = function (idMatch) {
        return this.http.get(BASE_URL + 'partidosEquipo/' + idMatch).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    MatchService.prototype.getMatchByLeague = function (league) {
        return this.http.get(BASE_URL + 'liga/' + league).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    MatchService.prototype.getMatchByRoundAndLeague = function (round, league) {
        return this.http.get(BASE_URL + 'jornada/' + round + '/' + league).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    MatchService.prototype.getMatchById = function (id) {
        return this.http.get(BASE_URL + id).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    MatchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpClient_service__["a" /* HttpClient */]])
    ], MatchService);
    return MatchService;
}());

//# sourceMappingURL=match.service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(45);
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



var BASE_URL = "jugadores/";
var PlayerService = (function () {
    function PlayerService(http) {
        this.http = http;
    }
    ;
    PlayerService.prototype.getPlayerById = function (id) {
        return this.http.get(BASE_URL + "id/" + id).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    PlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpClient_service__["a" /* HttpClient */]])
    ], PlayerService);
    return PlayerService;
}());

;
//# sourceMappingURL=player.service.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.js.map