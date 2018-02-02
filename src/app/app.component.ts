import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabStandings } from '../pages/home-tabs/Tabs/standings/standings';
import { HomeTabsPage } from '../pages/home-tabs/home-tabs';
import { TeamsPage } from '../pages/teams/teams';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';

import { UserService } from '../app/services/user.service';
import { LoginService } from './services/login.service';
import { PlayerService } from './services/player.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = LoginPage;
  homePage:any = TabStandings;
  servicePlayer:any = PlayerService;

  @ViewChild('content')nav: Nav;
  private menuPages: Array<{title:string, component:any, rootParams:[string], icon:string}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private userService: UserService, private loginService: LoginService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.menuPages = [
      {title:'Liga', component: HomeTabsPage, rootParams:['league'], icon:'trophy'},
      {title:'Mi equipo', component: HomeTabsPage, rootParams:['team'], icon:'football'},
      {title:'Mi perfil', component: ProfilePage, rootParams:['profile'], icon:'contact'},
      {title:'Equipos', component: TeamsPage, rootParams: ['teamsList'], icon:'people'},
      {title:'Log-out', component: LoginPage, rootParams:['logout'], icon:'log-out'}
    ];
  }



  navigateTo(page, rootParams){
    if(rootParams[0]=='logout'){
      this.loginService.logout();
    }
    this.nav.setRoot(page, { id:rootParams });
  }
}

