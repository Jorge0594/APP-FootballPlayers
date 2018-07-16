webpackJsonp([9],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(34);
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

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabStandings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_httpClient_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_team_service__ = __webpack_require__(52);
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
    function TabStandings(navCtrl, navParams, http, userService, teamService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.userService = userService;
        this.teamService = teamService;
        if (this.navParams.data[0] == 'team') {
            this.team = userService.getUserTeam();
            for (var _i = 0, _a = this.team.plantillaEquipo; _i < _a.length; _i++) {
                var player = _a[_i];
                if (player.capitan) {
                    this.capitain = player;
                }
            }
        }
        else if (this.navParams.data[0] == 'teamsList') {
            this.teamService.getPlayerTeamById(this.navParams.data[1]).subscribe(function (team) {
                _this.team = team;
                for (var _i = 0, _a = team.plantillaEquipo; _i < _a.length; _i++) {
                    var player = _a[_i];
                    if (player.capitan) {
                        _this.capitain = player;
                    }
                }
            });
        }
    }
    TabStandings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\standings\standings.html"*/'<!--ion-header *ngIf = "navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n\n  <div id = "team-shield-background"></div>\n\n  <div><img id="shield-team-image" src = "http://192.168.1.39:8080/images/shield.png"></div>\n\n</ion-header-->\n\n<ion-content width ="100%" [class.team-info-content] = "navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'" >\n\n  <ion-grid *ngIf = "navParams.data[0] == \'league\' && userService.getUserLeague() != undefined">\n\n    <ion-row id="colum-titles">\n\n        <ion-col col-xs-1>#</ion-col>\n\n        <ion-col col-4 id="title-team">Equipo</ion-col>\n\n        <ion-col col-xs-1>PJ</ion-col>\n\n        <ion-col col-xs-1>G</ion-col>\n\n        <ion-col col-xs-1>E</ion-col>\n\n        <ion-col col-xs-1>P</ion-col>\n\n        <ion-col col-xs-1>GF</ion-col>\n\n        <ion-col col-xs-1>GC</ion-col>\n\n        <ion-col col-xs-2><strong>PT</strong></ion-col>\n\n    </ion-row>\n\n    <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll= "true">\n\n        <ion-row *ngFor ="let team of userService.getUserLeague(); let i = index" id= "colum-content">\n\n            <ion-col col-xs-1 id="team-position" [class.first-position] = "(i + 1) == 1" [class.last-position] = "(i + 1) == userService.getUserLeague()?.length">{{i+1}}</ion-col>\n\n            <ion-col col-4 id= "team-name">{{team?.nombre}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.partidosJugados}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.partidosGanados}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.partidosEmpatados}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.partidosPerdidos}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.goles}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.golesEncajados}}</ion-col>\n\n            <ion-col col-xs-2 class="team-info"><strong>{{team?.puntos}}</strong></ion-col>\n\n        </ion-row>\n\n    </ion-scroll>\n\n  </ion-grid>\n\n\n\n  <div *ngIf = "navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n\n    <div id = "team-shield-background"></div>\n\n    <div><img id="shield-team-image" src = "{{userService.getBaseURLforImages()}}shield.png"></div>\n\n  </div>\n\n  <ion-spinner *ngIf = "userService.getUserLeague() == null || (team == null && navParams.data[0] == \'teamsList\')" class = "spinner"></ion-spinner>\n\n  <ion-grid *ngIf = "navParams.data[0] ==\'team\' || navParams.data[0] == \'teamsList\' && team != undefined">\n\n    <ion-row>\n\n      <ion-col id ="profile-team-name"><strong>{{team?.nombre}}</strong></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class = "profile-team-titles">Capitán:</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class = "profile-team"> {{capitain?.nombre}} {{capitain?.apellidos}}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class = "profile-team-titles">Estadio:</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class = "profile-team">Nombre del estadio</ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\standings\standings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_httpClient_service__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__app_services_team_service__["a" /* TeamService */]])
    ], TabStandings);
    return TabStandings;
}());

//# sourceMappingURL=standings.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(34);
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

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpClient_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(25);
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
    function LoginService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    LoginService.prototype.login = function (username, password) {
        if (username == "" || username == null || username == undefined) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Server error (401):Please enter the correct password or username");
        }
        else {
            this.http.setLogged(true);
            this.http.generateAuthTokens(username, password);
            return this.http.get("iniciarSesion/" + role).map(function (response) { return response; }, function (error) { return console.error(error); });
        }
    };
    LoginService.prototype.logout = function () {
        var _this = this;
        return this.http.get("cerrarSesion").map(function (response) { return response; }, function (error) { return console.error(error); }).subscribe(function (logout) {
            _this.http.logout();
            _this.userService.logout();
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__httpClient_service__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], LoginService);
    return LoginService;
}());

;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabRanks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_league_service__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabRanks = (function () {
    function TabRanks(navCtrl, navParams, userService, app, teamService, leagueService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.app = app;
        this.teamService = teamService;
        this.leagueService = leagueService;
        this.rankSelected = "goals";
        switch (this.navParams.data[0]) {
            case 'league':
                if (this.userService.getLeagueGoals()) {
                    this.players = this.userService.getLeagueGoals();
                }
                else {
                    this.leagueService.getTopGoals(this.userService.getUserLogged().liga).subscribe(function (goals) {
                        _this.players = goals;
                        _this.userService.setleagueGoals(goals);
                    });
                }
                break;
            case 'team':
                this.players = this.userService.getUserTeam().plantillaEquipo;
                break;
            case 'teamsList':
                this.teamService.getPlayerTeamById(this.navParams.data[1]).subscribe(function (team) { return _this.players = team.plantillaEquipo; });
                break;
        }
    }
    TabRanks.prototype.clickPlayer = function (id, teamID) {
        this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_4__player_player__["a" /* PlayerPage */], { playerId: id, teamId: teamID });
    };
    TabRanks.prototype.selectRank = function (type) {
        this.rankSelected = type;
    };
    TabRanks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ranks-tab',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\ranks\ranks-tab.html"*/'\n\n<ion-content>\n  <ion-spinner class = "spinner" *ngIf = "players == null" color ="ligth"></ion-spinner>\n  <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll= "true" *ngIf = "navParams.data[0] == \'league\'">\n    <ion-grid *ngFor = "let player of players; let position = index;">\n      <ion-row class = "lines"></ion-row>\n      <ion-row (click)="clickPlayer(player.id, player.equipo)" class = "player-info">\n        <ion-col col-xs-1 id="player-position" [class.first-position]= "position == 0">{{position+1}}</ion-col>\n        <ion-col col-xs-3 id="col-player-image">\n            <img id = "player-image" class = "player-image-rank-position" src="{{userService.getBaseURLforImages()}}{{player?.fotoJugador}}">\n        </ion-col>\n        <ion-col col-6 id="player-name">{{player.nombre}}</ion-col>\n        <ion-col col-xs-2 id ="player-goals"><h1>{{player.goles}}</h1></ion-col>\n      </ion-row>\n      <ion-row *ngIf = "(position+1) == players.length" class = "lines"></ion-row>\n    </ion-grid>\n  </ion-scroll>\n  <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll= "true" *ngIf = "navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n    <ion-grid (click)="clickPlayer(player.id, player.equipo)" *ngFor = "let player of players; let i = index" class = "player-info-team">\n      <ion-row class = "lines"></ion-row>\n      <ion-row>\n        <ion-col col-xs-1 id="col-player-image">\n            {{player?.dorsal}}\n            <img id = "player-image" src="{{userService.getBaseURLforImages()}}{{player?.fotoJugador}}">\n        </ion-col>\n        <ion-col col-6 id="player-info-titles">\n          <p>Nombre</p>\n          <p>Edad</p>\n          <p>Posición</p>\n          <p>Nacionalidad</p>\n        </ion-col>\n        <ion-col col-xs-5 id ="player-data">\n          <p>{{player?.nombre}} {{player?.apellidos}}</p>\n          <p>{{player?.edad}}</p>\n          <p>{{player?.posicion}}</p>\n          <p>{{player?.nacionalidad}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf = "(i+1) == players.length" class = "lines"></ion-row>\n  </ion-grid>\n  </ion-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\ranks\ranks-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_5__app_services_league_service__["a" /* LeagueService */]])
    ], TabRanks);
    return TabRanks;
}());

