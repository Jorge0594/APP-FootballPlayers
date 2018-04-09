import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

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

  @ViewChild(Slides) slides:Slides;
  private roundMatches : any;
  private teamMatches : any;
  private roundSelected: number;
  private isEmpty: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService,
    private matchService: MatchService, private app: App) {

    this.roundSelected = 4;
    this.isEmpty = false;

    switch (this.navParams.data[0]){
      case 'league':
        this.roundSelected = 1;
        if(this.userService.getUserTeam() != undefined || this.userService.getUserTeam() != null){
          this.matchService.getMatchByRoundAndLeague(this.roundSelected, this.userService.getUserTeam().liga).subscribe(
            matches =>{
              this.roundMatches = matches;
              if(this.roundMatches == null) this.isEmpty = true;
            },
            error => console.error(error)
          );
        }
        this.slideToRecursive(this.roundSelected - 1);
      break;
      case 'team':
        this.matchService.getMatchTeamById(this.userService.getUserLogged().equipo).subscribe(
          matches =>{
            this.teamMatches = matches;
            if(this.teamMatches == null) this.isEmpty = true;
          } 
        );
      break;
      case 'teamsList':
        this.matchService.getMatchTeamById(this.navParams.data[1]).subscribe(
          matches =>{
            this.teamMatches = matches;
            if(this.teamMatches == null) this.isEmpty = true;
          } 
        );
      break;
    }
  }

  roundInfo(day:number){

    this.isEmpty = false;

    if(this.roundSelected != day){
      this.roundMatches = null;
      this.roundSelected = day;
    }

    this.matchService.getMatchByRoundAndLeague(this.roundSelected, this.userService.getUserTeam().liga).subscribe(
      matches =>{
        if(matches != null){
          if (this.roundSelected == matches[0].jornada){
            this.roundMatches = matches;
          }
        }else{
          this.isEmpty = true;
        }
      },
      error => console.error(error)
    );
  }

  matchInfo(id:string, status:string){
    this.app.getRootNav().push(MatchPage, { matchId:id, matchStatus:status });
  }

  private slideToRecursive(index: number): Promise<void> {
    return new Promise((resolve: Function, reject: Function): void => {
        let tryCount: number = 0;
        this.slideTo(index, tryCount, resolve, reject);
    });
  }

  private slideTo(index: number, tryCount:number, resolve: Function, reject: Function){
    try{
      this.slides.slideTo(index);
      resolve();
    } catch (error){
      if(tryCount < 100){
        tryCount++;
        setTimeout(()=>{
          this.slideTo(index, tryCount, resolve, reject);
        }, 50);
      } else {
        reject(error);
      }
    }
  }
}
