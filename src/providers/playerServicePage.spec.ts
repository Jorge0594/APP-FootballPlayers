import { MyApp } from '../app/app.component';
import { TabHome } from '../pages/home-tabs/Tabs/home/home';
import { ErrorHandler} from '@angular/core';
import { Http, HttpModule, Headers, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { Component } from '@angular/core/src/metadata/directives';
import { ComponentFixture, TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { createComponentFactory } from '@angular/core/src/view/refs';
import { createComponentView } from '@angular/core/src/view/view';
import { IonicModule,IonicErrorHandler} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { PlayerService } from '../app/services/player.service';

let component : MyApp
let fixture : ComponentFixture<MyApp>

describe('PlayerService',()=>{

    let mockBackend : MockBackend;
    beforeEach(async()=>{
        TestBed.configureTestingModule({
            declarations:[MyApp],
            providers:[
                HttpModule,
                PlayerService,
                MockBackend,
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
                HttpModule,
                IonicModule.forRoot(MyApp)
            ]
        }).compileComponents();

        mockBackend = getTestBed().get(MockBackend);
    });

    beforeEach(()=>{
        fixture = TestBed.createComponent(MyApp);
        component = fixture.componentInstance;
    });

    afterEach(()=>{
        fixture.destroy();
        component = null;
    });

    it ('Displays player service to the user',()=>{
        expect(component ['servicePlayer']).toBe(PlayerService);
    });

    it('should have none empty array called of players', async(inject([PlayerService],(service: PlayerService)=>{
        const mockResponse =  '{"players":[{"id": "5a0b55e4f130632608753d9a","nombre": "Jorge", "apellidos": "Sanchez Marquez","edad": 0,"aceptado": false,"dni": "54551835K","nombreUsuario": "jorge","email": "jorge@gmail.com","fotoJugador": "profilejorge.jpg","equipo": "","posicion": "Centrocampista","fechaSancion": "","estado": "Titular","nacionalidad": "Española","dorsal": 0,"goles": 0,"tarjetasAmarillas": 0,"tarjetasRojas": 0,"capitan": true}]}';

        /*mock.connections.subscribe((connection) =>{
            connection.mockResponse(new Response(new ResponseOptions({
                body: mockResponse
            })));
        });*/

        mockBackend.connections.subscribe((connection: MockConnection) => {
            connection.mockRespond(new Response(new ResponseOptions({
                body:[
                    {
                        id: "5a0b55e4f130632608753d9a",
                        nombre: "Jorge"
                    },
                    {
                        id: "5a0b55e4f130632608753d9a",
                        nombre: "Paco"
                    }
                ]
            })));
        });

        service.loadPlayers();
        console.log(service.getPlayer());
        console.log(service.getPlayer().length);
        expect(Array.isArray(service.getPlayer())).toBeTruthy();
        expect(service.getPlayer().length).toBeGreaterThan(0);

    })));

    
});
