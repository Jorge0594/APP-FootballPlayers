import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../../../app/services/user.service';


@IonicPage()
@Component({
  selector: 'league-tab',
  templateUrl: 'league-tab.html',
})
export class TabLeague {

  private rankSelected: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService) {
    this.rankSelected = "goals";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueTabPage');
  }

  selectRank(type:string){
    this.rankSelected = type;
  }
}
