import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { UserService } from '../../app/services/user.service';

import { TabStandings } from './Tabs/standings/standings';
import { TabTeam } from './Tabs/team/tab-team';
import { TabLeague } from './Tabs/league/league-tab';
@IonicPage()
@Component({
  selector: 'page-home-tabs',
  templateUrl: 'home-tabs.html',
})
export class HomeTabsPage {
  tabStandingsRoot = TabStandings;
  tabTeamRoot = TabTeam;
  tabLeagueRoot = TabLeague;

  private tabs : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuController: MenuController, private userService:UserService) {
    this.tabs = [
      {title: "CLASIFICACIÓN", root: TabStandings, icon: "trophy"},
      {title: "ENCUENTROS", root: TabTeam, icon: "football"},
      {title: "LIGA", root: TabLeague, icon: "trophy"}
    ]
  }

  
}
