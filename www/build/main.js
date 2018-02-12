webpackJsonp([8],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabStandings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_httpClient_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_team_service__ = __webpack_require__(47);
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
        }
        else if (this.navParams.data[0] == 'teamsList') {
            this.teamService.getPlayerTeamById(this.navParams.data[1]).subscribe(function (team) { return _this.team = team; });
        }
    }
    TabStandings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\standings\standings.html"*/'<!--ion-header *ngIf = "navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n\n  <div id = "team-shield-background"></div>\n\n  <div><img id="shield-team-image" src = "http://192.168.1.39:8080/images/shield.png"></div>\n\n</ion-header-->\n\n<ion-content  width ="100%" [class.team-info-content] = "navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'" >\n\n  <ion-grid *ngIf = "navParams.data[0] == \'league\'">\n\n    <ion-row id="colum-titles">\n\n        <ion-col col-xs-1>#</ion-col>\n\n        <ion-col col-4 id="title-team">Equipo</ion-col>\n\n        <ion-col col-xs-1>PJ</ion-col>\n\n        <ion-col col-xs-1>G</ion-col>\n\n        <ion-col col-xs-1>E</ion-col>\n\n        <ion-col col-xs-1>P</ion-col>\n\n        <ion-col col-xs-1>GF</ion-col>\n\n        <ion-col col-xs-1>GC</ion-col>\n\n        <ion-col col-xs-2><strong>PT</strong></ion-col>\n\n    </ion-row>\n\n    <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll= "true">\n\n        <ion-row *ngFor ="let team of userService.getUserLeague(); let i = index" id= "colum-content">\n\n            <ion-col col-xs-1 id="team-position" [class.first-position] = "(i + 1) == 1" [class.last-position] = "(i + 1) == userService.getUserLeague()?.length">{{i+1}}</ion-col>\n\n            <ion-col col-4 id= "team-name">{{team?.nombre}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.partidosJugados}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.partidosGanados}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.partidosEmpatados}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.partidosPerdidos}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.goles}}</ion-col>\n\n            <ion-col col-xs-1 class="team-info">{{team?.golesEncajados}}</ion-col>\n\n            <ion-col col-xs-2 class="team-info"><strong>{{team?.puntos}}</strong></ion-col>\n\n        </ion-row>\n\n    </ion-scroll>\n\n  </ion-grid>\n\n\n\n  <div *ngIf = "navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n\n    <div id = "team-shield-background"></div>\n\n    <div><img id="shield-team-image" src = "http://192.168.1.39:8080/images/shield.png"></div>\n\n  </div>\n\n  <ion-spinner *ngIf = "userService.getUserLeague() == null || (team == null && navParams.data[0] == \'teamsList\')" class = "spinner"></ion-spinner>\n\n  <ion-grid *ngIf = "navParams.data[0] ==\'team\' || navParams.data[0] == \'teamsList\' && team != undefined">\n\n    <ion-row>\n\n      <ion-col id ="profile-team-name"><strong>{{team?.nombre}}</strong></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class = "profile-team-titles">Capitán:</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class = "profile-team"> Nombre del capitán</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class = "profile-team-titles">Estadio:</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class = "profile-team">Nombre del estadio</ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\standings\standings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_httpClient_service__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__app_services_team_service__["a" /* TeamService */]])
    ], TabStandings);
    return TabStandings;
}());

