import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content, AlertController, ModalController} from 'ionic-angular';

import { HomeTabsPage } from '../home-tabs/home-tabs';
import { SanctionPage } from '../sanction/sanction';

import { UserService } from '../../app/services/user.service';
import { SanctionService } from '../../app/services/sanction.service';
import { PlayerService } from '../../app/services/player.service';

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
  private sanctionService: SanctionService, private alertCtrl: AlertController,private modalController: ModalController, private playerService: PlayerService) {
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
    let alert = this.alertCtrl.create({
      title:"Cambio de contraseña",
      inputs: [
        {
          name: "oldPassword",
          placeholder: "Contraseña antigua"
        },
        {
          name: "newPassword",
          placeholder: "Nueva contraseña"
        },
        {
          name:"passwordConfirm",
          placeholder:"Confirmar contraseña nueva"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Confirmar",
          handler: data => {
            if(data.newPassword === data.passwordConfirm && data.newPassword.length > 0){
              this.playerService.changePassword(this.userService.getUserLogged().id, data.newPassword).subscribe(
                response => response,
                error => {
                  let alertNotFound = this.alertCtrl.create({
                    title: "Error cambio contraseña",
                    message: "El cambio de contraseña no podido realizarse",
                    buttons: [
                      {
                        text: "Cerrar",
                        role: "cancel"
                      }
                    ]
                  });
                  alertNotFound.present();
                }
              )
            } 
          }
        }
      ]
    });

    alert.present();
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
