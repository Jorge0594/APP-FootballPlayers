import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../../../app/services/user.service';


@IonicPage()
@Component({
  selector: 'league-tab',
  templateUrl: 'league-tab.html',
})
export class TabLeague {

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeagueTabPage');
  }

}
