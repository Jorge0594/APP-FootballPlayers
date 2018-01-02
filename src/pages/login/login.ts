import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomeTabsPage } from '../home-tabs/home-tabs';
import { LoginService } from '../../app/services/login.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService:LoginService) {
  }

  ionViewDidLoad() {
    
  }

  goHomePage(username:string, password:string){
    this.loginService.login(username,password).subscribe(
      reponse => {
        this.navCtrl.push(HomeTabsPage);
      },
      error => console.error(error)
    );
  }

}