//# sourceMappingURL=standings.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(40);
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

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpClient_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(30);
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

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabRounds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_match_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_match__ = __webpack_require__(164);
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
                setTimeout(function () {
                    _this.slides.slideTo(_this.roundSelected - 1);
                }, 50);
                break;
            case 'team':
                this.matchService.getMatchTeamById(this.userService.getUserLogged().equipo).subscribe(function (matches) {
                    _this.teamMatches = matches;
                    if (_this.teamMatches == null)
                        _this.isEmpty = true;
                });
                break;
            case 'teamsList':
                this.matchService.getMatchTeamById(this.navParams.data[1]).subscribe(function (matches) {
                    _this.teamMatches = matches;
                    if (_this.teamMatches == null)
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
    TabRounds.prototype.matchInfo = function (id) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__match_match__["a" /* MatchPage */], { matchId: id });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
    ], TabRounds.prototype, "slides", void 0);
    TabRounds = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tab-rounds',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\rounds\tab-rounds.html"*/'\n\n<ion-content>\n    <ion-slides #slides slidesPerView="3" *ngIf = "navParams.data[0] == \'league\'">\n        <ion-slide *ngFor="let num of userService.getRounds()" [class.selected] = "roundSelected === num" (click)="roundInfo(num)"  >\n                    <p id="slide-title">Jornada {{num}}</p>\n                    <div class = "triangle" [class.colored-traingle]= "roundSelected === num && roundMatches != null"></div>\n        </ion-slide>\n    </ion-slides>\n    <ion-spinner class = "spinner" *ngIf = "roundMatches == null && teamMatches == null && !isEmpty"></ion-spinner>\n    <ion-row id = "no-matches" *ngIf = "isEmpty">No hay partidos disponibles</ion-row>\n    <ion-scroll  style="width:100%;height:100vh" scrollY="true" hideScroll= "true" *ngIf = "navParams.data[0] == \'league\' && roundMatches != undefined && roundMatches[0]?.jornada == roundSelected">\n        <ion-grid *ngFor = "let match of roundMatches; let i = index" (click) = "matchInfo(match.id)">\n            <ion-row id = "date" *ngIf = "i == 0 || match.fechaPartido != roundMatches[i-1]?.fechaPartido">\n                <ion-col>{{match.fechaPartido}}</ion-col>\n            </ion-row>\n            <ion-row class = "lines"></ion-row>\n            <ion-row *ngIf = "match.estado != \'Finalizado\' || match.estado != \'finalizado\'">\n                <ion-col col-4 class= "team-local">{{match.equipoLocal.nombre}}</ion-col>\n                <ion-col col-4><h1>{{match.horaPartido}}</h1></ion-col>\n                <ion-col col-4 class = "team-visitor">{{match.equipoVisitante.nombre}}</ion-col>\n            </ion-row>\n            <ion-row *ngIf = "match.estado == \'Finalizado\' || match.estado == \'finalizado\'">\n                <ion-col col-4 class= "team-local">{{match.equipoLocal.nombre}}</ion-col>\n                <ion-col col-1 class= "score-local"><h1>{{match.golesLocal}}</h1></ion-col>\n                <ion-col col-2><h1>-</h1></ion-col>\n                <ion-col col-1 class = "score-visitor"><h1>{{match.golesVisitante}}</h1></ion-col>\n                <ion-col col-4 class = "team-visitor">{{match.equipoVisitante.nombre}}</ion-col>\n            </ion-row>\n            <ion-row class = "lines" *ngIf = "(i+1) == roundMatches.length"></ion-row>\n        </ion-grid>\n  </ion-scroll>\n  <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll= "true" *ngIf="navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n    <ion-grid *ngFor = "let match of teamMatches; let i = index" (click) = "matchInfo(match.id)">\n        <ion-row id = "date" *ngIf = "i == 0 || match.fechaPartido != teamMatches[i-1].fechaPartido">\n            <ion-col>{{match.fechaPartido}}</ion-col>\n        </ion-row>\n        <ion-row class = "lines"></ion-row>\n        <ion-row *ngIf = "match.estado != \'Finalizado\' || match.estado != \'finalizado\'">\n            <ion-col col-4 class= "team-local">{{match.equipoLocal.nombre}}</ion-col>\n            <ion-col col-4><h1>{{match.horaPartido}}</h1></ion-col>\n            <ion-col col-4 class = "team-visitor">{{match.equipoVisitante.nombre}}</ion-col>\n        </ion-row>\n        <ion-row *ngIf = "match.estado == \'Finalizado\' || match.estado == \'finalizado\'">\n            <ion-col col-4 class= "team-local">{{match.equipoLocal.nombre}}</ion-col>\n            <ion-col col-1 class= "score-local"><h1>{{match.golesLocal}}</h1></ion-col>\n            <ion-col col-2><h1>-</h1></ion-col>\n            <ion-col col-1 class = "score-visitor"><h1>{{match.golesVisitante}}</h1></ion-col>\n            <ion-col col-4 class = "team-visitor">{{match.equipoVisitante.nombre}}</ion-col>\n        </ion-row>\n        <ion-row class = "lines" *ngIf = "(i+1) == teamMatches.length"></ion-row>\n    </ion-grid>\n</ion-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\rounds\tab-rounds.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_match_service__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], TabRounds);
    return TabRounds;
}());

