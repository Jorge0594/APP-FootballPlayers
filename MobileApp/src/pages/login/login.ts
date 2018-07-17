import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController} from 'ionic-angular';

import { HomeTabsPage } from '../home-tabs/home-tabs';
import { LoginService } from '../../app/services/login.service';
import { UserService } from '../../app/services/user.service';
import { PlayerService } from '../../app/services/player.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private loginError = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuController: MenuController,
     private loginService:LoginService, private userService: UserService, private loadingCtrl: LoadingController,
      private alertCtrl: AlertController, private playerService: PlayerService) {}


  
  goHomePage(username:string, password:string){
    this.loginService.login(username,password).subscribe(
      reponse => {
        this.loginError = false;
        this.presentLoading();
        this.userService.generateUserData();
        this.menuController.enable(true);
      },
      error => this.loginError = true
    );
  }

  presentRecoveryAlert(){
    let alert = this.alertCtrl.create({
      title: "Recuperar usuario y contraseña",
      message: "Introduzca su email:",
      inputs:[
        {
          name:"email",
          placeholder:"Email"
        }
      ],
      buttons:[
        {
          text:"Cancelar",
          role:"cancel",
        },
        {
          text:"Enviar",
          handler: data =>{
            this.playerService.forgottenPassword(data.email).subscribe(
              recovery => {
                this.presentSuccessOrFailAlert(true);
              },
              error => {
                this.presentSuccessOrFailAlert(false);
              }
            );
          }
        }
      ]
    });

    alert.present();
  }

  presentSuccessOrFailAlert(success){
    let menssage:string;
    let title: string;
    if(success){
      title = "Email correcto";
      menssage = "Su usuario y su nueva contraseña han sido enviadas.";
    } else {
      title = "Email incorrecto";
      menssage = "Por favor introduzca su email correctamente.";
    }

    let alert = this.alertCtrl.create({
      title: title,
      message: menssage,
      buttons:[
        {
          text:"OK",
          role: "cancel"
        }
      ]
    });

    alert.present();
  }

  presentLoading(){
    let spinner = this.loadingCtrl.create({
      content: 'Iniciando sesión'
    });

    spinner.present();

    setTimeout(()=>{
      this.navCtrl.setRoot(HomeTabsPage, {id:['league']});
      spinner.dismiss();
    }, 750);

  }

  ionViewDidLoad(){
    this.menuController.enable(false);
  }
}
