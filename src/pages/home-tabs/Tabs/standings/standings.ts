import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '../../../../app/services/httpClient.service'
import { LoginService } from '../../../../app/services/login.service';
import { MatchService } from '../../../../app/services/match.service';
import { UserService } from  '../../../../app/services/user.service';
@Component({
  selector: 'page-home',
  templateUrl:'standings.html'
})
export class TabStandings {

  userMatches: any;
  constructor(public navCtrl: NavController, private navParams :NavParams, private http:HttpClient, private userService: UserService) {
  }

}
