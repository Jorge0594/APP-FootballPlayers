import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { App } from 'ionic-angular';

import { UserService } from '../../../../app/services/user.service';

import { PlayerPage } from '../../../player/player';


@IonicPage()
@Component({
  selector: 'ranks-tab',
  templateUrl: 'ranks-tab.html',
})
export class TabRanks {

  private rankSelected: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, private app: App) {
    this.rankSelected = "goals";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueTabPage');
  }

  clickPlayer(id:string, teamID:string){
    console.log("Id del equipo del jugador es " + teamID);
    this.app.getRootNav().push(PlayerPage, {playerId: id, teamId: teamID });
  }

  selectRank(type:string){
    this.rankSelected = type;
  }
}
