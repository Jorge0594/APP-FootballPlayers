import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '../../../../app/services/httpClient.service'
import { LoginService } from '../../../../app/services/login.service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class TabHome {

  constructor(public navCtrl: NavController, private loginService:LoginService, private http:HttpClient ) {
    this.loginService.getPlayerLogged();
  }

}
