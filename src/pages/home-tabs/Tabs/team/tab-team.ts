import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { App } from 'ionic-angular';

import { UserService } from '../../../../app/services/user.service';
import { MatchService } from '../../../../app/services/match.service';
import { errorHandler } from '@angular/platform-browser/src/browser';

import { MatchPage } from '../../../match/match';

@IonicPage()
@Component({
  selector: 'tab-team',
  templateUrl: 'tab-team.html',
})
export class TabTeam {

  private roundMatches : any;
  private roundSelected: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService,
     private matchService: MatchService, private app: App) {
    this.roundSelected = 1;
    this.matchService.getMatchByRoundAndLeague(this.roundSelected, this.userService.getUserTeam().liga).subscribe(
      matches =>{
        this.roundMatches = matches;
        console.log(this.roundMatches);
      },
      error => console.error(error)
    );
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
