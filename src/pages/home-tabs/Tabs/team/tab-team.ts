import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../../../app/services/user.service';
import { errorHandler } from '@angular/platform-browser/src/browser';

@IonicPage()
@Component({
  selector: 'tab-team',
  templateUrl: 'tab-team.html',
})
export class TabTeam {

  private userTeam : any;
  private roundSelected: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService) {
    this.roundSelected = 1;
  }

  /*ionViewDidLoad() {
    this.roundSelected = 1;
  }*/

  roundInfo(day:number){
    this.roundSelected = day;
    console.log(this.roundSelected);
    console.log("Informacion de la jornada " + day);
  }

}
