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

  private tabs: any = [];
  private rootParams: string;
  private titles: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuController: MenuController, private userService:UserService) {
    switch (this.navParams.get('id')){
      case "league":
        this.rootParams = "league";
        this.titles = ["Clasificacion", "Calendario", "Rankings"];
      break;
      case "team":
        this.rootParams = "team";
        this.titles = ["Perfil", "Calendario","Plantilla"];
      break;
    }
    this.tabs = [
      {title: this.titles[0], root: TabStandings, rootParams: this.rootParams, icon: "trophy"},
      {title: this.titles[1], root: TabRounds, rootParams: this.rootParams, icon: "calendar"},
      {title: this.titles[2], root: TabRanks, rootParams: this.rootParams, icon: "podium"}
    ];
  }

  
}
