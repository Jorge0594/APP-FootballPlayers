import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '../../../../app/services/httpClient.service'
import { LoginService } from '../../../../app/services/login.service';
import { MatchService } from '../../../../app/services/match.service';
import { UserService } from  '../../../../app/services/user.service';
import { TeamService } from '../../../../app/services/team.service';

@Component({
  selector: 'page-home',
  templateUrl:'standings.html'
})
export class TabStandings {

  private userMatches: any;
  private team: any;
  private capitain: any;//player

  constructor(public navCtrl: NavController, private navParams :NavParams, private http:HttpClient, private userService: UserService, private teamService: TeamService) {
    if(this.navParams.data[0] == 'team'){
        this.team = userService.getUserTeam();
        for(let player of this.team.plantillaEquipo){
          if(player.capitan){
            this.capitain = player;
          }
        }
    } else if (this.navParams.data[0] == 'teamsList'){
        this.teamService.getPlayerTeamById(this.navParams.data[1]).subscribe(
          team =>{
            this.team = team;
            for(let player of team.plantillaEquipo){
              if(player.capitan){
                this.capitain = player;
              }
            }
          }
        );
    }
  }

  
}


