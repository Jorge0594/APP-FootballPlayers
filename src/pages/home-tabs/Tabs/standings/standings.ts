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

  userMatches: any;
  team: any;
  constructor(public navCtrl: NavController, private navParams :NavParams, private http:HttpClient, private userService: UserService, private teamService: TeamService) {
    if(this.navParams.data[0] == 'team'){
        this.team = userService.getUserTeam();
    } else if (this.navParams.data[0] == 'teamsList'){
        this.teamService.getPlayerTeamById(this.navParams.data[1]).subscribe(
          team => this.team = team
        );
    }
  }
}


