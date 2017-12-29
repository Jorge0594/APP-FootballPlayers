import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabHome } from './Tabs/home/home';
import { TabTeam } from './Tabs/team/tab-team';
import { TabLeague } from './Tabs/league/league-tab';
@IonicPage()
@Component({
  selector: 'page-home-tabs',
  templateUrl: 'home-tabs.html',
})
export class HomeTabsPage {

  tabHomeRoot = TabHome;
  tabTeamRoot = TabTeam;
  tabLeagueRoot = TabLeague;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
