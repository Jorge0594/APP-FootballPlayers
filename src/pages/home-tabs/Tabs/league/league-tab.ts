import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { App } from 'ionic-angular';

import { UserService } from '../../../../app/services/user.service';

import { PlayerPage } from '../../../player/player';


@IonicPage()
@Component({
  selector: 'league-tab',
  templateUrl: 'league-tab.html',
})
export class TabLeague {

  private rankSelected: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, private app: App) {
    this.rankSelected = "goals";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueTabPage');
  }

  clickPlayer(id:string){
    this.app.getRootNav().push(PlayerPage, {playerId: id});
  }

  selectRank(type:string){
    this.rankSelected = type;
  }
}
