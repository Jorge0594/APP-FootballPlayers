import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { App } from 'ionic-angular';

import { UserService } from '../../../../app/services/user.service';
import { MatchService } from '../../../../app/services/match.service';

import { MatchPage } from '../../../match/match';

@IonicPage()
@Component({
  selector: 'tab-rounds',
  templateUrl: 'tab-rounds.html',
})
export class TabRounds {

  private roundMatches : any;
  private teamMatches : any;
  private roundSelected: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService,
    private matchService: MatchService, private app: App) {
      
    switch (this.navParams.data[0]){
      case 'league':
        this.roundSelected = 1;
        if(this.userService.getUserTeam() != undefined || this.userService.getUserTeam() != null){
          this.matchService.getMatchByRoundAndLeague(this.roundSelected, this.userService.getUserTeam().liga).subscribe(
            matches =>{
              this.roundMatches = matches;
            },
            error => console.error(error)
          );
        }
      break;
      case 'team':
        this.matchService.getMatchTeamById(this.userService.getUserLogged().equipo).subscribe(
          matches => this.teamMatches = matches
        );
      break;
      case 'teamsList':
        this.matchService.getMatchTeamById(this.navParams.data[1]).subscribe(
          matches => this.teamMatches = matches
        );
      break;
    }
  }

  roundInfo(day:number){
    this.roundSelected = day;
    this.matchService.getMatchByRoundAndLeague(this.roundSelected, this.userService.getUserTeam().liga).subscribe(
      matches =>{
        this.roundMatches = matches;
        console.log(this.roundMatches);
      },
      error => console.error(error)
    );
    console.log(this.roundSelected);
    console.log("Informacion de la jornada " + day);
  }

  matchInfo(id:any){
    this.app.getRootNav().push(MatchPage, { matchId:id });
  }
}