//# sourceMappingURL=ranks-tab.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_player_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_user_service__ = __webpack_require__(25);
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
    function PlayerPage(navCtrl, navParams, playerService, teamService, userService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.playerService = playerService;
        this.teamService = teamService;
        this.userService = userService;
        this.teamService.getPlayerTeamById(this.navParams.get('teamId')).subscribe(function (team) { return _this.playerTeam = team; });
        this.playerService.getPlayerById(this.navParams.get('playerId')).subscribe(function (player) { return _this.player = player; });
    }
    PlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-player',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\player\player.html"*/'<ion-header>\n    <ion-navbar height="20px" color ="transparent">\n      <button ion-button menuToggle id="button-toggle">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n    <ion-row id = "main-info" *ngIf="player != undefined && playerTeam != undefined">\n      <ion-col col-xs-8 class ="col-player-image">\n        <img id = "player-image" src="{{userService.getBaseURLforImages()}}{{player?.fotoJugador}}">\n      </ion-col>\n      <ion-col col-xs-1> \n        <h1 id = "player-number">{{player?.dorsal}}</h1>\n      </ion-col>\n      <ion-col col-xs-3 id ="player-team">\n        <strong>{{playerTeam?.nombre}}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="player != undefined && playerTeam != undefined">\n      <ion-col col-xs-12 id = "player-name">\n          <h2 id = "player-name-text">{{player?.nombre}}    {{player?.apellidos}}</h2>\n      </ion-col>\n    </ion-row>\n</ion-header>\n\n<ion-content padding >\n  <ion-list>\n    <ion-item>\n      <ion-row>\n        <ion-col class = "name-player-atribute">\n            Posición\n        </ion-col>\n        <ion-col class = "player-atribute">\n            <strong>{{player?.posicion}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n        <ion-row>\n          <ion-col class = "name-player-atribute">\n            Nacionalidad\n          </ion-col>\n          <ion-col class = "player-atribute">\n            <strong>{{player?.nacionalidad}}</strong>\n          </ion-col>\n        </ion-row>\n    </ion-item>\n    <ion-item>\n        <ion-row>\n          <ion-col class = "name-player-atribute">\n            Edad\n          </ion-col>\n          <ion-col class = "player-atribute">\n            <strong>{{player?.edad}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    <ion-item>\n        <ion-row>\n          <ion-col class = "name-player-atribute">\n            Goles\n          </ion-col>\n          <ion-col class = "player-atribute">\n            <strong>{{player?.goles}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col class = "name-player-atribute">\n            Tarjetas Amarillas \n        </ion-col>\n        <ion-col class = "player-atribute">\n            <strong>{{player?.tarjetasAmarillas}}</strong>\n        </ion-col>\n      </ion-row>          \n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col class = "name-player-atribute">\n          Tarjetas Rojas\n        </ion-col>\n        <ion-col class = "player-atribute">\n          <strong>{{player?.tarjetasRojas}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\player\player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_player_service__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_4__app_services_user_service__["a" /* UserService */]])
    ], PlayerPage);
    return PlayerPage;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabRounds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_match_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_match__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabRounds = (function () {
    function TabRounds(navCtrl, navParams, userService, matchService, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.matchService = matchService;
        this.app = app;
        this.roundSelected = 4;
        this.isEmpty = false;
        switch (this.navParams.data[0]) {
            case 'league':
                this.roundSelected = 1;
                if (this.userService.getUserTeam() != undefined || this.userService.getUserTeam() != null) {
                    this.matchService.getMatchByRoundAndLeague(this.roundSelected, this.userService.getUserTeam().liga).subscribe(function (matches) {
                        _this.roundMatches = matches;
                        if (_this.roundMatches == null)
                            _this.isEmpty = true;
                    }, function (error) { return console.error(error); });
                }
                this.slideToRecursive(this.roundSelected - 1);
                break;
            case 'team':
                this.matchService.getMatchTeamById(this.userService.getUserLogged().equipo).subscribe(function (matches) {
                    _this.teamMatches = matches;
                    if (matches.length == 0)
                        _this.isEmpty = true;
                });
                break;
            case 'teamsList':
                this.matchService.getMatchTeamById(this.navParams.data[1]).subscribe(function (matches) {
                    _this.teamMatches = matches;
                    console.log(matches);
                    if (matches.length == 0)
                        _this.isEmpty = true;
                });
                break;
        }
    }
    TabRounds.prototype.roundInfo = function (day) {
        var _this = this;
        this.isEmpty = false;
        if (this.roundSelected != day) {
            this.roundMatches = null;
            this.roundSelected = day;
        }
        this.matchService.getMatchByRoundAndLeague(this.roundSelected, this.userService.getUserTeam().liga).subscribe(function (matches) {
            if (matches != null) {
                if (_this.roundSelected == matches[0].jornada) {
                    _this.roundMatches = matches;
                }
            }
            else {
                _this.isEmpty = true;
            }
        }, function (error) { return console.error(error); });
    };
    TabRounds.prototype.matchInfo = function (id, status) {
        this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_4__match_match__["a" /* MatchPage */], { matchId: id, matchStatus: status });
    };
    TabRounds.prototype.slideToRecursive = function (index) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var tryCount = 0;
            _this.slideTo(index, tryCount, resolve, reject);
        });
    };
    TabRounds.prototype.slideTo = function (index, tryCount, resolve, reject) {
        var _this = this;
        try {
            this.slides.slideTo(index);
            resolve();
        }
        catch (error) {
            if (tryCount < 100) {
                tryCount++;
                setTimeout(function () {
                    _this.slideTo(index, tryCount, resolve, reject);
                }, 50);
            }
            else {
                reject(error);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Slides */])
    ], TabRounds.prototype, "slides", void 0);
    TabRounds = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tab-rounds',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\rounds\tab-rounds.html"*/'\n\n<ion-content>\n    <ion-slides #slides slidesPerView="3" *ngIf = "navParams.data[0] == \'league\'">\n        <ion-slide *ngFor="let num of userService.getRounds()" [class.selected] = "roundSelected === num" (click)="roundInfo(num)"  >\n                    <p id="slide-title">Jornada {{num}}</p>\n                    <div class = "triangle" [class.colored-traingle]= "roundSelected === num"></div>\n        </ion-slide>\n    </ion-slides>\n   \n    <ion-row id = "no-matches" *ngIf = "isEmpty">No hay partidos disponibles</ion-row>\n    <ion-spinner class = "spinner" *ngIf = "roundMatches == null && teamMatches == null && !isEmpty"></ion-spinner>\n    <ion-scroll  style="width:100%;height:100vh" scrollY="true" hideScroll= "true" *ngIf = "navParams.data[0] == \'league\' && roundMatches != undefined">\n        <ion-grid *ngFor = "let match of roundMatches; let i = index" (click) = "matchInfo(match?.id, match?.estado)">\n            <div *ngIf ="match.jornada == roundSelected">\n                <ion-row id = "date" *ngIf = "i == 0 || match.fechaPartido != roundMatches[i-1]?.fechaPartido">\n                    <ion-col>{{match.fechaPartido}}</ion-col>\n                </ion-row>\n                <ion-row class = "lines"></ion-row>\n                <ion-row *ngIf = "match.estado != \'Disputado\' && match.estado != \'disputado\'">\n                    <ion-col col-4 class= "team-local">{{match.equipoLocalNombre}}</ion-col>\n                    <ion-col col-4><h1>{{match.horaPartido ? match.horaPartido : \'-\'}}</h1></ion-col>\n                    <ion-col col-4 class = "team-visitor">{{match.equipoVisitanteNombre}}</ion-col>\n                </ion-row>\n                <ion-row *ngIf = "match.estado == \'Disputado\' || match.estado == \'disputado\'">\n                    <ion-col col-4 class= "team-local">{{match.equipoLocalNombre}}</ion-col>\n                    <ion-col col-1 class= "score-local"><h1>{{match.golesLocal}}</h1></ion-col>\n                    <ion-col col-2><h1>-</h1></ion-col>\n                    <ion-col col-1 class = "score-visitor"><h1>{{match.golesVisitante}}</h1></ion-col>\n                    <ion-col col-4 class = "team-visitor">{{match.equipoVisitanteNombre}}</ion-col>\n                </ion-row>\n                <ion-row class = "lines" *ngIf = "(i+1) == roundMatches.length"></ion-row>\n            </div>\n        </ion-grid>\n  </ion-scroll>\n  <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll= "true" *ngIf="navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n    <ion-grid *ngFor = "let match of teamMatches; let i = index" (click) = "matchInfo(match?.id, match?.estado)" [class.team-view-rounds] = "navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n        <ion-row id = "date" *ngIf = "i == 0 || match.fechaPartido != teamMatches[i-1].fechaPartido">\n            <ion-col>{{match.fechaPartido}}</ion-col>\n        </ion-row>\n        <ion-row class = "lines"></ion-row>\n        <ion-row *ngIf = "match.estado != \'Disputado\' && match.estado != \'disputado\'">\n            <ion-col col-4 class= "team-local">{{match.equipoLocalNombre}}</ion-col>\n            <ion-col col-4><h1>{{match.horaPartido ? match.horaPartido : \'-\'}}</h1></ion-col>\n            <ion-col col-4 class = "team-visitor">{{match.equipoVisitanteNombre}}</ion-col>\n        </ion-row>\n        <ion-row *ngIf = "match.estado == \'Disputado\' || match.estado == \'disputado\'">\n            <ion-col col-4 class= "team-local">{{match.equipoLocalNombre}}</ion-col>\n            <ion-col col-1 class= "score-local"><h1>{{match.golesLocal}}</h1></ion-col>\n            <ion-col col-2><h1>-</h1></ion-col>\n            <ion-col col-1 class = "score-visitor"><h1>{{match.golesVisitante}}</h1></ion-col>\n            <ion-col col-4 class = "team-visitor">{{match.equipoVisitanteNombre}}</ion-col>\n        </ion-row>\n        <ion-row class = "lines" *ngIf = "(i+1) == teamMatches.length"></ion-row>\n    </ion-grid>\n</ion-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\rounds\tab-rounds.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_match_service__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], TabRounds);
    return TabRounds;
}());

