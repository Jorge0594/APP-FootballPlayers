import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { MatchService } from '../../app/services/match.service';

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

   @ViewChild(Slides)slide: Slides;
  private match: any;
  private statSelected: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private matchService: MatchService) {
    this.statSelected = "stats"
    this.matchService.getMatchById(this.navParams.get('matchId')).subscribe(
      match => this.match = match
    );
  }

  ionViewDidLoad() {
    this.slide.lockSwipes(true);
  }

  selectStat(stat:string){
    this.statSelected = stat;
  }

}
