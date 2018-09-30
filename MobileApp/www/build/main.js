webpackJsonp([11],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalTeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(39);
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



var BASE_URL = 'histEquipos/';
var HistoricalTeamService = (function () {
    function HistoricalTeamService(http) {
        this.http = http;
    }
    HistoricalTeamService.prototype.getTeamHistorials = function (id) {
        return this.http.get(BASE_URL + "/equipo/" + id).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    HistoricalTeamService.prototype.getPlayerHistorials = function (id) {
        return this.http.get("histJugadores/jugador/" + id).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    HistoricalTeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpClient_service__["a" /* HttpClient */]])
    ], HistoricalTeamService);
    return HistoricalTeamService;
}());

//# sourceMappingURL=historicalTeam.service.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(39);
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



var BASE_URL = 'grupos/';
var LeagueService = (function () {
    function LeagueService(http) {
        this.http = http;
    }
    LeagueService.prototype.getLeagueByName = function (name) {
        return this.http.get(BASE_URL + name).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    LeagueService.prototype.getStandings = function (groupId) {
        return this.http.get(BASE_URL + groupId + '/clasificacion').map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    LeagueService.prototype.getGroups = function (league) {
        return this.http.get('ligas/' + league + '/grupos').map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    LeagueService.prototype.getTopGoals = function (group) {
        return this.http.get(BASE_URL + 'goleadores/' + group).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    LeagueService.prototype.getTopYellowCards = function (group) {
        return this.http.get(BASE_URL + 'amarillas/' + group).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    LeagueService.prototype.getTopGoalkeepers = function (group) {
        return this.http.get(BASE_URL + 'porteros/' + group).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    LeagueService.prototype.getTopRedCards = function (group) {
        return this.http.get(BASE_URL + 'rojas/' + group).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    LeagueService.prototype.getGroupProfile = function (id) {
        return this.http.get(BASE_URL + 'perfil/' + id).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    LeagueService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpClient_service__["a" /* HttpClient */]])
    ], LeagueService);
    return LeagueService;
}());

//# sourceMappingURL=league.service.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabStandings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_httpClient_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_team_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_player_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maps_maps__ = __webpack_require__(97);
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
    function TabStandings(navCtrl, navParams, http, userService, teamService, playerService, modalController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.userService = userService;
        this.teamService = teamService;
        this.playerService = playerService;
        this.modalController = modalController;
        if (this.navParams.data[0] == 'team') {
            this.team = userService.getUserTeam();
            this.playerService.getPlayerById(this.team.delegado).subscribe(function (response) {
                _this.delegate = response;
            });
        }
        else if (this.navParams.data[0] == 'teamsList') {
            this.teamService.getPlayerTeamById(this.navParams.data[1]).subscribe(function (team) {
                _this.team = team;
                _this.playerService.getPlayerById(team.delegado).subscribe(function (response) {
                    _this.delegate = response;
                });
            });
        }
    }
    TabStandings.prototype.viewGoogleMaps = function () {
        var mapModal;
        if (this.team.estadioEquipo) {
            mapModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_6__maps_maps__["a" /* MapsPage */], { latitude: this.team.estadioEquipo.latitud, longitude: this.team.estadioEquipo.longitud });
        }
        else {
            mapModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_6__maps_maps__["a" /* MapsPage */], { latitude: undefined, longitude: undefined });
        }
        mapModal.present();
    };
    TabStandings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\standings\standings.html"*/'<!--ion-header *ngIf = "navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n\n  <div id = "team-shield-background"></div>\n\n  <div><img id="shield-team-image" src = "http://192.168.1.39:8080/images/shield.png"></div>\n\n</ion-header-->\n\n<ion-content width="100%" [class.team-info-content]="navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n\n  <ion-grid *ngIf="navParams.data[0] == \'league\' && userService.getUserLeague() != undefined">\n\n    <ion-row id="colum-titles">\n\n      <ion-col col-xs-1>#</ion-col>\n\n      <ion-col col-4 id="title-team">Equipo</ion-col>\n\n      <ion-col col-xs-1>PJ</ion-col>\n\n      <ion-col col-xs-1>G</ion-col>\n\n      <ion-col col-xs-1>E</ion-col>\n\n      <ion-col col-xs-1>P</ion-col>\n\n      <ion-col col-xs-1>GF</ion-col>\n\n      <ion-col col-xs-1>GC</ion-col>\n\n      <ion-col col-xs-2>\n\n        <strong>PT</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll="true">\n\n      <ion-row *ngFor="let team of userService.getUserLeague(); let i = index" id="colum-content">\n\n        <ion-col col-xs-1 id="team-position" [class.first-position]="(i + 1) == 1" [class.last-position]="(i + 1) == userService.getUserLeague()?.length">{{i+1}}</ion-col>\n\n        <ion-col col-4 id="team-name">{{team?.nombre}}</ion-col>\n\n        <ion-col col-xs-1 class="team-info">{{team?.partidosJugados}}</ion-col>\n\n        <ion-col col-xs-1 class="team-info">{{team?.partidosGanados}}</ion-col>\n\n        <ion-col col-xs-1 class="team-info">{{team?.partidosEmpatados}}</ion-col>\n\n        <ion-col col-xs-1 class="team-info">{{team?.partidosPerdidos}}</ion-col>\n\n        <ion-col col-xs-1 class="team-info">{{team?.goles}}</ion-col>\n\n        <ion-col col-xs-1 class="team-info">{{team?.golesEncajados}}</ion-col>\n\n        <ion-col col-xs-2 class="team-info">\n\n          <strong>{{team?.puntos}}</strong>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-scroll>\n\n  </ion-grid>\n\n\n\n  <div *ngIf="navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n\n    <div id="team-shield-background"></div>\n\n    <div>\n\n      <img id="shield-team-image" src="{{userService.getBaseURLforImages()}}{{team?.imagenEquipo}}">\n\n    </div>\n\n  </div>\n\n  <ion-spinner *ngIf="userService.getUserLeague() == null || (team == null && navParams.data[0] == \'teamsList\')" class="spinner"></ion-spinner>\n\n  <ion-grid *ngIf="navParams.data[0] ==\'team\' || navParams.data[0] == \'teamsList\' && team != undefined">\n\n    <ion-row>\n\n      <ion-col id="profile-team-name">\n\n        <strong>{{team?.nombre}}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class="profile-team-titles">Delegado:</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class="profile-team"> {{delegate?.nombre}} {{delegate?.apellidos}}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class="profile-team-titles">Estadio:</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class="profile-team">{{team.estadioEquipo ? team.estadioEquipo.nombre : \'No tiene estadio\'}}</ion-col>\n\n    </ion-row>\n\n\n\n    <div id="map-button" *ngIf = "team.estadioEquipo">\n\n      <button ion-button class="map-button" (click) = "viewGoogleMaps()">Cómo llegar</button>\n\n    </div>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\standings\standings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_httpClient_service__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__app_services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_5__app_services_player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */]])
    ], TabStandings);
    return TabStandings;
}());