//# sourceMappingURL=tab-rounds.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_match_service__ = __webpack_require__(83);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_match_service__["a" /* MatchService */]])
    ], MatchPage);
    return MatchPage;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabRanks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(166);
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
    function TabRanks(navCtrl, navParams, userService, app, teamService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.app = app;
        this.teamService = teamService;
        this.rankSelected = "goals";
        switch (this.navParams.data[0]) {
            case 'league':
                this.players = userService.getTopGoals();
                break;
            case 'team':
                this.players = this.userService.getUserTeam().plantillaEquipo;
                break;
            case 'teamsList':
                this.teamService.getPlayerTeamById(this.navParams.data[1]).subscribe(function (team) { return _this.players = team.plantillaEquipo; });
                break;
        }
    }
    TabRanks.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeagueTabPage');
    };
    TabRanks.prototype.clickPlayer = function (id, teamID) {
        console.log("Id del equipo del jugador es " + teamID);
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__player_player__["a" /* PlayerPage */], { playerId: id, teamId: teamID });
    };
    TabRanks.prototype.selectRank = function (type) {
        this.rankSelected = type;
    };
    TabRanks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ranks-tab',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\ranks\ranks-tab.html"*/'\n\n<ion-content>\n  <ion-spinner class = "spinner" *ngIf = "players == null" color ="ligth"></ion-spinner>\n  <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll= "true" *ngIf = "navParams.data[0] == \'league\'">\n    <ion-grid *ngFor = "let player of players; let position = index;">\n      <ion-row class = "lines"></ion-row>\n      <ion-row (click)="clickPlayer(player.id, player.equipo)" class = "player-info">\n        <ion-col col-xs-1 id="player-position" [class.first-position]= "position == 0">{{position+1}}</ion-col>\n        <ion-col col-xs-3 id="col-player-image">\n            <img id = "player-image" src="http://192.168.1.39:8080/images/{{player?.fotoJugador}}">\n        </ion-col>\n        <ion-col col-6 id="player-name">{{player.nombre}}</ion-col>\n        <ion-col col-xs-2 id ="player-goals"><h1>{{player.goles}}</h1></ion-col>\n      </ion-row>\n      <ion-row *ngIf = "(position+1) == players.length" class = "lines"></ion-row>\n    </ion-grid>\n  </ion-scroll>\n  <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll= "true" *ngIf = "navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n    <ion-grid (click)="clickPlayer(player.id, player.equipo)" *ngFor = "let player of players; let i = index" class = "player-info-team">\n      <ion-row class = "lines"></ion-row>\n      <ion-row>\n        <ion-col col-xs-1 id="col-player-image">\n            {{player?.dorsal}}\n            <img id = "player-image" src="http://192.168.1.39:8080/images/{{player?.fotoJugador}}">\n        </ion-col>\n        <ion-col col-6 id="player-info-titles">\n          <p>Nombre</p>\n          <p>Edad</p>\n          <p>Posición</p>\n          <p>Nacionalidad</p>\n        </ion-col>\n        <ion-col col-xs-5 id ="player-data">\n          <p>{{player?.nombre}} {{player?.apellidos}}</p>\n          <p>{{player?.edad}}</p>\n          <p>{{player?.posicion}}</p>\n          <p>{{player?.nacionalidad}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf = "(i+1) == players.length" class = "lines"></ion-row>\n  </ion-grid>\n  </ion-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\Tabs\ranks\ranks-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__["a" /* TeamService */]])
    ], TabRanks);
    return TabRanks;
}());

