import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { UserService } from '../../app/services/user.service';
import { TeamService } from '../../app/services/team.service';

import { TabStandings } from './Tabs/standings/standings';
import { TabRounds } from './Tabs/rounds/tab-rounds';
import { TabRanks } from './Tabs/ranks/ranks-tab';
@IonicPage()
@Component({
  selector: 'page-home-tabs',
  templateUrl: 'home-tabs.html',
})
export class HomeTabsPage {

  private tabs: Array<{ title:string, root: any, rootParams:[string], icon:string}>;
  private rootParams: [string];
  private titles: Array<string>;
  private headerTitle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuController: MenuController, private userService:UserService, private teamService: TeamService) {
   
    switch (this.navParams.get('id')[0]){
      case "league":
        this.headerTitle = "Liga";
        this.rootParams = ["league"];
        this.titles = ["Clasificacion", "Calendario", "Rankings"];
      break;
      case "team":
      this.headerTitle = userService.getUserTeam().nombre;
        this.rootParams = ["team"];
        this.titles = ["Perfil", "Calendario","Plantilla"];
      break;
      case "teamsList":
        this.teamService.getPlayerTeamById(this.navParams.get('id')[1]).subscribe(
          team => this.headerTitle = team.nombre
        );
        this.rootParams = ["teamsList",this.navParams.get('id')[1]];
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
