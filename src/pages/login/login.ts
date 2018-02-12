import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController} from 'ionic-angular';

import { HomeTabsPage } from '../home-tabs/home-tabs';
import { LoginService } from '../../app/services/login.service';
import { UserService } from '../../app/services/user.service'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuController: MenuController,
     private loginService:LoginService, private userService: UserService, private loadingCtrl: LoadingController) {}


  
  goHomePage(username:string, password:string){
    this.loginService.login(username,password).subscribe(
      reponse => {
        this.userService.generateUserData();
        this.menuController.enable(true);
        //this.navCtrl.setRoot(HomeTabsPage, {id:['league']});
        this.presentLoading();
      },
      error => console.error(error)
    );
  }

  presentLoading(){
    let spinner = this.loadingCtrl.create({
      content: 'Iniciando sesión'
    });

    spinner.present();

    setTimeout(()=>{
      this.navCtrl.setRoot(HomeTabsPage, {id:['league']});
      spinner.dismiss();
    }, 2500);
  }

  ionViewDidLoad(){
    this.menuController.enable(false);
  }
}