//# sourceMappingURL=ranks-tab.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_player_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__ = __webpack_require__(47);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__["a" /* TeamService */]])
    ], PlayerPage);
    return PlayerPage;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_login_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_user_service__ = __webpack_require__(30);
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
    function LoginPage(navCtrl, navParams, menuController, loginService, userService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuController = menuController;
        this.loginService = loginService;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
    }
    LoginPage.prototype.goHomePage = function (username, password) {
        var _this = this;
        this.loginService.login(username, password).subscribe(function (reponse) {
            _this.userService.generateUserData();
            _this.menuController.enable(true);
            //this.navCtrl.setRoot(HomeTabsPage, {id:['league']});
            _this.presentLoading();
        }, function (error) { return console.error(error); });
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
        }, 2500);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.menuController.enable(false);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\login\login.html"*/'\n<ion-content padding class = "background">\n      <div padding  id="background-login">\n      </div>\n      <!--div>\n        <ion-row id = "input-login-content">\n          <ion-col>\n            <ion-list inset>\n    \n              <ion-item>\n                <ion-label>Username</ion-label>\n                <ion-input (keyup.enter)= "username.focusNext()" type="text" #username></ion-input>\n              </ion-item>\n    \n              <ion-item>\n                <ion-label>Password</ion-label>\n                <ion-input id = "password" (keyup.enter)="goHomePage(username?.value, password?.value)" type="password" #password></ion-input>\n              </ion-item>\n              \n              <button ion-button (click)="goHomePage(username?.value, password?.value)" class="login-button" >Login</button>\n              \n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </div-->\n      <div id ="div-card">\n        <ion-card>\n          <ion-card-header>\n            Inicio de sesión\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list no-lines>\n              <ion-item>\n                <ion-input #username type ="text" placeholder = "Usuario" (keyup.enter) = "username.focusNext()"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input #password type ="password" placeholder = "Contraseña" (keyup.enter) = "goHomePage(username?.value, password?.value)" ></ion-input>\n              </ion-item>\n            </ion-list>\n            <p>¿Has olvidado tu usuario o contraseña?</p>\n            <button ion-button block outline color = "light" (click)= "goHomePage(username?.value, password?.value)">Iniciar sesión</button>\n          </ion-card-content>\n        </ion-card>\n        <button ion-button clear full color = "light">¿No tienes cuenta? Click aquí</button>\n      </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_services_login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__app_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_services_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]) === "function" && _f || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__ = __webpack_require__(30);
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
    function ProfilePage(navCtrl, navParams, userService, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.events = events;
        this.clickImage = false;
        this.selection = "one";
        this.header = 150;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.goTeam = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__["a" /* HomeTabsPage */], { id: [this.navParams.get('id')[0]] });
    };
    ProfilePage.prototype.resizeHeader = function () {
        this.content.scrollTo(0, 0, 0); //relocate the content after click in a button
        this.events.publish('resizeHeader');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ProfilePage.prototype, "content", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar height="20px" color="header">\n    <button ion-button menuToggle id="button-toggle">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mi perfil</ion-title>\n  </ion-navbar>\n\n  <elastic-header [scrollArea] = "component" [headerHeight] = "header">\n      <img id="profile-image" src="http://192.168.1.39:8080/images/defaultProfile.jpg" imageViewer/>\n  </elastic-header>\n\n  <ion-toolbar color="light" mode="md">\n    <ion-segment color="dark" mode="md" [(ngModel)]= "selection">\n      <ion-segment-button (click) = "resizeHeader()" class = "text-on-botton" value="one">\n        <ion-icon name="home"></ion-icon>\n        Perfil\n      </ion-segment-button>\n      <ion-segment-button (click) = "resizeHeader()" class = "text-on-botton" value="two">\n          <ion-icon name="chatbubbles"></ion-icon>\n          Sanciones\n      </ion-segment-button>\n      <ion-segment-button (click) = "resizeHeader()" class = "text-on-botton" value="three">\n          <ion-icon name="cog"></ion-icon>\n          Ajustes\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen #component [ngSwitch] = "selection" >\n <ion-item no-lines *ngSwitchCase = "\'one\'">\n   <ion-item id = "team-image-container" (click) = "goTeam()">\n      <img id = "user-team-image" src = "http://192.168.1.39:8080/images/shield.png">\n      <h1 id = "user-team-name">{{userService.getUserTeam()?.nombre}}</h1>\n   </ion-item>\n   <ion-row>\n    <ion-col>\n      Dorsal\n    </ion-col>\n    <ion-col class = "info-content">\n      <strong>{{userService.getUserLogged().dorsal}}</strong>\n    </ion-col>\n  </ion-row>\n   <ion-row lines>\n     <ion-col>\n       Goles\n     </ion-col>\n     <ion-col class = "info-content">\n       <strong>{{userService.getUserLogged().goles}}</strong>\n     </ion-col>\n   </ion-row>\n   <ion-row>\n      <ion-col>\n        Tartejas Amarillas\n      </ion-col>\n      <ion-col class = "info-content">\n        <strong>{{userService.getUserLogged()?.tarjetasAmarillas}}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n          Tarjetas Rojas\n        </ion-col>\n        <ion-col class = "info-content">\n          <strong>{{userService.getUserLogged()?.tarjetasRojas}}</strong>\n        </ion-col>\n      </ion-row>\n   <ion-card id ="sanctions-card">\n     <p id ="card-text"><strong>No tienes sanciones</strong></p>\n   </ion-card>\n </ion-item>\n\n <ion-list *ngSwitchCase = "\'two\'">\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n   <h1>AAAA</h1>\n\n </ion-list>\n\n <ion-list *ngSwitchCase = "\'three\'">\n\n </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_tabs_home_tabs__ = __webpack_require__(48);
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
        console.log("El id del equipo es " + this.navParams.get('id')[0]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_tabs_home_tabs__["a" /* HomeTabsPage */], { id: [this.navParams.get('id')[0], id] });
    };
    TeamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teams',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\teams\teams.html"*/'<ion-header>\n    <ion-navbar height="20px" color="header">\n      <button ion-button menuToggle id="button-toggle">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Equipos</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item no-lines *ngFor= "let team of userService.getUserLeague()" (click)="teamSelect(team.id)">\n      <ion-avatar item-start>\n        <img src = "http://192.168.1.39:8080/images/shield.png">\n      </ion-avatar>\n      <p id ="team-name">{{team?.nombre}}</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\teams\teams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], TeamsPage);
    return TeamsPage;
}());

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 182:
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
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home-tabs/Tabs/ranks/ranks-tab.module": [
		709,
		7
	],
	"../pages/home-tabs/Tabs/rounds/tab-rounds.module": [
		710,
		6
	],
	"../pages/home-tabs/home-tabs.module": [
		708,
		5
	],
	"../pages/login/login.module": [
		711,
		4
	],
	"../pages/match/match.module": [
		712,
		3
	],
	"../pages/player/player.module": [
		714,
		2
	],
	"../pages/profile/profile.module": [
		713,
		1
	],
	"../pages/teams/teams.module": [
		715,
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
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__league_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_service__ = __webpack_require__(83);
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

//import { Observable } from 'rxjs/Observable';





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
                    /*this.matchService.getMatchByLeague(team.liga).subscribe( //Unnecesary queries
                        leagueMatches => this.leagueMaches = leagueMatches
                    );
                    this.matchService.getMatchTeamById(response.equipo).subscribe(
                        matches => this.userMatches = matches
                    );*/
                }
                ;
            });
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
    UserService.prototype.logout = function () {
        this.user = null;
        this.userTeam = null;
        this.userLeague = null;
        this.userLeaguePlayers = null;
        this.userMatches = null;
        this.leagueMaches = null;
        this.rounds = [];
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

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(40);
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

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_app_services_player_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_app_services_login_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_app_services_httpClient_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_app_services_team_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_app_services_match_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_app_services_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_app_services_league_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_elastic_header_elastic_header__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_tabs_home_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_tabs_Tabs_standings_standings__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_tabs_Tabs_rounds_tab_rounds__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_tabs_Tabs_ranks_ranks_tab__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_player_player__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_match_match__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_teams_teams__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_profile_profile__ = __webpack_require__(168);
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
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_tabs_Tabs_standings_standings__["a" /* TabStandings */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_tabs_Tabs_rounds_tab_rounds__["a" /* TabRounds */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_tabs_Tabs_ranks_ranks_tab__["a" /* TabRanks */],
                __WEBPACK_IMPORTED_MODULE_22__pages_player_player__["a" /* PlayerPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__components_elastic_header_elastic_header__["a" /* ElasticHeader */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home-tabs/home-tabs.module#HomeTabsPageModule', name: 'HomeTabsPage', segment: 'home-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tabs/Tabs/ranks/ranks-tab.module#LeagueTabPageModule', name: 'TabRanks', segment: 'ranks-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tabs/Tabs/rounds/tab-rounds.module#TabTeamPageModule', name: 'TabRounds', segment: 'tab-rounds', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match/match.module#MatchPageModule', name: 'MatchPage', segment: 'match', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/player/player.module#PlayerPageModule', name: 'PlayerPage', segment: 'player', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teams/teams.module#TeamsPageModule', name: 'TeamsPage', segment: 'teams', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_tabs_Tabs_standings_standings__["a" /* TabStandings */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_tabs_Tabs_rounds_tab_rounds__["a" /* TabRounds */],
                __WEBPACK_IMPORTED_MODULE_21__pages_home_tabs_Tabs_ranks_ranks_tab__["a" /* TabRanks */],
                __WEBPACK_IMPORTED_MODULE_22__pages_player_player__["a" /* PlayerPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__components_elastic_header_elastic_header__["a" /* ElasticHeader */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__src_app_services_player_service__["a" /* PlayerService */],
                __WEBPACK_IMPORTED_MODULE_9__src_app_services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_11__src_app_services_team_service__["a" /* TeamService */],
                __WEBPACK_IMPORTED_MODULE_12__src_app_services_match_service__["a" /* MatchService */],
                __WEBPACK_IMPORTED_MODULE_10__src_app_services_httpClient_service__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_13__src_app_services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_14__src_app_services_league_service__["a" /* LeagueService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(227);
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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(40);
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

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tabs_standings_standings__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tabs_rounds_tab_rounds__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Tabs_ranks_ranks_tab__ = __webpack_require__(165);
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
                this.headerTitle = "Liga";
                this.rootParams = ["league"];
                this.titles = ["Clasificacion", "Calendario", "Rankings"];
                this.icons = ["trophy", "calendar", "podium"];
                break;
            case "profile":
            case "team":
                this.headerTitle = userService.getUserTeam().nombre;
                this.rootParams = ["team"];
                this.titles = ["Perfil", "Calendario", "Plantilla"];
                this.icons = ["home", "calendar", "people"];
                break;
            case "teamsList":
                this.teamService.getPlayerTeamById(this.navParams.get('id')[1]).subscribe(function (team) { return _this.headerTitle = team.nombre; });
                this.rootParams = ["teamsList", this.navParams.get('id')[1]];
                this.titles = ["Perfil", "Calendario", "Plantilla"];
                this.icons = ["home", "calendar", "people"];
                break;
        }
        this.tabs = [
            { title: this.titles[0], root: __WEBPACK_IMPORTED_MODULE_4__Tabs_standings_standings__["a" /* TabStandings */], rootParams: this.rootParams, icon: this.icons[0] },
            { title: this.titles[1], root: __WEBPACK_IMPORTED_MODULE_5__Tabs_rounds_tab_rounds__["a" /* TabRounds */], rootParams: this.rootParams, icon: this.icons[1] },
            { title: this.titles[2], root: __WEBPACK_IMPORTED_MODULE_6__Tabs_ranks_ranks_tab__["a" /* TabRanks */], rootParams: this.rootParams, icon: this.icons[2] }
        ];
    }
    HomeTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-tabs',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\home-tabs.html"*/'<ion-header>\n    <ion-navbar height="20px" color="header">\n      <button ion-button menuToggle id="button-toggle">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>{{headerTitle}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="false">\n  <ion-tabs id = "tabbar" height="100%" swipeEnable ="false" color="header" tabsPlacement = "top">\n    <ion-tab *ngFor ="let tab of tabs" [root]="tab.root" [rootParams] = "tab.rootParams" [tabTitle]="tab.title" [tabIcon] = "tab.icon"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\pages\home-tabs\home-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__["a" /* TeamService */]])
    ], HomeTabsPage);
    return HomeTabsPage;
}());