//# sourceMappingURL=tab-rounds.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_minute_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_match_service__ = __webpack_require__(144);
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
    function MatchPage(navCtrl, navParams, minuteService, matchService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.minuteService = minuteService;
        this.matchService = matchService;
        this.statSelected = "stats";
        this.status = this.navParams.get('matchStatus');
        if (this.status == "Disputado" || this.status == "disputado") {
            this.minuteService.getMinuteByMatchId(this.navParams.get('matchId')).subscribe(function (minute) { return _this.match = minute; });
        }
        else {
            this.matchService.getMatchById(this.navParams.get('matchId')).subscribe(function (match) { return _this.match = match; });
        }
    }
    MatchPage.prototype.ionViewDidLoad = function () {
        this.slide.lockSwipes(true);
    };
    MatchPage.prototype.selectStat = function (stat) {
        this.statSelected = stat;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Slides */])
    ], MatchPage.prototype, "slide", void 0);
    MatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-match',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\match\match.html"*/'\n\n<ion-header>\n\n  <ion-navbar height="20px" color ="transparent">\n\n    <button ion-button menuToggle id="button-toggle">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n  <ion-row *ngIf ="status == \'Disputado\' || status == \'disputado\'" id = "match-info">\n\n    <ion-col id = "local-name">\n\n      <strong>{{match?.nombreEquipoLocal}}</strong>\n\n    </ion-col>\n\n    <ion-col id = "goals-local">\n\n      {{match?.golesLocal}}\n\n    </ion-col>\n\n    <ion-col id = "separation">\n\n      -\n\n    </ion-col>\n\n    <ion-col id = "goals-visitor">\n\n      {{match?.golesVisitante}}\n\n    </ion-col>\n\n    <ion-col id = "visitor-name">\n\n      <strong>{{match?.nombreEquipoVisitante}}</strong>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row *ngIf= "status != \'Disputado\' || status != \'disputado\'" id = "match-info">\n\n    <ion-col id = "local-name">\n\n      <strong>{{match?.equipoLocalNombre}}</strong>\n\n    </ion-col>\n\n    <ion-col id = "match-time">\n\n      {{match?.horaPartido}}\n\n    </ion-col>\n\n    <ion-col id = "visitor-name">\n\n      <strong>{{match?.equipoVisitanteNombre}}</strong>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-header>\n\n\n\n<ion-content >\n\n    <ion-slides #slides slidesPerView="3">\n\n        <ion-slide [class.selected] = "statSelected == \'stats\'" (click)="selectStat(\'stats\')">\n\n                <p id="slide-title">Estadísticas</p>\n\n        </ion-slide>\n\n        <ion-slide [class.selected] = "statSelected == \'goals\'" (click)="selectStat(\'goals\')">\n\n            <p id="slide-title">Goles</p>\n\n        </ion-slide>\n\n        <ion-slide [class.selected] = "statSelected == \'lineUp\'" (click)="selectStat(\'lineUp\')">\n\n          <p id="slide-title">Titulares</p>\n\n        </ion-slide>\n\n    </ion-slides>\n\n  <ion-list *ngIf = "statSelected == \'stats\' && status == \'Disputado\' || status == \'disputado\'">\n\n      <ion-row>\n\n        <ion-col col-xs-4 class = "stats-info-local"><strong>5</strong></ion-col>\n\n        <ion-col col-xs-4 class = "stats-title">InfoTitle</ion-col>\n\n        <ion-col col-xs-4 class = "stats-info-visitor"><strong>4</strong></ion-col>\n\n      </ion-row>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf = "statSelected == \'lineUp\' && status == \'Disputado\' || status == \'disputado\'">\n\n    <ion-item *ngFor = "let localPlayer of match?.convocadosLocal; let i = index">\n\n      <ion-row>\n\n        <ion-col class = "info-lineup">\n\n          <ion-row>\n\n              <ion-col col-xs-2 id = "local-dorsal"><strong >{{localPlayer.dorsal}}</strong></ion-col>\n\n              <ion-col col-xs-10 class = "player-name">{{localPlayer.nombre}}</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col class = "info-lineup" *ngIf = "match?.convocadosVisitante[i] != null && match?.convocadosVisitante[i] != undefined">\n\n          <ion-row>\n\n              <ion-col col-xs-2 id = "visitor-dorsal"><strong >{{match?.convocadosVisitante[i].dorsal}}</strong></ion-col>\n\n              <ion-col col-xs-10 class = "player-name"> {{match?.convocadosVisitante[i].nombre}}</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-row id = "no-info" *ngIf = "status == \'Pendiente\' || status == \'pendiente\'">El partido no se ha disputado.</ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\match\match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_minute_service__["a" /* MinuteService */], __WEBPACK_IMPORTED_MODULE_3__app_services_match_service__["a" /* MatchService */]])
    ], MatchPage);
    return MatchPage;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_login_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_player_service__ = __webpack_require__(91);
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
    function LoginPage(navCtrl, navParams, menuController, loginService, userService, loadingCtrl, alertCtrl, playerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuController = menuController;
        this.loginService = loginService;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.playerService = playerService;
        this.loginError = false;
    }
    LoginPage.prototype.goHomePage = function (username, password) {
        var _this = this;
        this.loginService.login(username, password).subscribe(function (reponse) {
            _this.loginError = false;
            _this.presentLoading();
            _this.userService.generateUserData();
            _this.menuController.enable(true);
        }, function (error) { return _this.loginError = true; });
    };
    LoginPage.prototype.presentRecoveryAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Recuperar usuario y contraseña",
            message: "Se procederá con el envio de su usuario y una nueva contraseña de acceso a la aplicación. Introduzca su email:",
            inputs: [
                {
                    name: "email",
                    placeholder: "Email"
                }
            ],
            buttons: [
                {
                    text: "Cancelar",
                    role: "cancel",
                },
                {
                    text: "Enviar",
                    handler: function (data) {
                        _this.playerService.forgottenPassword(data.email).subscribe(function (recovery) {
                            _this.presentSuccessOrFailAlert(true);
                        }, function (error) {
                            _this.presentSuccessOrFailAlert(false);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.presentSuccessOrFailAlert = function (success) {
        var menssage;
        var title;
        if (success) {
            title = "Email correcto";
            menssage = "Su usuario y su nueva contraseña han sido enviadas.";
        }
        else {
            title = "Email incorrecto";
            menssage = "Por favor introduzca su email correctamente.";
        }
        var alert = this.alertCtrl.create({
            title: title,
            message: menssage,
            buttons: [
                {
                    text: "OK",
                    role: "cancel"
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.presentLoading = function () {
        var _this = this;
        var spinner = this.loadingCtrl.create({
            content: 'Iniciando sesión'
        });
        spinner.present();
        setTimeout(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__["a" /* HomeTabsPage */], { id: ['league'] });
            spinner.dismiss();
        }, 750);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.menuController.enable(false);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\login\login.html"*/'\n<ion-content padding class = "background">\n      <div padding  id="background-login">\n      </div>\n      <div id ="div-card">\n        <ion-card>\n          <ion-card-header>\n            Inicio de sesión\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list no-lines>\n              <ion-item>\n                <ion-input #username type ="text" placeholder = "Usuario" (keyup.enter) = "username.focusNext()"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input #password type ="password" placeholder = "Contraseña" (keyup.enter) = "goHomePage(username?.value, password?.value)" ></ion-input>\n              </ion-item>\n            </ion-list>\n            <p id = "login-error-message" *ngIf = "loginError">Usuario o contraseña incorrectos</p>\n            <p id = "forgot-password" (click) = "presentRecoveryAlert()">¿Has olvidado tu usuario o contraseña?</p>\n            <button ion-button block outline color = "light" (click)= "goHomePage(username?.value, password?.value)">Iniciar sesión</button>\n          </ion-card-content>\n        </ion-card>\n        <button ion-button clear full color = "light">¿No tienes cuenta? Click aquí</button>\n      </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__app_services_player_service__["a" /* PlayerService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sanction_sanction__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_sanction_service__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, userService, events, sanctionService, alertCtrl, modalController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.events = events;
        this.sanctionService = sanctionService;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.newPasswordMatches = false;
        this.selection = "one";
        this.header = 150;
        this.noSanctions = false;
    }
    ProfilePage.prototype.findAllPlayerSanctions = function (id) {
        var _this = this;
        this.sanctionService.getPlayerSanctions(id).subscribe(function (sanctions) {
            _this.playerSanctions = sanctions;
            if (sanctions == null)
                _this.noSanctions = true;
        });
    };
    ProfilePage.prototype.clickButton = function (value) {
        if (value == "two" && this.playerSanctions == undefined) {
            this.findAllPlayerSanctions(this.userService.getUserLogged().id);
        }
        this.resizeHeader();
    };
    ProfilePage.prototype.goTeam = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__["a" /* HomeTabsPage */], { id: [this.navParams.get('id')[0]] });
    };
    ProfilePage.prototype.changePassword = function (oldPassword, newPassword, newPasswordRepeat) {
        if (newPassword != newPasswordRepeat) {
            this.newPasswordMatches = true;
        }
        else {
            this.presentAlert();
        }
    };
    ProfilePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: "Confirmación de cambio",
            message: "¿Esta seguro de querer cambiar la contraseña?",
            buttons: [
                {
                    text: "NO",
                    role: "cancel"
                },
                {
                    text: "SÍ",
                    handler: function () {
                        //metodo de cambio de contraseña
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.resizeHeader = function () {
        this.content.scrollTo(0, 0, 0); //relocate the content after click in a button
        this.events.publish('resizeHeader');
    };
    ProfilePage.prototype.viewSanction = function (id) {
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__sanction_sanction__["a" /* SanctionPage */], { idSanction: id });
        modal.present();
        //this.navCtrl.push(SanctionPage, {idSanction:id});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], ProfilePage.prototype, "content", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar height="20px" color="header">\n\n    <button ion-button menuToggle id="button-toggle">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Mi perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n  <elastic-header [scrollArea] = "component" [headerHeight] = "header">\n\n      <img id="profile-image" src="{{userService.getBaseURLforImages()}}{{userService.getUserLogged()?.fotoJugador}}" imageViewer/>\n\n  </elastic-header>\n\n\n\n  <ion-toolbar color="header" mode="md" id = "toolbar-options">\n\n    <ion-segment color="underline" mode="md" [(ngModel)]= "selection">\n\n      <ion-segment-button (click) = "clickButton(\'one\')" class = "text-on-botton" value="one">\n\n        <ion-icon name="home"></ion-icon>\n\n        Perfil\n\n      </ion-segment-button>\n\n      <ion-segment-button (click) = "clickButton(\'two\')" class = "text-on-botton" value="two">\n\n          <ion-icon name="chatbubbles"></ion-icon>\n\n          Sanciones\n\n      </ion-segment-button>\n\n      <ion-segment-button (click) = "clickButton(\'three\')" class = "text-on-botton" value="three">\n\n          <ion-icon name="cog"></ion-icon>\n\n          Ajustes\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content  fullscreen #component [ngSwitch] = "selection" >\n\n <ion-item no-lines *ngSwitchCase = "\'one\'">\n\n   <ion-item id = "team-image-container" (click) = "goTeam()">\n\n      <img id = "user-team-image" src = "{{userService.getBaseURLforImages()}}shield.png">\n\n      <h1 id = "user-team-name">{{userService.getUserTeam()?.nombre}}</h1>\n\n   </ion-item>\n\n   <ion-row>\n\n    <ion-col>\n\n      Dorsal\n\n    </ion-col>\n\n    <ion-col class = "info-content">\n\n      <strong>{{userService.getUserLogged().dorsal}}</strong>\n\n    </ion-col>\n\n  </ion-row>\n\n   <ion-row lines>\n\n     <ion-col>\n\n       Goles\n\n     </ion-col>\n\n     <ion-col class = "info-content">\n\n       <strong>{{userService.getUserLogged().goles}}</strong>\n\n     </ion-col>\n\n   </ion-row>\n\n   <ion-row>\n\n      <ion-col>\n\n        Tartejas Amarillas\n\n      </ion-col>\n\n      <ion-col class = "info-content">\n\n        <strong>{{userService.getUserLogged()?.tarjetasAmarillas}}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n          Tarjetas Rojas\n\n        </ion-col>\n\n        <ion-col class = "info-content">\n\n          <strong>{{userService.getUserLogged()?.tarjetasRojas}}</strong>\n\n        </ion-col>\n\n   </ion-row>\n\n   <h2 *ngIf = "userService.getActiveSanctions() != undefined || userService.getActiveSanctions() != null">Sanciones activas:</h2>\n\n   <ion-card (click) = "viewSanction(sanction.id)" *ngFor = "let sanction of userService.getActiveSanctions()" id ="sanctions-card">\n\n     <ion-card-content>\n\n       <ion-row>\n\n         <ion-col class = "card-titles">Fecha de sanción</ion-col>\n\n         <ion-col class ="card-info" >{{sanction?.inicioSancion}}</ion-col>\n\n       </ion-row>\n\n       <ion-row>\n\n         <ion-col class = "card-titles">Partidos restantes: </ion-col>\n\n         <ion-col class ="card-info">{{sanction.partidosRestantes}}</ion-col>\n\n       </ion-row>\n\n     </ion-card-content>\n\n   </ion-card>\n\n </ion-item>\n\n\n\n <ion-item no-lines *ngSwitchCase = "\'two\'">\n\n    <ion-spinner class = "spinner" *ngIf = "playerSanctions == null && !noSanctions" color ="ligth"></ion-spinner>\n\n    <p id = "no-sanctions" *ngIf = "noSanctions">No has recibido ninguna sanción.</p>\n\n    <ion-card (click) = "viewSanction(sanction.id)" *ngFor = "let sanction of playerSanctions" id ="sanctions-card" [class.spired] = "sanction?.partidosRestantes == 0">\n\n        <ion-card-content >\n\n          <ion-row>\n\n            <ion-col class = "card-titles">Fecha de sanción</ion-col>\n\n            <ion-col class ="card-info" >{{sanction?.inicioSancion}}</ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col class = "card-titles">Partidos restantes: </ion-col>\n\n            <ion-col class ="card-info">{{sanction.partidosRestantes}}</ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n      </ion-card>\n\n </ion-item>\n\n\n\n <ion-list no-lines *ngSwitchCase = "\'three\'">\n\n   <p class = "settings-titles">Notificaciones: </p>\n\n   <ion-item class = "notifications">\n\n      <ion-label>Nuevas sanciones</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n   </ion-item>\n\n   <ion-item class = "notifications">\n\n      <ion-label>Fin de sanciones</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n   </ion-item>\n\n   <ion-item class = "notifications">\n\n      <ion-label>Resultados de partidos</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n   </ion-item>\n\n\n\n   <p class = "settings-titles">Cambio de contraseña</p>\n\n\n\n   <ion-input #oldpassword (keyup.enter) = "oldpassword.focusNext()" id = "old-password" type = "password" placeholder = "Contraseña antigua"></ion-input>\n\n\n\n   <ion-input #newpassword (keyup.enter) = "newpassword.focusNext()" class = "new-password" type = "password" placeholder = "Contraseña nueva"></ion-input>\n\n   <ion-input #newpasswordrepeat (keyup.enter) = "changePassword(oldpassword.value, newpassword.value, newpasswordrepeat.value)"  class = "new-password" type = "password" placeholder = "Reintroduzca la nueva contraseña"></ion-input>\n\n   <p id = "password-error"*ngIf = "newPasswordMatches">Las nuevas contraseñas no coinciden</p>\n\n   <button id = "send-passwords-button" ion-button block outline color = "light" (click)= "changePassword(oldpassword.value, newpassword.value, newpasswordrepeat.value)">Cambiar contraseña</button>\n\n </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__app_services_sanction_service__["a" /* SanctionService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanctionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_sanction_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SanctionPage = (function () {
    function SanctionPage(navParams, sanctionService, userService, viewController) {
        var _this = this;
        this.navParams = navParams;
        this.sanctionService = sanctionService;
        this.userService = userService;
        this.viewController = viewController;
        this.sanctionService.getSanctionById(this.navParams.get('idSanction')).subscribe(function (sanction) { return _this.sanction = sanction; });
    }
    SanctionPage.prototype.closeModal = function () {
        this.viewController.dismiss();
    };
    SanctionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sanction',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\sanction\sanction.html"*/'\n<ion-header>\n\n  <ion-navbar color="header">\n    <ion-title>Sanción</ion-title>\n    <ion-buttons end>\n        <button id= "close-modal-button" ion-button (click)= "closeModal()">Cerrar</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n <ion-grid *ngIf = "sanction != undefined">\n  <ion-row>\n      <ion-col class = "sanction-titles">Jugador sancionado:</ion-col>\n      <ion-col class = "sanction-content"><strong>{{userService?.getUserLogged().nombre}}</strong></ion-col>\n  </ion-row>\n\n  <ion-row>\n      <ion-col class = "sanction-titles">Sancionado por:</ion-col>\n      <ion-col class = "sanction-content"><strong>Nombre del arbitro</strong></ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class = "sanction-titles">Fecha inicio:</ion-col>\n    <ion-col class = "sanction-content"><strong>{{sanction?.inicioSancion}}</strong></ion-col>\n  </ion-row>\n  \n  <ion-row>\n      <ion-col class = "sanction-titles">Fecha fin:</ion-col>\n      <ion-col class = "sanction-content"><strong>{{sanction?.finSancion}}</strong></ion-col>\n  </ion-row>\n\n  <ion-row>\n      <ion-col class = "sanction-titles">Estado:</ion-col>\n        <ion-col id = "operative" class = "sanction-content"  [class.operative] = "sanction?.enVigor" ><strong>{{sanction?.enVigor ? \'En vigor\' : \'Cumplida\'}}</strong></ion-col>\n  </ion-row>\n\n  <ion-row>\n      <ion-col class = "sanction-titles">Partidos sancionados:</ion-col>\n      <ion-col class = "sanction-content">{{sanction?.partidosSancionados}}</ion-col>\n  </ion-row>\n\n  <ion-row *ngIf = "sanction?.enVigor">\n      <ion-col class = "sanction-titles">Partidos restantes:</ion-col>\n      <ion-col class = "sanction-content">{{sanction?.partidosRestantes}}</ion-col>\n  </ion-row>\n\n  <ion-row id = "description-title">Descripción:</ion-row>\n  <ion-card id = "description">\n      <ion-card-content>\n          {{sanction?.descripcion}}\n      </ion-card-content>\n  </ion-card>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\sanction\sanction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_sanction_service__["a" /* SanctionService */], __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */]])
    ], SanctionPage);
    return SanctionPage;
}());

//# sourceMappingURL=sanction.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_tabs_home_tabs__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamsPage = (function () {
    function TeamsPage(navCtrl, navParams, userService, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.app = app;
    }
    TeamsPage.prototype.teamSelect = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_tabs_home_tabs__["a" /* HomeTabsPage */], { id: [this.navParams.get('id')[0], id] });
    };
    TeamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teams',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\teams\teams.html"*/'<ion-header>\n    <ion-navbar height="20px" color="header">\n      <button ion-button menuToggle id="button-toggle">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Equipos</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngIf = "userService.getUserLeague() != null">\n    <button ion-item no-lines *ngFor= "let team of userService.getUserLeague()" (click)="teamSelect(team.id)">\n      <ion-avatar item-start>\n        <img src = "{{userService.getBaseURLforImages()}}{{team?.imagenEquipo}}">\n      </ion-avatar>\n      <p id ="team-name">{{team?.nombre}}</p>\n    </button>\n  </ion-list>\n\n  <ion-row id = "no-teams" *ngIf = "userService.getUserLeague()?.length == 0">No hay equipos en esta liga</ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\teams\teams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], TeamsPage);
    return TeamsPage;
}());

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 193:
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
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home-tabs/Tabs/ranks/ranks-tab.module": [
		897,
		8
	],
	"../pages/home-tabs/Tabs/rounds/tab-rounds.module": [
		899,
		7
	],
	"../pages/home-tabs/home-tabs.module": [
		898,
		6
	],
	"../pages/login/login.module": [
		900,
		5
	],
	"../pages/match/match.module": [
		901,
		4
	],
	"../pages/player/player.module": [
		902,
		3
	],
	"../pages/profile/profile.module": [
		903,
		2
	],
	"../pages/sanction/sanction.module": [
		904,
		1
	],
	"../pages/teams/teams.module": [
		905,
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
webpackAsyncContext.id = 237;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    api: "http://192.168.1.36:8080/",
    imagesUrl: "http://192.168.1.36:8080/images/"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__league_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sanction_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enviroments_environment__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
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
    function UserService(http, teamService, leagueService, sanctionService) {
        this.http = http;
        this.teamService = teamService;
        this.leagueService = leagueService;
        this.sanctionService = sanctionService;
        this.rounds = [];
    }
    UserService.prototype.generateUserData = function () {
        var _this = this;
        return this.http.get("jugadores/usuario").subscribe(function (response) {
            _this.user = response;
            _this.leagueService.getStandings(response.liga).subscribe(function (league) {
                _this.userLeague = league;
                for (var i = 0; i < (league.length - 1) * 2; i++) {
                    _this.rounds.push(i + 1);
                }
            });
            _this.teamService.getPlayerTeamById(response.equipo).subscribe(function (team) {
                if (team != null || team != undefined) {
                    _this.userTeam = team;
                }
                ;
            });
            _this.sanctionService.getActivePlayerSanctions(response.id).subscribe(function (sanctions) { return _this.activeSanctions = sanctions; });
        }, function (error) { return console.error(error); });
    };
    UserService.prototype.setleagueGoals = function (goals) {
        this.leagueGoals = goals;
    };
    UserService.prototype.getLeagueGoals = function () {
        return this.leagueGoals;
    };
    UserService.prototype.getBaseURL = function () {
        return __WEBPACK_IMPORTED_MODULE_5__enviroments_environment__["a" /* environment */].api;
    };
    UserService.prototype.getBaseURLforImages = function () {
        return __WEBPACK_IMPORTED_MODULE_5__enviroments_environment__["a" /* environment */].imagesUrl;
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
    UserService.prototype.getActiveSanctions = function () {
        return this.activeSanctions;
    };
    UserService.prototype.logout = function () {
        this.user = null;
        this.userTeam = null;
        this.userLeague = null;
        this.userLeaguePlayers = null;
        this.userMatches = null;
        this.rounds = [];
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__httpClient_service__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__httpClient_service__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__team_service__["a" /* TeamService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__league_service__["a" /* LeagueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__league_service__["a" /* LeagueService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__sanction_service__["a" /* SanctionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__sanction_service__["a" /* SanctionService */]) === "function" && _d || Object])
    ], UserService);
    return UserService;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinuteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(34);
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