//# sourceMappingURL=standings.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(39);
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
    MatchService.prototype.getMatchByRoundAndGroup = function (round, groupId) {
        return this.http.get(BASE_URL + 'jornada/' + round + '/' + groupId).map(function (response) { return response; }, function (error) { return console.error(error); });
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

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpClient_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(39);
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

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular_navigation_view_controller__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_historicalTeam_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_user_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChartsPage = (function () {
    function ChartsPage(navCtrl, navParams, userService, viewController, historicalTeamService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.viewController = viewController;
        this.historicalTeamService = historicalTeamService;
    }
    ChartsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.historicalTeamService.getPlayerHistorials(this.userService.getUserLogged().id).subscribe(function (response) {
            var historials = response;
            if (historials.length > 0) {
                _this.hasCharts = true;
                _this.barChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](_this.barCanvasGoals.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: ["2017/2018", "2018/2019", "2019/2020", "2020/2021"],
                        datasets: [{
                                label: 'Nº Puntos',
                                data: [historials[0] == null ? 0 : historials[0].jugador.goles, historials[1] == null ? 0 : historials[1].jugador.goles, historials[2] == null ? 0 : historials[2].jugador.goles, historials[3] == null ? 0 : historials[3].jugador.goles],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        legend: {
                            labels: {
                                fontColor: 'white'
                            }
                        },
                        scales: {
                            xAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                            yAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                        }
                    }
                });
                _this.barChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](_this.barCanvasYellowCards.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: ["2017/2018", "2018/2019", "2019/2020", "2020/2021"],
                        datasets: [{
                                label: 'Nº Puntos',
                                data: [historials[0] == null ? 0 : historials[0].jugador.tarjetasAmarillas, historials[1] == null ? 0 : historials[1].jugador.tarjetasAmarillas, historials[2] == null ? 0 : historials[2].jugador.tarjetasAmarillas, historials[3] == null ? 0 : historials[3].jugador.tarjetasAmarillas],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        legend: {
                            labels: {
                                fontColor: 'white'
                            }
                        },
                        scales: {
                            xAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                            yAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                        }
                    }
                });
                _this.barChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](_this.barCanvasRedCards.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: ["2017/2018", "2018/2019", "2019/2020", "2020/2021"],
                        datasets: [{
                                label: 'Nº Puntos',
                                data: [historials[0] == null ? 0 : historials[0].jugador.tarjetasRojas, historials[1] == null ? 0 : historials[1].jugador.tarjetasRojas, historials[2] == null ? 0 : historials[2].jugador.tarjetasRojas, historials[3] == null ? 0 : historials[3].jugador.tarjetasRojas],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        legend: {
                            labels: {
                                fontColor: 'white'
                            }
                        },
                        scales: {
                            xAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                            yAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                        }
                    }
                });
            }
            else {
                _this.hasCharts = false;
            }
        } //response
        );
    };
    ChartsPage.prototype.ionViewDidLoad = function () {
    };
    ChartsPage.prototype.closeModal = function () {
        this.viewController.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('goals'),
        __metadata("design:type", Object)
    ], ChartsPage.prototype, "barCanvasGoals", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('yellowCards'),
        __metadata("design:type", Object)
    ], ChartsPage.prototype, "barCanvasYellowCards", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('redCards'),
        __metadata("design:type", Object)
    ], ChartsPage.prototype, "barCanvasRedCards", void 0);
    ChartsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-charts',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\charts\charts.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n    <ion-title>Historicos</ion-title>\n    <ion-buttons end>\n      <button id="close-modal-button" ion-button (click)="closeModal()">Cerrar</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div id = "spinner-container">\n      <ion-spinner class = "spinner" *ngIf = "hasCharts == undefined || hasCharts == null"></ion-spinner>\n  </div>\n  \n  <div>\n    <h1 *ngIf = "hasCharts == true" class = "hist-title">Goles</h1>\n    <canvas #goals></canvas>\n    <h1 *ngIf = "hasCharts == true" class = "hist-title">Tarjetas Amarillas</h1>\n    <canvas #yellowCards></canvas>\n    <h1 *ngIf = "hasCharts == true" class = "hist-title">Tarjetas Rojas</h1>\n    <canvas #redCards></canvas>\n  </div>\n\n  <h1 id = "error-message" *ngIf = "hasCharts == false">No dispone de ningún hisotrico</h1>\n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\charts\charts.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__app_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular_navigation_view_controller__["a" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__node_modules_ionic_angular_navigation_view_controller__["a" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__app_services_historicalTeam_service__["a" /* HistoricalTeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_services_historicalTeam_service__["a" /* HistoricalTeamService */]) === "function" && _e || Object])
    ], ChartsPage);
    return ChartsPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabRounds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_match_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_match__ = __webpack_require__(178);
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
                this.roundSelected = this.userService.getUserGroup().jornadaActual;
                if (this.userService.getUserTeam() != undefined || this.userService.getUserTeam() != null) {
                    this.matchService.getMatchByRoundAndGroup(this.roundSelected, this.userService.getUserTeam().grupo.idGrupo).subscribe(function (matches) {
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
        this.matchService.getMatchByRoundAndGroup(this.roundSelected, this.userService.getUserTeam().grupo.idGrupo).subscribe(function (matches) {
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
    TabRounds.prototype.matchInfo = function (id, idActa, status) {
        status = status.toLowerCase();
        console.log("ID:" + id + " IDACTA:" + idActa + " STATUS:" + status);
        if (status == "disputado" || status == "acta pendiente") {
            this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_4__match_match__["a" /* MatchPage */], { matchId: idActa, matchStatus: status });
        }
        else {
            this.app.getRootNavs()[0].push(__WEBPACK_IMPORTED_MODULE_4__match_match__["a" /* MatchPage */], { matchId: id, matchStatus: status });
        }
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
            selector: 'tab-rounds',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\rounds\tab-rounds.html"*/'\n\n<ion-content>\n    <ion-slides #slides slidesPerView="3" *ngIf = "navParams.data[0] == \'league\'">\n        <ion-slide *ngFor="let num of userService.getRounds()" [class.selected] = "roundSelected === num" (click)="roundInfo(num)"  >\n                    <p id="slide-title">Jornada {{num}}</p>\n                    <div class = "triangle" [class.colored-traingle]= "roundSelected === num"></div>\n        </ion-slide>\n    </ion-slides>\n   \n    <ion-row id = "no-matches" *ngIf = "isEmpty">No hay partidos disponibles</ion-row>\n    <ion-spinner class = "spinner" *ngIf = "roundMatches == null && teamMatches == null && !isEmpty"></ion-spinner>\n    <ion-scroll  style="width:100%;height:100vh" scrollY="true" hideScroll= "true" *ngIf = "navParams.data[0] == \'league\' && roundMatches != undefined">\n        <ion-grid *ngFor = "let match of roundMatches; let i = index" (click) = "matchInfo(match?.id, match?.idActa, match?.estado)">\n            <div *ngIf ="match.jornada == roundSelected">\n                <ion-row id = "date" *ngIf = "i == 0 || match.fechaPartido != roundMatches[i-1]?.fechaPartido">\n                    <ion-col>{{match.fechaPartido}}</ion-col>\n                </ion-row>\n                <ion-row class = "lines"></ion-row>\n                <ion-row *ngIf = "match.estado.toLowerCase() != \'disputado\' && match.estado.toLowerCase() != \'acta pendiente\'">\n                    <ion-col col-4 class= "team-local">{{match.equipoLocalNombre}}</ion-col>\n                    <ion-col col-4><h1>{{match.horaPartido ? match.horaPartido : \'-\'}}</h1></ion-col>\n                    <ion-col col-4 class = "team-visitor">{{match.equipoVisitanteNombre}}</ion-col>\n                </ion-row>\n                <ion-row *ngIf = "match.estado.toLowerCase() == \'disputado\' || match.estado.toLowerCase() == \'acta pendiente\'">\n                    <ion-col col-4 class= "team-local">{{match.equipoLocalNombre}}</ion-col>\n                    <ion-col col-1 class= "score-local"><h1>{{match.golesLocal}}</h1></ion-col>\n                    <ion-col col-2><h1>-</h1></ion-col>\n                    <ion-col col-1 class = "score-visitor"><h1>{{match.golesVisitante}}</h1></ion-col>\n                    <ion-col col-4 class = "team-visitor">{{match.equipoVisitanteNombre}}</ion-col>\n                </ion-row>\n                <ion-row class = "lines" *ngIf = "(i+1) == roundMatches.length"></ion-row>\n            </div>\n        </ion-grid>\n  </ion-scroll>\n  <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll= "true" *ngIf="navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n    <ion-grid *ngFor = "let match of teamMatches; let i = index" (click) = "matchInfo(match?.id, match?.idActa, match?.estado)" [class.team-view-rounds] = "navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n        <ion-row id = "date" *ngIf = "i == 0 || match.fechaPartido != teamMatches[i-1].fechaPartido">\n            <ion-col>{{match.fechaPartido}}</ion-col>\n        </ion-row>\n        <ion-row class = "lines"></ion-row>\n        <ion-row *ngIf = "match.estado.toLowerCase() != \'disputado\' && match.estado.toLowerCase() != \'acta pendiente\'">\n            <ion-col col-4 class= "team-local">{{match.equipoLocalNombre}}</ion-col>\n            <ion-col col-4><h1>{{match.horaPartido ? match.horaPartido : \'-\'}}</h1></ion-col>\n            <ion-col col-4 class = "team-visitor">{{match.equipoVisitanteNombre}}</ion-col>\n        </ion-row>\n        <ion-row *ngIf = "match.estado.toLowerCase() == \'disputado\' || match.estado.toLowerCase() == \'acta pendiente\'">\n            <ion-col col-4 class= "team-local">{{match.equipoLocalNombre}}</ion-col>\n            <ion-col col-1 class= "score-local"><h1>{{match.golesLocal}}</h1></ion-col>\n            <ion-col col-2><h1>-</h1></ion-col>\n            <ion-col col-1 class = "score-visitor"><h1>{{match.golesVisitante}}</h1></ion-col>\n            <ion-col col-4 class = "team-visitor">{{match.equipoVisitanteNombre}}</ion-col>\n        </ion-row>\n        <ion-row class = "lines" *ngIf = "(i+1) == teamMatches.length"></ion-row>\n    </ion-grid>\n</ion-scroll>\n</ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\rounds\tab-rounds.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_match_service__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], TabRounds);
    return TabRounds;
}());

//# sourceMappingURL=tab-rounds.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_minute_service__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_match_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_maps_maps__ = __webpack_require__(97);
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
    function MatchPage(navCtrl, navParams, minuteService, matchService, modalController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.minuteService = minuteService;
        this.matchService = matchService;
        this.modalController = modalController;
        this.statSelected = "stats";
        this.status = this.navParams.get('matchStatus');
        if (this.status == "disputado" || this.status == "acta pendiente") {
            this.minuteService.getMinuteByMatchId(this.navParams.get('matchId')).subscribe(function (minute) {
                _this.match = minute;
            });
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
    MatchPage.prototype.viewGoogleMaps = function () {
        var mapModal;
        if (this.match.estadio) {
            mapModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__pages_maps_maps__["a" /* MapsPage */], { latitude: this.match.estadio.latitud, longitude: this.match.estadio.longitud });
        }
        else {
            mapModal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__pages_maps_maps__["a" /* MapsPage */], { latitude: undefined, longitude: undefined });
        }
        mapModal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Slides */])
    ], MatchPage.prototype, "slide", void 0);
    MatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-match',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\match\match.html"*/'\n\n<ion-header>\n\n  <ion-navbar height="20px" color ="transparent">\n\n    <button ion-button menuToggle id="button-toggle">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n  <ion-row *ngIf ="status == \'disputado\' || status == \'acta pendiente\'" id = "match-info">\n\n    <ion-col id = "local-name">\n\n      <strong>{{match?.nombreEquipoLocal}}</strong>\n\n    </ion-col>\n\n    <ion-col id = "goals-local">\n\n      {{match?.golesLocal}}\n\n    </ion-col>\n\n    <ion-col id = "separation">\n\n      -\n\n    </ion-col>\n\n    <ion-col id = "goals-visitor">\n\n      {{match?.golesVisitante}}\n\n    </ion-col>\n\n    <ion-col id = "visitor-name">\n\n      <strong>{{match?.nombreEquipoVisitante}}</strong>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row *ngIf= "status == \'pendiente\'" id = "match-info">\n\n    <ion-col id = "local-name">\n\n      <strong>{{match?.equipoLocalNombre}}</strong>\n\n    </ion-col>\n\n    <ion-col id = "match-time" *ngIf = "status == \'pendiente\'">\n\n      {{match?.horaPartido ? match?.horaPartido : \'-\'}}\n\n    </ion-col>\n\n    <ion-col id = "visitor-name">\n\n      <strong>{{match?.equipoVisitanteNombre}}</strong>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-header>\n\n\n\n<ion-content >\n\n    <ion-slides #slides slidesPerView="2">\n\n        <ion-slide [class.selected] = "statSelected == \'stats\'" (click)="selectStat(\'stats\')">\n\n                <p id="slide-title">Resumen</p>\n\n        </ion-slide>\n\n        <ion-slide [class.selected] = "statSelected == \'lineUp\'" (click)="selectStat(\'lineUp\')">\n\n          <p id="slide-title">Titulares</p>\n\n        </ion-slide>\n\n    </ion-slides>\n\n  <ion-list *ngIf = "statSelected == \'stats\' && (status == \'disputado\' || status == \'acta pendiente\')">\n\n      <ion-row>\n\n        <ion-col col-xs-4 class = "stats-info-local"><strong>5</strong></ion-col>\n\n        <ion-col col-xs-4 class = "stats-title">InfoTitle</ion-col>\n\n        <ion-col col-xs-4 class = "stats-info-visitor"><strong>4</strong></ion-col>\n\n      </ion-row>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf = "statSelected == \'lineUp\' && (status == \'disputado\' || status == \'acta pendiente\')">\n\n    <ion-item *ngFor = "let localPlayer of match?.convocadosLocal; let i = index">\n\n      <ion-row>\n\n        <ion-col class = "info-lineup">\n\n          <ion-row>\n\n              <ion-col col-xs-2 id = "local-dorsal"><strong >{{localPlayer.dorsal}}</strong></ion-col>\n\n              <ion-col col-xs-10 class = "player-name">{{localPlayer.nombre}}</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col class = "info-lineup" *ngIf = "match?.convocadosVisitante[i] != null && match?.convocadosVisitante[i] != undefined">\n\n          <ion-row>\n\n              <ion-col col-xs-2 id = "visitor-dorsal"><strong >{{match?.convocadosVisitante[i].dorsal}}</strong></ion-col>\n\n              <ion-col col-xs-10 class = "player-name"> {{match?.convocadosVisitante[i].nombre}}</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-row id = "no-info" *ngIf = "status == \'pendiente\'">El partido no se ha disputado.</ion-row>\n\n  <div id = "map-button" *ngIf = "status == \'pendiente\'">\n\n      <button ion-button (click) = "viewGoogleMaps()">Cómo llegar</button>\n\n  </div>\n\n    \n\n\n\n    \n\n  \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\match\match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_minute_service__["a" /* MinuteService */], __WEBPACK_IMPORTED_MODULE_3__app_services_match_service__["a" /* MatchService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */]])
    ], MatchPage);
    return MatchPage;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabRanks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_player__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_league_service__ = __webpack_require__(144);
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
        this.rankSelected = "Goleadores";
        this.rankTypes = [
            { type: "Goleadores", icon: "football" },
            { type: "Porteros", icon: "icon-goalkeeperIcon" },
            { type: "Tarjetas rojas", icon: "icon-redcard" },
            { type: "Tarjetas amarillas", icon: "icon-yellowcard" },
        ];
        switch (this.navParams.data[0]) {
            case 'league':
                if (this.userService.getLeagueGoals()) {
                    this.players = this.userService.getLeagueGoals();
                }
                else {
                    this.getRanks();
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
    TabRanks.prototype.rankInfo = function (rank) {
        this.rankSelected = rank;
        this.players = null;
        this.getRanks();
    };
    TabRanks.prototype.getRanks = function () {
        var _this = this;
        var selection = this.rankSelected.replace(" ", "");
        switch (selection) {
            case "Goleadores":
                this.leagueService.getTopGoals(this.userService.getUserLogged().grupo.idGrupo).subscribe(function (response) { return _this.players = response; });
                break;
            case "Porteros":
                this.leagueService.getTopGoalkeepers(this.userService.getUserLogged().grupo.idGrupo).subscribe(function (response) { return _this.players = response; });
                break;
            case "Tarjetasrojas":
                this.leagueService.getTopRedCards(this.userService.getUserLogged().grupo.idGrupo).subscribe(function (response) { return _this.players = response; });
                break;
            case "Tarjetasamarillas":
                this.leagueService.getTopYellowCards(this.userService.getUserLogged().grupo.idGrupo).subscribe(function (response) { return _this.players = response; });
                break;
        }
    };
    TabRanks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ranks-tab',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\ranks\ranks-tab.html"*/'\n\n<ion-content>\n  <ion-slides #slides slidesPerView="3" *ngIf = "navParams.data[0] == \'league\'">\n      <ion-slide *ngFor="let rank of rankTypes" [class.selected] = "rankSelected === rank.type" (click)="rankInfo(rank.type)">\n          <ion-icon class = "tab-icons" [name] = "rank.icon"></ion-icon>\n          <div class = "triangle" [class.colored-traingle]= "rankSelected === rank.type"></div>\n      </ion-slide>\n  </ion-slides>\n  <ion-row *ngIf = "navParams.data[0] == \'league\'" id = "rank-selected-title"><ion-col><strong>{{rankSelected}}</strong></ion-col></ion-row>\n\n  <ion-spinner class = "spinner" *ngIf = "players == null" color ="ligth"></ion-spinner>\n  <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll= "true" *ngIf = "navParams.data[0] == \'league\'">\n    <ion-grid *ngFor = "let player of players; let position = index;">\n      <ion-row class = "lines"></ion-row>\n      <ion-row (click)="clickPlayer(player.id, player.equipo)" class = "player-info">\n        <ion-col col-xs-1 id="player-position" [class.first-position]= "position == 0">{{position+1}}</ion-col>\n        <ion-col col-xs-3 id="col-player-image">\n            <img id = "player-image" class = "player-image-rank-position" src="{{userService.getBaseURLforImages()}}{{player?.fotoJugador}}">\n        </ion-col>\n        <ion-col col-6 id="player-name">{{player.nombre}}</ion-col>\n        <ion-col col-xs-2 *ngIf = "rankSelected == \'Goleadores\'" id ="player-goals"><h1>{{player.goles}}</h1></ion-col>\n        <ion-col col-xs-2 *ngIf = "rankSelected == \'Tarjetas rojas\'" id ="player-goals"><h1>{{player.tarjetasRojas}}</h1></ion-col>\n        <ion-col col-xs-2 *ngIf = "rankSelected == \'Tarjetas amarillas\'" id ="player-goals"><h1>{{player.tarjetasAmarillas}}</h1></ion-col>\n      </ion-row>\n      <ion-row *ngIf = "(position+1) == players.length" class = "lines"></ion-row>\n    </ion-grid>\n  </ion-scroll>\n  <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll= "true" *ngIf = "navParams.data[0] == \'team\' || navParams.data[0] == \'teamsList\'">\n    <ion-grid (click)="clickPlayer(player.id, player.equipo)" *ngFor = "let player of players; let i = index" class = "player-info-team">\n      <ion-row class = "lines"></ion-row>\n      <ion-row>\n        <ion-col col-xs-1 id="col-player-image">\n            {{player?.dorsal}}\n            <img id = "player-image" src="{{userService.getBaseURLforImages()}}{{player?.fotoJugador}}">\n        </ion-col>\n        <ion-col col-6 id="player-info-titles">\n          <p>Nombre</p>\n          <p>F.Nacimiento</p>\n          <p>Posición</p>\n          <p>Nacionalidad</p>\n        </ion-col>\n        <ion-col col-xs-5 id ="player-data">\n          <p>{{player?.nombre}} {{player?.apellidos}}</p>\n          <p>{{player?.fechaNacimiento}}</p>\n          <p>{{player?.posicion}}</p>\n          <p>{{player?.nacionalidad}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf = "(i+1) == players.length" class = "lines"></ion-row>\n  </ion-grid>\n  </ion-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\ranks\ranks-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_5__app_services_league_service__["a" /* LeagueService */]])
    ], TabRanks);
    return TabRanks;
}());

