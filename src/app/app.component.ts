import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabStandings } from '../pages/home-tabs/Tabs/standings/standings';
import { HomeTabsPage } from '../pages/home-tabs/home-tabs';
import { LoginPage } from '../pages/login/login';

import { PlayerService } from './services/player.service';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = LoginPage; Cambiar cuando pase a produccion
  rootPage:any = HomeTabsPage;
  homePage:any = TabStandings;
  servicePlayer:any = PlayerService;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private loginService:LoginService, private userService: UserService) {
    this.loginService.login("alex","pass").subscribe(
      reponse => {
        this.userService.generateUserData();
      },
      error => console.error(error)
    );
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }
}

