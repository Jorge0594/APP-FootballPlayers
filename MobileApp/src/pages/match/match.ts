import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { MinuteService } from '../../app/services/minute.service';
import { MatchService } from '../../app/services/match.service';

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  @ViewChild(Slides)slide: Slides;
  private status: string;
  private match: any;
  private statSelected: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private minuteService: MinuteService, private matchService: MatchService) {
    this.statSelected = "stats"
    this.status = this.navParams.get('matchStatus');

    if(this.status == "Disputado" || this.status == "disputado"){
      this.minuteService.getMinuteByid(this.navParams.get('matchId')).subscribe(
        minute => this.match = minute
      );
    } else {
      this.matchService.getMatchById(this.navParams.get('matchId')).subscribe(
        match => this.match = match
      )
    }
  }

  ionViewDidLoad() {
    this.slide.lockSwipes(true);
  }

  selectStat(stat:string){
    this.statSelected = stat;
  }

}
