import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { HomeTabsPage } from '../home-tabs/home-tabs';
import { LoginService } from '../../app/services/login.service';
import { UserService } from '../../app/services/user.service'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private loginService:LoginService, private userService: UserService) {}

  goHomePage(username:string, password:string){
    this.loginService.login(username,password).subscribe(
      reponse => {
        this.userService.generateUserData();
        this.navCtrl.setRoot(HomeTabsPage);
      },
      error => console.error(error)
    );
    this.navCtrl.setRoot(HomeTabsPage);
  }
}