var BASE_URL = "actas/";
var MinuteService = (function () {
    function MinuteService(http) {
        this.http = http;
    }
    MinuteService.prototype.getMinuteByMatchId = function (id) {
        return this.http.get(BASE_URL + "partido/" + id).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    MinuteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpClient_service__["a" /* HttpClient */]])
    ], MinuteService);
    return MinuteService;
}());

//# sourceMappingURL=minute.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabStats; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabStats = (function () {
    function TabStats(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TabStats.prototype.ionViewDidLoad = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], TabStats.prototype, "barCanvas", void 0);
    TabStats = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stats',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\stats\stats.html"*/'\n<ion-content>\n  \n      <canvas #barCanvas></canvas>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\stats\stats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], TabStats);
    return TabStats;
}());

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enviroments_environment__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BASE_URL = __WEBPACK_IMPORTED_MODULE_2__enviroments_environment__["a" /* environment */].api;
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
            return response.json();
        }, function (error) { return console.error(error.json()); });
    };
    HttpClient.prototype.getRecoveredPasword = function (url) {
        return this.http.get((BASE_URL + url)).map(function (response) {
            return response.json();
        }, function (error) { return console.error(error.json()); });
    };
    HttpClient.prototype.getBaseURL = function () {
        return BASE_URL;
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
    HttpClient.prototype.logout = function () {
        this.authTokens = null;
        this.logged = false;
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

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(520);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(34);
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

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_app_services_player_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_app_services_login_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_app_services_httpClient_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_app_services_team_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_app_services_match_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_app_services_league_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_app_services_sanction_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_services_minute_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_elastic_header_elastic_header__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_tabs_home_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_tabs_Tabs_standings_standings__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_tabs_Tabs_rounds_tab_rounds__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_tabs_Tabs_ranks_ranks_tab__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_player_player__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_match_match__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_teams_teams__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_sanction_sanction__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_profile_profile__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_home_tabs_Tabs_stats_stats__ = __webpack_require__(335);
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
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_tabs_Tabs_standings_standings__["a" /* TabStandings */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_tabs_Tabs_rounds_tab_rounds__["a" /* TabRounds */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_tabs_Tabs_ranks_ranks_tab__["a" /* TabRanks */],
                __WEBPACK_IMPORTED_MODULE_24__pages_player_player__["a" /* PlayerPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_sanction_sanction__["a" /* SanctionPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_home_tabs_Tabs_stats_stats__["a" /* TabStats */],
                __WEBPACK_IMPORTED_MODULE_18__components_elastic_header_elastic_header__["a" /* ElasticHeader */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home-tabs/Tabs/ranks/ranks-tab.module#LeagueTabPageModule', name: 'TabRanks', segment: 'ranks-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tabs/home-tabs.module#HomeTabsPageModule', name: 'HomeTabsPage', segment: 'home-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tabs/Tabs/rounds/tab-rounds.module#TabTeamPageModule', name: 'TabRounds', segment: 'tab-rounds', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match/match.module#MatchPageModule', name: 'MatchPage', segment: 'match', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/player/player.module#PlayerPageModule', name: 'PlayerPage', segment: 'player', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sanction/sanction.module#SanctionPageModule', name: 'SanctionPage', segment: 'sanction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teams/teams.module#TeamsPageModule', name: 'TeamsPage', segment: 'teams', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_tabs_Tabs_standings_standings__["a" /* TabStandings */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_tabs_Tabs_rounds_tab_rounds__["a" /* TabRounds */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_tabs_Tabs_ranks_ranks_tab__["a" /* TabRanks */],
                __WEBPACK_IMPORTED_MODULE_24__pages_player_player__["a" /* PlayerPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__components_elastic_header_elastic_header__["a" /* ElasticHeader */],
                __WEBPACK_IMPORTED_MODULE_27__pages_sanction_sanction__["a" /* SanctionPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_home_tabs_Tabs_stats_stats__["a" /* TabStats */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__src_app_services_player_service__["a" /* PlayerService */],
                __WEBPACK_IMPORTED_MODULE_16__app_services_minute_service__["a" /* MinuteService */],
                __WEBPACK_IMPORTED_MODULE_9__src_app_services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_15__src_app_services_sanction_service__["a" /* SanctionService */],
                __WEBPACK_IMPORTED_MODULE_11__src_app_services_team_service__["a" /* TeamService */],
                __WEBPACK_IMPORTED_MODULE_12__src_app_services_match_service__["a" /* MatchService */],
                __WEBPACK_IMPORTED_MODULE_10__src_app_services_httpClient_service__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_13__src_app_services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_14__src_app_services_league_service__["a" /* LeagueService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tabs_standings_standings__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tabs_rounds_tab_rounds__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Tabs_ranks_ranks_tab__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Tabs_stats_stats__ = __webpack_require__(335);
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
    function HomeTabsPage(navCtrl, navParams, menuController, userService, teamService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuController = menuController;
        this.userService = userService;
        this.teamService = teamService;
        switch (this.navParams.get('id')[0]) {
            case "league":
                this.headerTitle = "Liga " + this.userService.getUserLogged().liga;
                this.rootParams = ["league"];
                this.titles = ["Clasificacion", "Calendario", "Rankings"];
                this.icons = ["trophy", "calendar", "podium"];
                break;
            case "profile":
            case "team":
                this.headerTitle = userService.getUserTeam().nombre;
                this.rootParams = ["team"];
                this.titles = ["Perfil", "Calendario", "Plantilla", "Estadisticas"];
                this.icons = ["home", "calendar", "people", "stats"];
                break;
            case "teamsList":
                this.teamService.getPlayerTeamById(this.navParams.get('id')[1]).subscribe(function (team) { return _this.headerTitle = team.nombre; });
                this.rootParams = ["teamsList", this.navParams.get('id')[1]];
                this.titles = ["Perfil", "Calendario", "Plantilla"];
                this.icons = ["home", "calendar", "people"];
                break;
        }
        this.changeTabs(this.navParams.get('id')[0]);
    }
    HomeTabsPage.prototype.changeTabs = function (id) {
        switch (id) {
            case "league":
            case "teamsList":
                this.tabs = [
                    { title: this.titles[0], root: __WEBPACK_IMPORTED_MODULE_4__Tabs_standings_standings__["a" /* TabStandings */], rootParams: this.rootParams, icon: this.icons[0] },
                    { title: this.titles[1], root: __WEBPACK_IMPORTED_MODULE_5__Tabs_rounds_tab_rounds__["a" /* TabRounds */], rootParams: this.rootParams, icon: this.icons[1] },
                    { title: this.titles[2], root: __WEBPACK_IMPORTED_MODULE_6__Tabs_ranks_ranks_tab__["a" /* TabRanks */], rootParams: this.rootParams, icon: this.icons[2] }
                ];
                break;
            case "profile":
            case "team":
                this.tabs = [
                    { title: this.titles[0], root: __WEBPACK_IMPORTED_MODULE_4__Tabs_standings_standings__["a" /* TabStandings */], rootParams: this.rootParams, icon: this.icons[0] },
                    { title: this.titles[1], root: __WEBPACK_IMPORTED_MODULE_5__Tabs_rounds_tab_rounds__["a" /* TabRounds */], rootParams: this.rootParams, icon: this.icons[1] },
                    { title: this.titles[2], root: __WEBPACK_IMPORTED_MODULE_6__Tabs_ranks_ranks_tab__["a" /* TabRanks */], rootParams: this.rootParams, icon: this.icons[2] },
                    { title: this.titles[3], root: __WEBPACK_IMPORTED_MODULE_7__Tabs_stats_stats__["a" /* TabStats */], rootParams: this.rootParams, icon: this.icons[3] }
                ];
                break;
        }
    };
    HomeTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-tabs',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\home-tabs.html"*/'<ion-header>\n    <ion-navbar height="20px" color="header">\n      <button ion-button menuToggle id="button-toggle">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>{{headerTitle}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="false">\n  <ion-tabs id = "tabbar" height="100%" swipeEnable ="false" color="header" tabsPlacement = "top">\n    <ion-tab *ngFor ="let tab of tabs" [root]="tab.root" [rootParams] = "tab.rootParams" [tabTitle]="tab.title" [tabIcon] = "tab.icon"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\home-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__["a" /* TeamService */]) === "function" && _e || Object])
    ], HomeTabsPage);
    return HomeTabsPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home-tabs.js.map

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 342,
	"./af.js": 342,
	"./ar": 343,
	"./ar-dz": 344,
	"./ar-dz.js": 344,
	"./ar-kw": 345,
	"./ar-kw.js": 345,
	"./ar-ly": 346,
	"./ar-ly.js": 346,
	"./ar-ma": 347,
	"./ar-ma.js": 347,
	"./ar-sa": 348,
	"./ar-sa.js": 348,
	"./ar-tn": 349,
	"./ar-tn.js": 349,
	"./ar.js": 343,
	"./az": 350,
	"./az.js": 350,
	"./be": 351,
	"./be.js": 351,
	"./bg": 352,
	"./bg.js": 352,
	"./bm": 353,
	"./bm.js": 353,
	"./bn": 354,
	"./bn.js": 354,
	"./bo": 355,
	"./bo.js": 355,
	"./br": 356,
	"./br.js": 356,
	"./bs": 357,
	"./bs.js": 357,
	"./ca": 358,
	"./ca.js": 358,
	"./cs": 359,
	"./cs.js": 359,
	"./cv": 360,
	"./cv.js": 360,
	"./cy": 361,
	"./cy.js": 361,
	"./da": 362,
	"./da.js": 362,
	"./de": 363,
	"./de-at": 364,
	"./de-at.js": 364,
	"./de-ch": 365,
	"./de-ch.js": 365,
	"./de.js": 363,
	"./dv": 366,
	"./dv.js": 366,
	"./el": 367,
	"./el.js": 367,
	"./en-au": 368,
	"./en-au.js": 368,
	"./en-ca": 369,
	"./en-ca.js": 369,
	"./en-gb": 370,
	"./en-gb.js": 370,
	"./en-ie": 371,
	"./en-ie.js": 371,
	"./en-il": 372,
	"./en-il.js": 372,
	"./en-nz": 373,
	"./en-nz.js": 373,
	"./eo": 374,
	"./eo.js": 374,
	"./es": 375,
	"./es-do": 376,
	"./es-do.js": 376,
	"./es-us": 377,
	"./es-us.js": 377,
	"./es.js": 375,
	"./et": 378,
	"./et.js": 378,
	"./eu": 379,
	"./eu.js": 379,
	"./fa": 380,
	"./fa.js": 380,
	"./fi": 381,
	"./fi.js": 381,
	"./fo": 382,
	"./fo.js": 382,
	"./fr": 383,
	"./fr-ca": 384,
	"./fr-ca.js": 384,
	"./fr-ch": 385,
	"./fr-ch.js": 385,
	"./fr.js": 383,
	"./fy": 386,
	"./fy.js": 386,
	"./gd": 387,
	"./gd.js": 387,
	"./gl": 388,
	"./gl.js": 388,
	"./gom-latn": 389,
	"./gom-latn.js": 389,
	"./gu": 390,
	"./gu.js": 390,
	"./he": 391,
	"./he.js": 391,
	"./hi": 392,
	"./hi.js": 392,
	"./hr": 393,
	"./hr.js": 393,
	"./hu": 394,
	"./hu.js": 394,
	"./hy-am": 395,
	"./hy-am.js": 395,
	"./id": 396,
	"./id.js": 396,
	"./is": 397,
	"./is.js": 397,
	"./it": 398,
	"./it.js": 398,
	"./ja": 399,
	"./ja.js": 399,
	"./jv": 400,
	"./jv.js": 400,
	"./ka": 401,
	"./ka.js": 401,
	"./kk": 402,
	"./kk.js": 402,
	"./km": 403,
	"./km.js": 403,
	"./kn": 404,
	"./kn.js": 404,
	"./ko": 405,
	"./ko.js": 405,
	"./ky": 406,
	"./ky.js": 406,
	"./lb": 407,
	"./lb.js": 407,
	"./lo": 408,
	"./lo.js": 408,
	"./lt": 409,
	"./lt.js": 409,
	"./lv": 410,
	"./lv.js": 410,
	"./me": 411,
	"./me.js": 411,
	"./mi": 412,
	"./mi.js": 412,
	"./mk": 413,
	"./mk.js": 413,
	"./ml": 414,
	"./ml.js": 414,
	"./mn": 415,
	"./mn.js": 415,
	"./mr": 416,
	"./mr.js": 416,
	"./ms": 417,
	"./ms-my": 418,
	"./ms-my.js": 418,
	"./ms.js": 417,
	"./mt": 419,
	"./mt.js": 419,
	"./my": 420,
	"./my.js": 420,
	"./nb": 421,
	"./nb.js": 421,
	"./ne": 422,
	"./ne.js": 422,
	"./nl": 423,
	"./nl-be": 424,
	"./nl-be.js": 424,
	"./nl.js": 423,
	"./nn": 425,
	"./nn.js": 425,
	"./pa-in": 426,
	"./pa-in.js": 426,
	"./pl": 427,
	"./pl.js": 427,
	"./pt": 428,
	"./pt-br": 429,
	"./pt-br.js": 429,
	"./pt.js": 428,
	"./ro": 430,
	"./ro.js": 430,
	"./ru": 431,
	"./ru.js": 431,
	"./sd": 432,
	"./sd.js": 432,
	"./se": 433,
	"./se.js": 433,
	"./si": 434,
	"./si.js": 434,
	"./sk": 435,
	"./sk.js": 435,
	"./sl": 436,
	"./sl.js": 436,
	"./sq": 437,
	"./sq.js": 437,
	"./sr": 438,
	"./sr-cyrl": 439,
	"./sr-cyrl.js": 439,
	"./sr.js": 438,
	"./ss": 440,
	"./ss.js": 440,
	"./sv": 441,
	"./sv.js": 441,
	"./sw": 442,
	"./sw.js": 442,
	"./ta": 443,
	"./ta.js": 443,
	"./te": 444,
	"./te.js": 444,
	"./tet": 445,
	"./tet.js": 445,
	"./tg": 446,
	"./tg.js": 446,
	"./th": 447,
	"./th.js": 447,
	"./tl-ph": 448,
	"./tl-ph.js": 448,
	"./tlh": 449,
	"./tlh.js": 449,
	"./tr": 450,
	"./tr.js": 450,
	"./tzl": 451,
	"./tzl.js": 451,
	"./tzm": 452,
	"./tzm-latn": 453,
	"./tzm-latn.js": 453,
	"./tzm.js": 452,
	"./ug-cn": 454,
	"./ug-cn.js": 454,
	"./uk": 455,
	"./uk.js": 455,
	"./ur": 456,
	"./ur.js": 456,
	"./uz": 457,
	"./uz-latn": 458,
	"./uz-latn.js": 458,
	"./uz.js": 457,
	"./vi": 459,
	"./vi.js": 459,
	"./x-pseudo": 460,
	"./x-pseudo.js": 460,
	"./yo": 461,
	"./yo.js": 461,
	"./zh-cn": 462,
	"./zh-cn.js": 462,
	"./zh-hk": 463,
	"./zh-hk.js": 463,
	"./zh-tw": 464,
	"./zh-tw.js": 464
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 848;

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_tabs_Tabs_standings_standings__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_tabs_home_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_teams_teams__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_login_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_player_service__ = __webpack_require__(91);
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
    function MyApp(platform, statusBar, splashScreen, userService, loginService, loadingCtrl, alertCtrl) {
        this.userService = userService;
        this.loginService = loginService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.homePage = __WEBPACK_IMPORTED_MODULE_4__pages_home_tabs_Tabs_standings_standings__["a" /* TabStandings */];
        this.servicePlayer = __WEBPACK_IMPORTED_MODULE_11__services_player_service__["a" /* PlayerService */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.menuOptionSelected = "league";
        this.myTeam = { component: __WEBPACK_IMPORTED_MODULE_5__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */], rootParams: ['team'], icon: 'football' };
        this.menuPages = [
            { title: 'LIGA', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */], rootParams: ['league'], icon: 'trophy' },
            { title: 'MI PERFIL', component: __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */], rootParams: ['profile'], icon: 'contact' },
            { title: 'EQUIPOS', component: __WEBPACK_IMPORTED_MODULE_6__pages_teams_teams__["a" /* TeamsPage */], rootParams: ['teamsList'], icon: 'people' },
            { title: 'CERRAR SESIÓN', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], rootParams: ['logout'], icon: 'log-out' }
        ];
    }
    MyApp.prototype.presentLoading = function () {
        var spinner = this.loadingCtrl.create({
            content: 'Cerrando sesión'
        });
        spinner.present();
        setTimeout(function () {
            spinner.dismiss();
        }, 1000);
    };
    MyApp.prototype.presentAlert = function (page) {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "¿Desea cerrar sesión?",
            buttons: [
                {
                    text: "NO",
                    role: 'cancel',
                    handler: function () {
                        console.log("Cancel log-out");
                    }
                },
                {
                    text: "SÍ",
                    handler: function () {
                        _this.presentLoading();
                        _this.loginService.logout();
                        _this.menuOptionSelected = "league";
                        _this.nav.setRoot(page);
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.navigateTo = function (page, rootParams) {
        if (rootParams[0] == 'logout') {
            this.presentAlert(page);
        }
        else {
            this.menuOptionSelected = rootParams[0];
            this.nav.setRoot(page, { id: rootParams });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\app\app.html"*/'<ion-menu [content]="content" *ngIf="userService.getUserLogged()?.fotoJugador!= undefined">\n  <ion-header no-shadow no-border class = "app-header">\n    <div class ="app-background-header"></div>\n   <div class = "div-image" ><img id = "menu-profile-image" src="{{userService.getBaseURLforImages()}}{{userService.getUserLogged()?.fotoJugador}}"></div>\n  </ion-header>\n\n  <ion-content>\n    <ion-row><ion-col class= "menu-titles">MI EQUIPO</ion-col></ion-row>\n    <button class = "menu-options" [class.menu-option-selected] = "myTeam.rootParams[0] === menuOptionSelected" no-lines ion-item menuClose (click)= "navigateTo(myTeam.component, myTeam.rootParams)">\n      <p class = "menu-button-titles" >{{userService.getUserTeam()?.nombre}}</p>\n      <ion-icon class = "menu-icons" item-left name= "{{myTeam.icon}}"></ion-icon>\n    </button>\n    <ion-row><ion-col class= "menu-titles">INFORMACIÓN</ion-col></ion-row>\n    <ion-list no-lines>\n      <button class = "menu-options" [class.menu-option-selected] = "page.rootParams[0] === menuOptionSelected" *ngFor = "let page of menuPages" menuClose ion-item (click)="navigateTo(page.component, page.rootParams)">\n        <p class = "menu-button-titles">{{page.title}}</p>\n        <ion-icon class = "menu-icons" item-left name= "{{page.icon}}"></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__app_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__app_services_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_login_service__["a" /* LoginService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElasticHeader = (function () {
    function ElasticHeader(element, renderer, events) {
        this.element = element;
        this.renderer = renderer;
        this.events = events;
    }
    ElasticHeader.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
        this.events.subscribe('resizeHeader', function () {
            _this.newHeaderHeight = _this.headerHeight;
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.headerHeight + 'px');
        });
    };
    ElasticHeader.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('scrollArea'),
        __metadata("design:type", Object)
    ], ElasticHeader.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('headerHeight'),
        __metadata("design:type", Number)
    ], ElasticHeader.prototype, "headerHeight", void 0);
    ElasticHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'elastic-header',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\components\elastic-header\elastic-header.html"*/'<ng-content></ng-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\components\elastic-header\elastic-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
    ], ElasticHeader);
    return ElasticHeader;
}());

//# sourceMappingURL=elastic-header.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanctionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(34);
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



var BASE_URL = "sanciones/";
var SanctionService = (function () {
    function SanctionService(http) {
        this.http = http;
    }
    SanctionService.prototype.getPlayerSanctions = function (id) {
        return this.http.get(BASE_URL + "sancionado/" + id).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    SanctionService.prototype.getActivePlayerSanctions = function (id) {
        return this.http.get(BASE_URL + "activas/sancionado/" + id).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    SanctionService.prototype.getSanctionById = function (id) {
        return this.http.get(BASE_URL + id).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    SanctionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpClient_service__["a" /* HttpClient */]])
    ], SanctionService);
    return SanctionService;
}());

//# sourceMappingURL=sanction.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(34);
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
    PlayerService.prototype.forgottenPassword = function (email) {
        return this.http.getRecoveredPasword(BASE_URL + "clave/" + email).map(function (response) { return response; }, function (error) { return console.error(error); });
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

},[515]);
//# sourceMappingURL=main.js.map