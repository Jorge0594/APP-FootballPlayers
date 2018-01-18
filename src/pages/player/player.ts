import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlayerService } from '../../app/services/player.service';
import { TeamService } from '../../app/services/team.service';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  private player: any;
  private playerTeam: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private playerService: PlayerService, private teamService:TeamService) {
    this.teamService.getPlayerTeamById(this.navParams.get('teamId')).subscribe(
      team => this.playerTeam = team
    );

    this.playerService.getPlayerById(this.navParams.get('playerId')).subscribe(
      player => this.player = player
    );
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerPage');
  }

}