//# sourceMappingURL=home-tabs.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_tabs_Tabs_standings_standings__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_tabs_home_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_teams_teams__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_services_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_login_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_player_service__ = __webpack_require__(134);
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
    function MyApp(platform, statusBar, splashScreen, userService, loginService, loadingCtrl) {
        this.userService = userService;
        this.loginService = loginService;
        this.loadingCtrl = loadingCtrl;
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
    MyApp.prototype.navigateTo = function (page, rootParams) {
        if (rootParams[0] == 'logout') {
            this.presentLoading();
            this.loginService.logout();
            this.menuOptionSelected = "league";
        }
        else {
            this.menuOptionSelected = rootParams[0];
        }
        this.nav.setRoot(page, { id: rootParams });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\app\app.html"*/'<ion-menu [content]="content" *ngIf="userService.getUserLogged()?.fotoJugador!= undefined">\n  <ion-header class = "app-header">\n    <div class ="app-background-header"></div>\n   <div class = "div-image" ><img id = "menu-profile-image" src="http://192.168.1.39:8080/images/{{userService.getUserLogged()?.fotoJugador}}"></div>\n  </ion-header>\n\n  <ion-content>\n    <ion-row><ion-col class= "menu-titles">MI EQUIPO</ion-col></ion-row>\n    <button class = "menu-options" [class.menu-option-selected] = "myTeam.rootParams[0] === menuOptionSelected" no-lines ion-item menuClose (click)= "navigateTo(myTeam.component, myTeam.rootParams)">\n      <p class = "menu-button-titles" >{{userService.getUserTeam()?.nombre}}</p>\n      <ion-icon class = "menu-icons" item-left name= "{{myTeam.icon}}"></ion-icon>\n    </button>\n    <ion-row><ion-col class= "menu-titles">INFORMACIÓN</ion-col></ion-row>\n    <ion-list no-lines>\n      <button class = "menu-options" [class.menu-option-selected] = "page.rootParams[0] === menuOptionSelected" *ngFor = "let page of menuPages" menuClose ion-item (click)="navigateTo(page.component, page.rootParams)">\n        <p class = "menu-button-titles">{{page.title}}</p>\n        <ion-icon class = "menu-icons" item-left name= "{{page.icon}}"></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__app_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_10__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'elastic-header',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\components\elastic-header\elastic-header.html"*/'<ng-content></ng-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\src\components\elastic-header\elastic-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
    ], ElasticHeader);
    return ElasticHeader;
}());

//# sourceMappingURL=elastic-header.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(40);
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

/***/ })

},[373]);
//# sourceMappingURL=main.js.map