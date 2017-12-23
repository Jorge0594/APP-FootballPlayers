import { MyApp } from '../app/app.component';
import { HomePage } from '../pages/home/home';
import { ErrorHandler} from '@angular/core';
import { Component } from '@angular/core/src/metadata/directives';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { createComponentFactory } from '@angular/core/src/view/refs';
import { createComponentView } from '@angular/core/src/view/view';
import { IonicModule,IonicErrorHandler} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
let component : MyApp;
let fixture : ComponentFixture<MyApp>

describe('Initial test',()=>{
    beforeEach(async()=>{
        TestBed.configureTestingModule({
                declarations:[MyApp],
                providers:[
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

    it('Initialises with a root page of HomePage',()=>{
        expect(component['rootPage']).toBe(HomePage);
    });
});