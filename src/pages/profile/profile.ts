import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content} from 'ionic-angular';

import { HomeTabsPage } from '../home-tabs/home-tabs';

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
  private clickImage: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, private events: Events,
  private sanctionService: SanctionService) {
    this.selection = "one";
    this.header = 150;
  }

  findAllPlayerSanctions(id:string){
    console.log("Entro aqui")
    this.sanctionService.getPlayerSanctions(id).subscribe(
      sanctions => {this.playerSanctions = sanctions; console.log(this.playerSanctions)}
    );
  }

  clickButton(value:string){
    if(value == "two"){
      this.findAllPlayerSanctions(this.userService.getUserLogged().id);
    }
    this.resizeHeader();
  }

  goTeam(){
    this.navCtrl.push(HomeTabsPage, {id:[this.navParams.get('id')[0]]});
  }

  resizeHeader(){
    this.content.scrollTo(0, 0, 0);//relocate the content after click in a button
    this.events.publish('resizeHeader');
  }
  
}
