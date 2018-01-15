import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MatchService } from '../../app/services/match.service';

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  private match: any;
  private statSelected: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private matchService: MatchService) {
    this.statSelected = "stats"
    this.matchService.getMatchById(this.navParams.get('matchId')).subscribe(
      match => this.match = match
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
  }

  selectStat(stat:string){
    this.statSelected = stat;
  }

}
