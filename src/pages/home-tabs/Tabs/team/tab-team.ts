import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TeamService } from '../../../../app/services/team.service';
import { LoginService } from '../../../../app/services/login.service';
@IonicPage()
@Component({
  selector: 'tab-team',
  templateUrl: 'tab-team.html',
})
export class TabTeam {

  private userTeam : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private teamService: TeamService, private loginService: LoginService) {
    this.teamService.getPlayerTeamById(this.loginService.getUser().equipo).subscribe(
      team => {
        this.userTeam = team
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabTeamPage');
  }

}
