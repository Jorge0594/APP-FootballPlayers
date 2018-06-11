import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { App } from 'ionic-angular';

import { UserService } from '../../../../app/services/user.service';
import { TeamService } from '../../../../app/services/team.service';

import { PlayerPage } from '../../../player/player';
import { LeagueService } from '../../../../app/services/league.service';


@IonicPage()
@Component({
  selector: 'ranks-tab',
  templateUrl: 'ranks-tab.html',
})
export class TabRanks {

  private rankSelected: string;
  private players: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, private app: App, private teamService: TeamService, private leagueService: LeagueService) {
    this.rankSelected = "goals";

    switch(this.navParams.data[0]){
      case 'league':
        if(this.userService.getLeagueGoals()){
          this.players = this.userService.getLeagueGoals();
        } else {
          this.leagueService.getTopGoals(this.userService.getUserLogged().liga).subscribe(
            goals => {
              this.players = goals;
              this.userService.setleagueGoals(goals);
            }
          )
        }
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

  clickPlayer(id:string, teamID:string){
    this.app.getRootNav().push(PlayerPage, {playerId: id, teamId: teamID });
  }

  selectRank(type:string){
    this.rankSelected = type;
  }
}
