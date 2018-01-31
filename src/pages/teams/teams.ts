import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { UserService } from '../../app/services/user.service';
import { HomeTabsPage } from '../home-tabs/home-tabs';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, private app: App) {
  }

  teamSelect(id:string){
    console.log("El id del equipo es " + this.navParams.get('id')[0]);
    this.navCtrl.push(HomeTabsPage, { id:[this.navParams.get('id')[0], id] });
  }

}
