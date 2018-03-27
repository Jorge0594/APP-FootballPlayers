import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, LoadingController, AlertController} from 'ionic-angular';
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
  private menuPages: Array<{ title:string, component:any, rootParams:[string], icon:string }>
  private myTeam:{ component:any, rootParams:[string], icon:string }
  private menuOptionSelected: string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private userService: UserService,
    private loginService: LoginService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
      platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.menuOptionSelected = "league";
    this.myTeam = {component: HomeTabsPage, rootParams:['team'], icon:'football'};
    this.menuPages = [
      {title:'LIGA', component: HomeTabsPage, rootParams:['league'], icon:'trophy'},
      {title:'MI PERFIL', component: ProfilePage, rootParams:['profile'], icon:'contact'},
      {title:'EQUIPOS', component: TeamsPage, rootParams: ['teamsList'], icon:'people'},
      {title:'CERRAR SESIÓN', component: LoginPage, rootParams:['logout'], icon:'log-out'}
    ];
  }

  presentLoading(){
    let spinner = this.loadingCtrl.create({
      content: 'Cerrando sesión'
    });

    spinner.present();

    setTimeout(()=>{
      spinner.dismiss();
    }, 1000);
  }

  presentAlert(page){
    let alert = this.alertCtrl.create({
      message: "¿Desea cerrar sesión?",
      buttons: [
        {
          text:"NO",
          role:'cancel',
          handler: ()=>{
            console.log("Cancel log-out");
          }
        },
        {
          text:"SÍ",
          handler: ()=>{
            this.presentLoading();
            this.loginService.logout();
            this.menuOptionSelected = "league";
            this.nav.setRoot(page);
          }
        }
      ]
    });
    alert.present();
  }

  navigateTo(page, rootParams){
    if(rootParams[0]=='logout'){

      this.presentAlert(page);

    } else {

      this.menuOptionSelected = rootParams[0];
      this.nav.setRoot(page, { id:rootParams });
    }
  }
}

