import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserService } from '../../../../app/services/user.service';

@IonicPage()
@Component({
  selector: 'tab-team',
  templateUrl: 'tab-team.html',
})
export class TabTeam {

  private userTeam : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabTeamPage');
  }

}