//# sourceMappingURL=ranks-tab.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_player_service__ = __webpack_require__(53);
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
            selector: 'page-player',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\player\player.html"*/'<ion-header>\n    <ion-navbar height="20px" color ="transparent">\n      <button ion-button menuToggle id="button-toggle">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n    <ion-row id = "main-info" *ngIf="player != undefined && playerTeam != undefined">\n      <ion-col col-xs-8 class ="col-player-image">\n        <img id = "player-image" src="{{userService.getBaseURLforImages()}}{{player?.fotoJugador}}">\n      </ion-col>\n      <ion-col col-xs-1> \n        <h1 id = "player-number">{{player?.dorsal}}</h1>\n      </ion-col>\n      <ion-col col-xs-3 id ="player-team">\n        <strong>{{playerTeam?.nombre}}</strong>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="player != undefined && playerTeam != undefined">\n      <ion-col col-xs-12 id = "player-name">\n          <h2 id = "player-name-text">{{player?.nombre}}    {{player?.apellidos}}</h2>\n      </ion-col>\n    </ion-row>\n</ion-header>\n\n<ion-content padding >\n  <ion-list>\n    <ion-item>\n      <ion-row>\n        <ion-col class = "name-player-atribute">\n            Posición\n        </ion-col>\n        <ion-col class = "player-atribute">\n            <strong>{{player?.posicion}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n        <ion-row>\n          <ion-col class = "name-player-atribute">\n            Nacionalidad\n          </ion-col>\n          <ion-col class = "player-atribute">\n            <strong>{{player?.nacionalidad}}</strong>\n          </ion-col>\n        </ion-row>\n    </ion-item>\n    <ion-item>\n        <ion-row>\n          <ion-col class = "name-player-atribute">\n            Fecha Nacimiento\n          </ion-col>\n          <ion-col class = "player-atribute">\n            <strong>{{player?.fechaNacimiento}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    <ion-item>\n        <ion-row>\n          <ion-col class = "name-player-atribute">\n            Goles\n          </ion-col>\n          <ion-col class = "player-atribute">\n            <strong>{{player?.goles}}</strong>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col class = "name-player-atribute">\n            Tarjetas Amarillas \n        </ion-col>\n        <ion-col class = "player-atribute">\n            <strong>{{player?.tarjetasAmarillas}}</strong>\n        </ion-col>\n      </ion-row>          \n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col class = "name-player-atribute">\n          Tarjetas Rojas\n        </ion-col>\n        <ion-col class = "player-atribute">\n          <strong>{{player?.tarjetasRojas}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\player\player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_services_player_service__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_4__app_services_user_service__["a" /* UserService */]])
    ], PlayerPage);
    return PlayerPage;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_login_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_player_service__ = __webpack_require__(53);
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
            message: "Introduzca su email:",
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
        }, 2000);
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

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_tabs_home_tabs__ = __webpack_require__(54);
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

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanctionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_sanction_service__ = __webpack_require__(92);
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

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_tabs_home_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sanction_sanction__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_charts__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_sanction_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_player_service__ = __webpack_require__(53);
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
    function ProfilePage(navCtrl, navParams, userService, events, sanctionService, alertCtrl, modalController, playerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.events = events;
        this.sanctionService = sanctionService;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.playerService = playerService;
        this.newPasswordMatches = false;
        this.selection = "one";
        this.header = 127;
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
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Cambio de contraseña",
            inputs: [
                {
                    name: "oldPassword",
                    placeholder: "Contraseña antigua"
                },
                {
                    name: "newPassword",
                    placeholder: "Nueva contraseña"
                },
                {
                    name: "passwordConfirm",
                    placeholder: "Confirmar contraseña nueva"
                }
            ],
            buttons: [
                {
                    text: "Cancelar",
                    role: "cancel"
                },
                {
                    text: "Confirmar",
                    handler: function (data) {
                        if (data.newPassword === data.passwordConfirm && data.newPassword.length > 0) {
                            _this.playerService.changePassword(_this.userService.getUserLogged().id, data.newPassword).subscribe(function (response) { return response; }, function (error) {
                                var alertNotFound = _this.alertCtrl.create({
                                    title: "Error cambio contraseña",
                                    message: "El cambio de contraseña no podido realizarse",
                                    buttons: [
                                        {
                                            text: "Cerrar",
                                            role: "cancel"
                                        }
                                    ]
                                });
                                alertNotFound.present();
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
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
    ProfilePage.prototype.showCharts = function () {
        var modalCharts;
        modalCharts = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__charts_charts__["a" /* ChartsPage */]);
        modalCharts.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], ProfilePage.prototype, "content", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar height="20px" color="header">\n\n    <button ion-button menuToggle id="button-toggle">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Mi perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n  <elastic-header [scrollArea]="component" [headerHeight]="header">\n\n    <img id="profile-image" src="{{userService.getBaseURLforImages()}}{{userService.getUserLogged()?.fotoJugador}}" imageViewer/>\n\n  </elastic-header>\n\n\n\n  <ion-toolbar color="header" mode="md" id="toolbar-options">\n\n    <ion-segment color="underline" mode="md" [(ngModel)]="selection">\n\n      <ion-segment-button (click)="clickButton(\'one\')" class="text-on-botton" value="one">\n\n        <ion-icon name="home"></ion-icon>\n\n        Perfil\n\n      </ion-segment-button>\n\n      <ion-segment-button (click)="clickButton(\'two\')" class="text-on-botton" value="two">\n\n        <ion-icon name="chatbubbles"></ion-icon>\n\n        Sanciones\n\n      </ion-segment-button>\n\n      <ion-segment-button (click)="clickButton(\'three\')" class="text-on-botton" value="three">\n\n        <ion-icon name="cog"></ion-icon>\n\n        Ajustes\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen #component [ngSwitch]="selection">\n\n  <ion-item no-lines *ngSwitchCase="\'one\'">\n\n    <ion-item id="team-image-container" (click)="goTeam()">\n\n      <img id="user-team-image" src="{{userService.getBaseURLforImages()}}shield.png">\n\n      <h1 id="user-team-name">{{userService.getUserTeam()?.nombre}}</h1>\n\n    </ion-item>\n\n    <ion-row>\n\n      <ion-col>\n\n        Dorsal\n\n      </ion-col>\n\n      <ion-col class="info-content">\n\n        <strong>{{userService.getUserLogged().dorsal}}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row lines>\n\n      <ion-col>\n\n        Goles\n\n      </ion-col>\n\n      <ion-col class="info-content">\n\n        <strong>{{userService.getUserLogged().goles}}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        Tartejas Amarillas\n\n      </ion-col>\n\n      <ion-col class="info-content">\n\n        <strong>{{userService.getUserLogged()?.tarjetasAmarillas}}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        Tarjetas Rojas\n\n      </ion-col>\n\n      <ion-col class="info-content">\n\n        <strong>{{userService.getUserLogged()?.tarjetasRojas}}</strong>\n\n      </ion-col>\n\n    </ion-row>\n\n    <div id = "charts-button">\n\n      <button ion-button (click) = "showCharts()">Ver historico</button>\n\n    </div>\n\n    <h2 *ngIf="userService.getActiveSanctions() != undefined || userService.getActiveSanctions() != null">Sanciones activas:</h2>\n\n    <ion-card (click)="viewSanction(sanction.id)" *ngFor="let sanction of userService.getActiveSanctions()" id="sanctions-card">\n\n      <ion-card-content>\n\n        <ion-row>\n\n          <ion-col class="card-titles">Fecha de sanción</ion-col>\n\n          <ion-col class="card-info">{{sanction?.inicioSancion}}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col class="card-titles">Partidos restantes: </ion-col>\n\n          <ion-col class="card-info">{{sanction.partidosRestantes}}</ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-item>\n\n\n\n  <ion-item no-lines *ngSwitchCase="\'two\'">\n\n    <ion-spinner class="spinner" *ngIf="playerSanctions == null && !noSanctions" color="ligth"></ion-spinner>\n\n    <p id="no-sanctions" *ngIf="noSanctions">No has recibido ninguna sanción.</p>\n\n    <ion-card (click)="viewSanction(sanction.id)" *ngFor="let sanction of playerSanctions" id="sanctions-card" [class.spired]="sanction?.partidosRestantes == 0">\n\n      <ion-card-content>\n\n        <ion-row>\n\n          <ion-col class="card-titles">Fecha de sanción</ion-col>\n\n          <ion-col class="card-info">{{sanction?.inicioSancion}}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col class="card-titles">Partidos restantes: </ion-col>\n\n          <ion-col class="card-info">{{sanction.partidosRestantes}}</ion-col>\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-item>\n\n\n\n  <ion-list no-lines *ngSwitchCase="\'three\'">\n\n    <p class="settings-titles">Notificaciones: </p>\n\n    <ion-item class="notifications">\n\n      <ion-label>Nuevas sanciones</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n    </ion-item>\n\n    <ion-item class="notifications">\n\n      <ion-label>Fin de sanciones</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n    </ion-item>\n\n    <ion-item class="notifications">\n\n      <ion-label>Resultados de partidos</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n    </ion-item>\n\n\n\n    <button ion-button block outline color="light" id="password-button" (click)="changePassword()">Cambiar contraseña</button>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__app_services_sanction_service__["a" /* SanctionService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__app_services_player_service__["a" /* PlayerService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 197:
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
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/charts/charts.module": [
		901,
		10
	],
	"../pages/home-tabs/Tabs/ranks/ranks-tab.module": [
		903,
		9
	],
	"../pages/home-tabs/Tabs/rounds/tab-rounds.module": [
		904,
		8
	],
	"../pages/home-tabs/home-tabs.module": [
		902,
		7
	],
	"../pages/login/login.module": [
		905,
		6
	],
	"../pages/maps/maps.module": [
		906,
		5
	],
	"../pages/match/match.module": [
		907,
		4
	],
	"../pages/player/player.module": [
		908,
		3
	],
	"../pages/profile/profile.module": [
		911,
		2
	],
	"../pages/sanction/sanction.module": [
		910,
		1
	],
	"../pages/teams/teams.module": [
		909,
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
webpackAsyncContext.id = 241;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__league_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sanction_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enviroments_environment__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(39);
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
            _this.teamService.getPlayerTeamById(response.equipo).subscribe(function (team) {
                if (team != null || team != undefined) {
                    _this.userTeam = team;
                }
                ;
                _this.leagueService.getGroupProfile(team.grupo.idGrupo).subscribe(function (group) { return _this.currentGroup = group; });
                _this.leagueService.getStandings(team.grupo.idGrupo).subscribe(function (group) {
                    _this.userLeague = group;
                    var groupLength = group.length % 2 == 0 ? (group.length * 2) - 1 : group.length * 2;
                    for (var i = 0; i < groupLength; i++) {
                        _this.rounds.push(i + 1);
                    }
                });
            });
            _this.sanctionService.getActivePlayerSanctions(response.id).subscribe(function (sanctions) { return _this.activeSanctions = sanctions; });
        }, function (error) { return console.error(error); });
    };
    UserService.prototype.setleagueGoals = function (goals) {
        this.leagueGoals = goals;
    };
    UserService.prototype.getUserGroup = function () {
        return this.currentGroup;
    };
    UserService.prototype.getLeagueGroups = function () {
        return this.leagueGroups;
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
        this.leagueGoals = null;
        this.activeSanctions = null;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpClient_service__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__team_service__["a" /* TeamService */], __WEBPACK_IMPORTED_MODULE_3__league_service__["a" /* LeagueService */], __WEBPACK_IMPORTED_MODULE_4__sanction_service__["a" /* SanctionService */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enviroments_environment__ = __webpack_require__(373);
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
    HttpClient.prototype.put = function (url, body) {
        return this.http.put((BASE_URL + url), body).map(function (response) {
            return response.json();
        }, function (error) { return console.error(error.json()); });
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

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
//http://footballleaguemanagmentapi.us-west-2.elasticbeanstalk.com
var environment = {
    production: false,
    api: "http://192.168.1.36:8080/",
    imagesUrl: "http://s3.eu-west-2.amazonaws.com/footballleaguemanagmentimages/"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinuteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(39);
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
        return this.http.get(BASE_URL + id).map(function (response) { return response; }, function (error) { return console.error(error); });
    };
    MinuteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpClient_service__["a" /* HttpClient */]])
    ], MinuteService);
    return MinuteService;
}());

