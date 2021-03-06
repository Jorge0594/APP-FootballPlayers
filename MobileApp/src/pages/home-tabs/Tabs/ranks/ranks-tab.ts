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
  private rankTypes: any;
  private players: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, private app: App, private teamService: TeamService, private leagueService: LeagueService) {
    this.rankSelected = "Goleadores";
    this.rankTypes = [
      { type: "Goleadores", icon: "football" },
      { type: "Porteros", icon: "icon-goalkeeperIcon" },
      { type: "Tarjetas rojas", icon: "icon-redcard" },
      { type: "Tarjetas amarillas", icon: "icon-yellowcard" },
    ];

    switch (this.navParams.data[0]) {
      case 'league':
        if (this.userService.getLeagueGoals()) {
          this.players = this.userService.getLeagueGoals();
        } else {
          this.getRanks();
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

  clickPlayer(id: string, teamID: string) {
    this.app.getRootNavs()[0].push(PlayerPage, { playerId: id, teamId: teamID });
  }

  rankInfo(rank: string) {
    this.rankSelected = rank;
    this.players = null;
    this.getRanks();
  }

  getRanks() {
    let selection = this.rankSelected.replace(" ", "");
    switch (selection) {
      case "Goleadores":
        this.leagueService.getTopGoals(this.userService.getUserLogged().grupo.idGrupo).subscribe(
          response => this.players = response
        )
        break;
      case "Porteros":
        this.leagueService.getTopGoalkeepers(this.userService.getUserLogged().grupo.idGrupo).subscribe(
          response => this.players = response
        )
        break;
      case "Tarjetasrojas":
        this.leagueService.getTopRedCards(this.userService.getUserLogged().grupo.idGrupo).subscribe(
          response => this.players = response
        )
        break;
      case "Tarjetasamarillas":
        this.leagueService.getTopYellowCards(this.userService.getUserLogged().grupo.idGrupo).subscribe(
          response => this.players = response
        )
        break;
    }
  }
}
