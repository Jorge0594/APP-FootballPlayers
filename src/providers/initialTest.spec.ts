import { MyApp } from '../app/app.component';
import { TabStandings } from '../pages/home-tabs/Tabs/standings/standings';
import { ErrorHandler} from '@angular/core';
import { Http, HttpModule, Headers, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { Component } from '@angular/core/src/metadata/directives';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { createComponentFactory } from '@angular/core/src/view/refs';
import { createComponentView } from '@angular/core/src/view/view';
import { IonicModule,IonicErrorHandler} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { PlayerService } from '../app/services/player.service';
import { LoginService } from '../app/services/login.service';
import { MatchService } from '../app/services/match.service';
import { LeagueService } from '../app/services/league.service';
import { UserService } from '../app/services/user.service';
import { SanctionService } from '../app/services/sanction.service';
import { TeamService } from '../app/services/team.service';
import { HttpClient } from '../app/services/httpClient.service'

let component : MyApp;
let fixture : ComponentFixture<MyApp>

describe('Creations of pages',()=>{
    beforeEach(async()=>{
        TestBed.configureTestingModule({
                declarations:[MyApp],
                providers:[
                    HttpModule,
                    TeamService,
                    PlayerService,
                    LoginService,
                    UserService,
                    SanctionService,
                    LeagueService,
                    MatchService,
                    MockBackend,
                    HttpClient,
                    BaseRequestOptions,
                    {
                        provide: Http,
                        useFactory: (mockBackend, options) => {
                            return new Http(mockBackend, options);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    },
                    StatusBar,
                    SplashScreen,
                    {provide: ErrorHandler, useClass: IonicErrorHandler}
                ],
                imports:[
                    IonicModule.forRoot(MyApp)
                ]
        }).compileComponents();
    });

    beforeEach(()=>{
        fixture = TestBed.createComponent(MyApp);
        component = fixture.componentInstance;
    });

    afterEach(()=>{
        fixture.destroy();
        component = null;
    });

    it('is created',()=>{
        expect(fixture).toBeTruthy();
        expect(component).toBeTruthy();
    });

    it('Initialises HomePage',()=>{
        expect(component['homePage']).toBe(TabStandings);
    });

     it('Initialises with a root page of LoginPage',()=>{
        expect(component.rootPage).toBe(LoginPage);
     });
});