//# sourceMappingURL=minute.service.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabStats; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_historicalTeam_service__ = __webpack_require__(128);
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





var TabStats = (function () {
    function TabStats(navCtrl, navParams, historicalTeamService, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.historicalTeamService = historicalTeamService;
        this.userService = userService;
    }
    TabStats.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.historicalTeamService.getTeamHistorials(this.userService.getUserTeam().id).subscribe(function (response) {
            var historials = response;
            if (historials.length > 0) {
                _this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.barCanvas.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: ["2017/2018", "2018/2019", "2019/2020", "2020/2021"],
                        datasets: [{
                                label: 'Nº Goles',
                                data: [historials[0] == null ? 0 : historials[0].equipo.goles, historials[1] == null ? 0 : historials[1].equipo.goles, historials[2] == null ? 0 : historials[2].equipo.goles, historials[3] == null ? 0 : historials[3].equipo.goles],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        legend: {
                            labels: {
                                fontColor: 'white'
                            }
                        },
                        scales: {
                            xAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                            yAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                        }
                    }
                });
                _this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.barCanvasPoints.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: ["2017/2018", "2018/2019", "2019/2020", "2020/2021"],
                        datasets: [{
                                label: 'Nº Puntos',
                                data: [historials[0] == null ? 0 : historials[0].equipo.puntos, historials[1] == null ? 0 : historials[1].equipo.puntos, historials[2] == null ? 0 : historials[2].equipo.puntos, historials[3] == null ? 0 : historials[3].equipo.puntos],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        legend: {
                            labels: {
                                fontColor: 'white'
                            }
                        },
                        scales: {
                            xAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                            yAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                        }
                    }
                });
                _this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.barCanvasStanding.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: ["2017/2018", "2018/2019", "2019/2020", "2020/2021"],
                        datasets: [{
                                label: 'Posición en la Clasificación',
                                data: [historials[0] == null ? 0 : historials[0].equipo.posicion, historials[1] == null ? 0 : historials[1].equipo.posicion, historials[2] == null ? 0 : historials[2].equipo.posicion, historials[3] == null ? 0 : historials[3].equipo.posicion],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        legend: {
                            labels: {
                                fontColor: 'white'
                            }
                        },
                        scales: {
                            xAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                            yAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                        }
                    }
                });
                _this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.barCanvasConcededGoals.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: ["2017/2018", "2018/2019", "2019/2020", "2020/2021"],
                        datasets: [{
                                label: 'Nº Goles en contra',
                                data: [historials[0] == null ? 0 : historials[0].equipo.golesEncajados, historials[1] == null ? 0 : historials[1].equipo.golesEncajados, historials[2] == null ? 0 : historials[2].equipo.golesEncajados, historials[3] == null ? 0 : historials[3].equipo.golesEncajados],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        legend: {
                            labels: {
                                fontColor: 'white'
                            }
                        },
                        scales: {
                            xAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                            yAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                        }
                    }
                });
                _this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.barCanvasWins.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: ["2017/2018", "2018/2019", "2019/2020", "2020/2021"],
                        datasets: [{
                                label: 'Nº Vistorias',
                                data: [historials[0] == null ? 0 : historials[0].equipo.partidosGanados, historials[1] == null ? 0 : historials[1].equipo.partidosGanados, historials[2] == null ? 0 : historials[2].equipo.partidosGanados, historials[3] == null ? 0 : historials[3].equipo.partidosGanados],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        legend: {
                            labels: {
                                fontColor: 'white'
                            }
                        },
                        scales: {
                            xAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                            yAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                        }
                    }
                });
                _this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.barCanvasTies.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: ["2017/2018", "2018/2019", "2019/2020", "2020/2021"],
                        datasets: [{
                                label: 'Nº Empates',
                                data: [historials[0] == null ? 0 : historials[0].equipo.partidosEmpatados, historials[1] == null ? 0 : historials[1].equipo.partidosEmpatados, historials[2] == null ? 0 : historials[2].equipo.partidosEmpatados, historials[3] == null ? 0 : historials[3].equipo.partidosEmpatados],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        legend: {
                            labels: {
                                fontColor: 'white'
                            }
                        },
                        scales: {
                            xAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                            yAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                        }
                    }
                });
                _this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.barCanvasLoses.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: ["2017/2018", "2018/2019", "2019/2020", "2020/2021"],
                        datasets: [{
                                label: 'Nº Derrotas',
                                data: [historials[0] == null ? 0 : historials[0].equipo.partidosPerdidos, historials[1] == null ? 0 : historials[1].equipo.partidosPerdidos, historials[2] == null ? 0 : historials[2].equipo.partidosPerdidos, historials[3] == null ? 0 : historials[3].equipo.partidosPerdidos],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        legend: {
                            labels: {
                                fontColor: 'white'
                            }
                        },
                        scales: {
                            xAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                            yAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                        }
                    }
                });
                _this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](_this.barCanvasPlayed.nativeElement, {
                    type: 'bar',
                    data: {
                        labels: ["2017/2018", "2018/2019", "2019/2020", "2020/2021"],
                        datasets: [{
                                label: 'Nº Partidos jugados',
                                data: [historials[0] == null ? 0 : historials[0].equipo.partidosJugados, historials[1] == null ? 0 : historials[1].equipo.partidosJugados, historials[2] == null ? 0 : historials[2].equipo.partidosJugados, historials[3] == null ? 0 : historials[3].equipo.partidosJugados],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        legend: {
                            labels: {
                                fontColor: 'white'
                            }
                        },
                        scales: {
                            xAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                            yAxes: [{
                                    ticks: {
                                        fontColor: 'white'
                                    }
                                }],
                        }
                    }
                });
            } //if
        } //response
        );
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('goals'),
        __metadata("design:type", Object)
    ], TabStats.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('points'),
        __metadata("design:type", Object)
    ], TabStats.prototype, "barCanvasPoints", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('wins'),
        __metadata("design:type", Object)
    ], TabStats.prototype, "barCanvasWins", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('concededGoals'),
        __metadata("design:type", Object)
    ], TabStats.prototype, "barCanvasConcededGoals", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('ties'),
        __metadata("design:type", Object)
    ], TabStats.prototype, "barCanvasTies", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('loses'),
        __metadata("design:type", Object)
    ], TabStats.prototype, "barCanvasLoses", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('played'),
        __metadata("design:type", Object)
    ], TabStats.prototype, "barCanvasPlayed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('standing'),
        __metadata("design:type", Object)
    ], TabStats.prototype, "barCanvasStanding", void 0);
    TabStats = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stats',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\stats\stats.html"*/'<ion-content>\n      <ion-scroll style="width:100%;height:100vh" scrollY="true" hideScroll="true">\n            <h1 class="hist-titles">Historial de clasificaciones</h1>\n            <canvas #standing></canvas>\n            <h3 class="hist-titles">Historial de historial de puntos obtenidos</h3>\n            <canvas #points></canvas>\n            <h3 class="hist-titles">Historial de goles</h3>\n            <canvas #goals></canvas>\n            <h3 class="hist-titles">Historial de goles encajados</h3>\n            <canvas #concededGoals></canvas>\n            <h3 class="hist-titles">Historial de partidos ganados</h3>\n            <canvas #wins></canvas>\n            <h3 class="hist-titles">Historial de partidos perdidos</h3>\n            <canvas #loses></canvas>\n            <h3 class="hist-titles">Historial de partidos empatados</h3>\n            <canvas #ties></canvas>\n            <h3 class="hist-titles">Historial de partidos jugados</h3>\n            <canvas #played></canvas>\n      </ion-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\Tabs\stats\stats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_services_historicalTeam_service__["a" /* HistoricalTeamService */], __WEBPACK_IMPORTED_MODULE_4__app_services_user_service__["a" /* UserService */]])
    ], TabStats);
    return TabStats;
}());

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(39);
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(525);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic2_super_tabs__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_img_viewer__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_app_services_player_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_app_services_login_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_app_services_httpClient_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_app_services_team_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_app_services_match_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_app_services_league_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_app_services_sanction_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_services_minute_service__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_services_historicalTeam_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_elastic_header_elastic_header__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_tabs_home_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_tabs_Tabs_standings_standings__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_home_tabs_Tabs_rounds_tab_rounds__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_home_tabs_Tabs_ranks_ranks_tab__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_player_player__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_match_match__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_teams_teams__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_sanction_sanction__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_profile_profile__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_home_tabs_Tabs_stats_stats__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_maps_maps__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_charts_charts__ = __webpack_require__(176);
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
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_tabs_Tabs_standings_standings__["a" /* TabStandings */],
                __WEBPACK_IMPORTED_MODULE_24__pages_home_tabs_Tabs_rounds_tab_rounds__["a" /* TabRounds */],
                __WEBPACK_IMPORTED_MODULE_25__pages_home_tabs_Tabs_ranks_ranks_tab__["a" /* TabRanks */],
                __WEBPACK_IMPORTED_MODULE_26__pages_player_player__["a" /* PlayerPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_sanction_sanction__["a" /* SanctionPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_tabs_Tabs_stats_stats__["a" /* TabStats */],
                __WEBPACK_IMPORTED_MODULE_33__pages_charts_charts__["a" /* ChartsPage */],
                __WEBPACK_IMPORTED_MODULE_20__components_elastic_header_elastic_header__["a" /* ElasticHeader */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/charts/charts.module#ChartsPageModule', name: 'ChartsPage', segment: 'charts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tabs/home-tabs.module#HomeTabsPageModule', name: 'HomeTabsPage', segment: 'home-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tabs/Tabs/ranks/ranks-tab.module#LeagueTabPageModule', name: 'TabRanks', segment: 'ranks-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tabs/Tabs/rounds/tab-rounds.module#TabTeamPageModule', name: 'TabRounds', segment: 'tab-rounds', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maps/maps.module#MapsPageModule', name: 'MapsPage', segment: 'maps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match/match.module#MatchPageModule', name: 'MatchPage', segment: 'match', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/player/player.module#PlayerPageModule', name: 'PlayerPage', segment: 'player', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teams/teams.module#TeamsPageModule', name: 'TeamsPage', segment: 'teams', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sanction/sanction.module#SanctionPageModule', name: 'SanctionPage', segment: 'sanction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_tabs_Tabs_standings_standings__["a" /* TabStandings */],
                __WEBPACK_IMPORTED_MODULE_24__pages_home_tabs_Tabs_rounds_tab_rounds__["a" /* TabRounds */],
                __WEBPACK_IMPORTED_MODULE_25__pages_home_tabs_Tabs_ranks_ranks_tab__["a" /* TabRanks */],
                __WEBPACK_IMPORTED_MODULE_26__pages_player_player__["a" /* PlayerPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_20__components_elastic_header_elastic_header__["a" /* ElasticHeader */],
                __WEBPACK_IMPORTED_MODULE_29__pages_sanction_sanction__["a" /* SanctionPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_tabs_Tabs_stats_stats__["a" /* TabStats */],
                __WEBPACK_IMPORTED_MODULE_33__pages_charts_charts__["a" /* ChartsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_maps_maps__["a" /* MapsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__src_app_services_player_service__["a" /* PlayerService */],
                __WEBPACK_IMPORTED_MODULE_17__app_services_minute_service__["a" /* MinuteService */],
                __WEBPACK_IMPORTED_MODULE_10__src_app_services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_16__src_app_services_sanction_service__["a" /* SanctionService */],
                __WEBPACK_IMPORTED_MODULE_18__app_services_historicalTeam_service__["a" /* HistoricalTeamService */],
                __WEBPACK_IMPORTED_MODULE_12__src_app_services_team_service__["a" /* TeamService */],
                __WEBPACK_IMPORTED_MODULE_13__src_app_services_match_service__["a" /* MatchService */],
                __WEBPACK_IMPORTED_MODULE_11__src_app_services_httpClient_service__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_14__src_app_services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_15__src_app_services_league_service__["a" /* LeagueService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(39);
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
    PlayerService.prototype.changePassword = function (id, password) {
        return this.http.put((BASE_URL + "clave/" + id), password).map(function (response) { return response; }, function (error) { return console.error(error); });
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

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tabs_standings_standings__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tabs_rounds_tab_rounds__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Tabs_ranks_ranks_tab__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Tabs_stats_stats__ = __webpack_require__(471);
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
                this.rootParams = ["league"];
                this.titles = ["Clasificación", "Calendario", "Rankings"];
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
            selector: 'page-home-tabs',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\home-tabs.html"*/'<ion-header>\n    <ion-navbar height="20px" color="header">\n      <button ion-button menuToggle id="button-toggle">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n        {{this.navParams.get(\'id\')[0] != \'league\' ? headerTitle : \'Liga \' + userService.getUserTeam()?.liga + " - " + this.userService.getUserTeam()?.grupo.nombre}}\n      </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="false">\n  <ion-tabs id = "tabbar" height="100%" swipeEnable ="false" color="header" tabsPlacement = "top">\n    <ion-tab *ngFor ="let tab of tabs" [root]="tab.root" [rootParams] = "tab.rootParams" [tabTitle]="tab.title" [tabIcon] = "tab.icon"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\home-tabs\home-tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__app_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__app_services_team_service__["a" /* TeamService */]])
    ], HomeTabsPage);
    return HomeTabsPage;
}());

