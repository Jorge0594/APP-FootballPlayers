import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabStandings } from '../pages/home-tabs/Tabs/standings/standings';
import { HomeTabsPage } from '../pages/home-tabs/home-tabs';
import { LoginPage } from '../pages/login/login';

import { UserService } from '../app/services/user.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = LoginPage;
  homePage:any = TabStandings;

  @ViewChild('content')nav: Nav;
  private menuPages: Array<{title:string, component:any, icon:string}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private userService: UserService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.menuPages = [
      {title:'Liga', component: HomeTabsPage, icon:'trophy'}
    ];
  }



  navigateTo(page){
    this.nav.setRoot(page);
  }
}

