import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { App } from 'ionic-angular';

import { UserService } from '../../../../app/services/user.service';
import { TeamService } from '../../../../app/services/team.service';

import { PlayerPage } from '../../../player/player';


@IonicPage()
@Component({
  selector: 'ranks-tab',
  templateUrl: 'ranks-tab.html',
})
export class TabRanks {

  private rankSelected: string;
  private players: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, private app: App, private teamService: TeamService) {
    this.rankSelected = "goals";

    switch(this.navParams.data[0]){
      case 'league':
        this.players = userService.getTopGoals();
      break;
      case 'team':
        this.players = this.userService.getUserTeam().plantillaEquipo
      break;
      case 'teamsList':
        this.teamService.getPlayerTeamById(this.navParams.data[1]).subscribe(
          team => this.players = team.plantillaEquipo
        );
      break;
    }
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
