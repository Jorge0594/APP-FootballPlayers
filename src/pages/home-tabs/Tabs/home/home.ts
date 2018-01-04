import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '../../../../app/services/httpClient.service'
import { LoginService } from '../../../../app/services/login.service';
import { MatchService } from '../../../../app/services/match.service';
import { UserService } from  '../../../../app/services/user.service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class TabHome {

  userMatches: any;
  constructor(public navCtrl: NavController, private http:HttpClient, private userService: UserService) {
  
  }

}
