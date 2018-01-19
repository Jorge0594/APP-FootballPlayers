import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { UserService } from '../../app/services/user.service';

import { TabStandings } from './Tabs/standings/standings';
import { TabRounds } from './Tabs/rounds/tab-rounds';
import { TabRanks } from './Tabs/ranks/ranks-tab';
@IonicPage()
@Component({
  selector: 'page-home-tabs',
  templateUrl: 'home-tabs.html',
})
export class HomeTabsPage {
  tabStandingsRoot = TabStandings;
  tabRoundsRoot = TabRounds;
  tabRanksRoot = TabRanks;

  private tabs : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuController: MenuController, private userService:UserService) {
    this.tabs = [
      {title: "Clasificación", root: TabStandings, icon: "trophy"},
      {title: "Calendario", root: TabRounds, icon: "calendar"},
      {title: "Rankings", root: TabRanks, icon: "podium"}
    ]
  }

  
}
