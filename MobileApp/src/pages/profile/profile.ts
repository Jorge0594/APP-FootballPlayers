import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content, AlertController, ModalController} from 'ionic-angular';

import { HomeTabsPage } from '../home-tabs/home-tabs';
import { SanctionPage } from '../sanction/sanction';

import { UserService } from '../../app/services/user.service';
import { SanctionService } from '../../app/services/sanction.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  @ViewChild(Content)content: Content;
  private selection:string;
  private header: number;
  private playerSanctions: any;
  private newPasswordMatches: boolean = false;
  private noSanctions: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, private events: Events,
  private sanctionService: SanctionService, private alertCtrl: AlertController,private modalController: ModalController) {
    this.selection = "one";
    this.header = 150;
    this.noSanctions = false;
  }

  findAllPlayerSanctions(id:string){
    this.sanctionService.getPlayerSanctions(id).subscribe(
      sanctions =>{
        this.playerSanctions = sanctions;
        if(sanctions == null) this.noSanctions = true;
      } 
    );
  }

  clickButton(value:string){
    if(value == "two" && this.playerSanctions == undefined){
      this.findAllPlayerSanctions(this.userService.getUserLogged().id);
    }
    this.resizeHeader();
  }

  goTeam(){
    this.navCtrl.push(HomeTabsPage, {id:[this.navParams.get('id')[0]]});
  }

  changePassword(oldPassword:string, newPassword:string, newPasswordRepeat:string){
    if(newPassword != newPasswordRepeat){
      this.newPasswordMatches = true;
    } else{
      this.presentAlert();
    }
  }

  presentAlert(){
    let alert = this.alertCtrl.create({
      title:"Confirmación de cambio",
      message: "¿Esta seguro de querer cambiar la contraseña?",
      buttons:[
        {
          text:"NO",
          role: "cancel"
        },
        {
          text:"SÍ",
          handler:()=>{
            //metodo de cambio de contraseña
          }
        }
      ]
    });

    alert.present();
    
  }

  resizeHeader(){
    this.content.scrollTo(0, 0, 0);//relocate the content after click in a button
    this.events.publish('resizeHeader');
  }

  viewSanction(id: string){
    let modal = this.modalController.create(SanctionPage, {idSanction:id});
    modal.present();
    //this.navCtrl.push(SanctionPage, {idSanction:id});
  }

  
}