//# sourceMappingURL=home-tabs.js.map

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 249,
	"./af.js": 249,
	"./ar": 250,
	"./ar-dz": 251,
	"./ar-dz.js": 251,
	"./ar-kw": 252,
	"./ar-kw.js": 252,
	"./ar-ly": 253,
	"./ar-ly.js": 253,
	"./ar-ma": 254,
	"./ar-ma.js": 254,
	"./ar-sa": 255,
	"./ar-sa.js": 255,
	"./ar-tn": 256,
	"./ar-tn.js": 256,
	"./ar.js": 250,
	"./az": 257,
	"./az.js": 257,
	"./be": 258,
	"./be.js": 258,
	"./bg": 259,
	"./bg.js": 259,
	"./bm": 260,
	"./bm.js": 260,
	"./bn": 261,
	"./bn.js": 261,
	"./bo": 262,
	"./bo.js": 262,
	"./br": 263,
	"./br.js": 263,
	"./bs": 264,
	"./bs.js": 264,
	"./ca": 265,
	"./ca.js": 265,
	"./cs": 266,
	"./cs.js": 266,
	"./cv": 267,
	"./cv.js": 267,
	"./cy": 268,
	"./cy.js": 268,
	"./da": 269,
	"./da.js": 269,
	"./de": 270,
	"./de-at": 271,
	"./de-at.js": 271,
	"./de-ch": 272,
	"./de-ch.js": 272,
	"./de.js": 270,
	"./dv": 273,
	"./dv.js": 273,
	"./el": 274,
	"./el.js": 274,
	"./en-au": 275,
	"./en-au.js": 275,
	"./en-ca": 276,
	"./en-ca.js": 276,
	"./en-gb": 277,
	"./en-gb.js": 277,
	"./en-ie": 278,
	"./en-ie.js": 278,
	"./en-il": 279,
	"./en-il.js": 279,
	"./en-nz": 280,
	"./en-nz.js": 280,
	"./eo": 281,
	"./eo.js": 281,
	"./es": 282,
	"./es-do": 283,
	"./es-do.js": 283,
	"./es-us": 284,
	"./es-us.js": 284,
	"./es.js": 282,
	"./et": 285,
	"./et.js": 285,
	"./eu": 286,
	"./eu.js": 286,
	"./fa": 287,
	"./fa.js": 287,
	"./fi": 288,
	"./fi.js": 288,
	"./fo": 289,
	"./fo.js": 289,
	"./fr": 290,
	"./fr-ca": 291,
	"./fr-ca.js": 291,
	"./fr-ch": 292,
	"./fr-ch.js": 292,
	"./fr.js": 290,
	"./fy": 293,
	"./fy.js": 293,
	"./gd": 294,
	"./gd.js": 294,
	"./gl": 295,
	"./gl.js": 295,
	"./gom-latn": 296,
	"./gom-latn.js": 296,
	"./gu": 297,
	"./gu.js": 297,
	"./he": 298,
	"./he.js": 298,
	"./hi": 299,
	"./hi.js": 299,
	"./hr": 300,
	"./hr.js": 300,
	"./hu": 301,
	"./hu.js": 301,
	"./hy-am": 302,
	"./hy-am.js": 302,
	"./id": 303,
	"./id.js": 303,
	"./is": 304,
	"./is.js": 304,
	"./it": 305,
	"./it.js": 305,
	"./ja": 306,
	"./ja.js": 306,
	"./jv": 307,
	"./jv.js": 307,
	"./ka": 308,
	"./ka.js": 308,
	"./kk": 309,
	"./kk.js": 309,
	"./km": 310,
	"./km.js": 310,
	"./kn": 311,
	"./kn.js": 311,
	"./ko": 312,
	"./ko.js": 312,
	"./ky": 313,
	"./ky.js": 313,
	"./lb": 314,
	"./lb.js": 314,
	"./lo": 315,
	"./lo.js": 315,
	"./lt": 316,
	"./lt.js": 316,
	"./lv": 317,
	"./lv.js": 317,
	"./me": 318,
	"./me.js": 318,
	"./mi": 319,
	"./mi.js": 319,
	"./mk": 320,
	"./mk.js": 320,
	"./ml": 321,
	"./ml.js": 321,
	"./mn": 322,
	"./mn.js": 322,
	"./mr": 323,
	"./mr.js": 323,
	"./ms": 324,
	"./ms-my": 325,
	"./ms-my.js": 325,
	"./ms.js": 324,
	"./mt": 326,
	"./mt.js": 326,
	"./my": 327,
	"./my.js": 327,
	"./nb": 328,
	"./nb.js": 328,
	"./ne": 329,
	"./ne.js": 329,
	"./nl": 330,
	"./nl-be": 331,
	"./nl-be.js": 331,
	"./nl.js": 330,
	"./nn": 332,
	"./nn.js": 332,
	"./pa-in": 333,
	"./pa-in.js": 333,
	"./pl": 334,
	"./pl.js": 334,
	"./pt": 335,
	"./pt-br": 336,
	"./pt-br.js": 336,
	"./pt.js": 335,
	"./ro": 337,
	"./ro.js": 337,
	"./ru": 338,
	"./ru.js": 338,
	"./sd": 339,
	"./sd.js": 339,
	"./se": 340,
	"./se.js": 340,
	"./si": 341,
	"./si.js": 341,
	"./sk": 342,
	"./sk.js": 342,
	"./sl": 343,
	"./sl.js": 343,
	"./sq": 344,
	"./sq.js": 344,
	"./sr": 345,
	"./sr-cyrl": 346,
	"./sr-cyrl.js": 346,
	"./sr.js": 345,
	"./ss": 347,
	"./ss.js": 347,
	"./sv": 348,
	"./sv.js": 348,
	"./sw": 349,
	"./sw.js": 349,
	"./ta": 350,
	"./ta.js": 350,
	"./te": 351,
	"./te.js": 351,
	"./tet": 352,
	"./tet.js": 352,
	"./tg": 353,
	"./tg.js": 353,
	"./th": 354,
	"./th.js": 354,
	"./tl-ph": 355,
	"./tl-ph.js": 355,
	"./tlh": 356,
	"./tlh.js": 356,
	"./tr": 357,
	"./tr.js": 357,
	"./tzl": 358,
	"./tzl.js": 358,
	"./tzm": 359,
	"./tzm-latn": 360,
	"./tzm-latn.js": 360,
	"./tzm.js": 359,
	"./ug-cn": 361,
	"./ug-cn.js": 361,
	"./uk": 362,
	"./uk.js": 362,
	"./ur": 363,
	"./ur.js": 363,
	"./uz": 364,
	"./uz-latn": 365,
	"./uz-latn.js": 365,
	"./uz.js": 364,
	"./vi": 366,
	"./vi.js": 366,
	"./x-pseudo": 367,
	"./x-pseudo.js": 367,
	"./yo": 368,
	"./yo.js": 368,
	"./zh-cn": 369,
	"./zh-cn.js": 369,
	"./zh-hk": 370,
	"./zh-hk.js": 370,
	"./zh-tw": 371,
	"./zh-tw.js": 371
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
webpackContext.id = 572;

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_tabs_Tabs_standings_standings__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_tabs_home_tabs__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_teams_teams__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_services_user_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_login_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_player_service__ = __webpack_require__(53);
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\app\app.html"*/'<ion-menu [content]="content" *ngIf="userService.getUserLogged()?.fotoJugador!= undefined">\n  <ion-header no-shadow no-border class = "app-header">\n    <div class ="app-background-header"></div>\n   <div class = "div-image" ><img id = "menu-profile-image" src="{{userService.getBaseURLforImages()}}{{userService.getUserLogged()?.fotoJugador}}"></div>\n  </ion-header>\n\n  <ion-content>\n    <ion-row><ion-col class= "menu-titles">MI EQUIPO</ion-col></ion-row>\n    <button class = "menu-options" [class.menu-option-selected] = "myTeam.rootParams[0] === menuOptionSelected" no-lines ion-item menuClose (click)= "navigateTo(myTeam.component, myTeam.rootParams)">\n      <p class = "menu-button-titles" >{{userService.getUserTeam()?.nombre}}</p>\n      <ion-icon class = "menu-icons" item-left name= "{{myTeam.icon}}"></ion-icon>\n    </button>\n    <ion-row><ion-col class= "menu-titles">INFORMACIÓN</ion-col></ion-row>\n    <ion-list no-lines>\n      <button class = "menu-options" [class.menu-option-selected] = "page.rootParams[0] === menuOptionSelected" *ngFor = "let page of menuPages" menuClose ion-item (click)="navigateTo(page.component, page.rootParams)">\n        <p class = "menu-button-titles">{{page.title}}</p>\n        <ion-icon class = "menu-icons" item-left name= "{{page.icon}}"></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__app_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_10__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 900:
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

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanctionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpClient_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(39);
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

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsPage = (function () {
    function MapsPage(navCtrl, navParams, viewController, alertCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.notMap = false;
    }
    MapsPage.prototype.ionViewDidLoad = function () {
        if (this.navParams.get('latitude') == undefined || this.navParams.get('longitude') == undefined) {
            this.notMap = true;
        }
        else {
            this.destination = new google.maps.LatLng(this.navParams.get('longitude'), this.navParams.get('latitude'));
            this.initMap();
            this.startNavigating();
        }
    };
    MapsPage.prototype.initMap = function () {
        var mapOptions = {
            center: this.destination,
            zoom: 17,
            marker: this.destination,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            position: this.destination,
            map: this.map
        });
        marker.setMap(this.map);
    };
    MapsPage.prototype.startNavigating = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            directionsDisplay.setMap(_this.map);
            directionsDisplay.setPanel(_this.directionsPanel.nativeElement);
            var currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            directionsService.route({
                origin: currentLocation,
                destination: _this.destination,
                travelMode: google.maps.TravelMode['DRIVING']
            }, function (res, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(res);
                }
                else {
                    console.warn(status);
                }
            });
        }, function (error) { return console.error(error.message); });
    };
    MapsPage.prototype.currentLocation = function () {
    };
    MapsPage.prototype.closeModal = function () {
        this.viewController.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", Object)
    ], MapsPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('directionsPanel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapsPage.prototype, "directionsPanel", void 0);
    MapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maps',template:/*ion-inline-start:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\maps\maps.html"*/'\n<ion-header>\n\n    <ion-navbar color="header">\n      <ion-title>Google maps</ion-title>\n      <ion-buttons end>\n          <button id= "close-modal-button" ion-button (click)= "closeModal()">Cerrar</button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content>\n\n  <ion-card *ngIf = "!notMap">\n      <ion-card-content>\n          <div #directionsPanel></div>\n      </ion-card-content>\n  </ion-card>\n  <div #map *ngIf = "!notMap" id = "map">\n\n  </div>\n  <ion-col *ngIf = "notMap" id = "notMapMessage">No se ha encontrado nigún estadio.</ion-col>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jorge\Documents\GitHub\APP-FootballPlayers\MobileApp\src\pages\maps\maps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapsPage);
    return MapsPage;
}());

//# sourceMappingURL=maps.js.map

/***/ })

},[520]);
//# sourceMappingURL=main.js.map