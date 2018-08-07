import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { UserService } from '../../app/services/user.service';
import { TeamService } from '../../app/services/team.service';

import { TabStandings } from './Tabs/standings/standings';
import { TabRounds } from './Tabs/rounds/tab-rounds';
import { TabRanks } from './Tabs/ranks/ranks-tab';
import { TabStats } from './Tabs/stats/stats';
@IonicPage()
@Component({
  selector: 'page-home-tabs',
  templateUrl: 'home-tabs.html',
})
export class HomeTabsPage {

  private tabs: Array<{ title:string, root: any, rootParams:[string], icon:string}>;
  private rootParams:any;
  private titles: Array<string>;
  private icons: Array<string>;
  private headerTitle: string;
  private groupSelected:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuController: MenuController, private userService:UserService, private teamService: TeamService) {
   
    this.groupSelected = this.userService.getCurrentGroup();

    switch (this.navParams.get('id')[0]){
      case "league":
        this.rootParams = ["league"];
        this.titles = ["Clasificación", "Calendario", "Rankings"];
        this.icons = ["trophy", "calendar", "podium"];
      break;
      case "profile":
      case "team":
      this.headerTitle = userService.getUserTeam().nombre;
        this.rootParams = ["team"];
        this.titles = ["Perfil", "Calendario","Plantilla", "Estadisticas"];
        this.icons = ["home", "calendar", "people", "stats"];
      break;
      case "teamsList":
        this.teamService.getPlayerTeamById(this.navParams.get('id')[1]).subscribe(
          team => this.headerTitle = team.nombre
        );
        this.rootParams = ["teamsList", this.navParams.get('id')[1]];
        this.titles = ["Perfil", "Calendario","Plantilla"];
        this.icons = ["home", "calendar", "people"];
      break;
    }

    this.changeTabs(this.navParams.get('id')[0]);
    
    
  }

  changeTabs(id:string){
    switch(id){
      case "league":
      case "teamsList":
        this.tabs = [
          {title: this.titles[0], root: TabStandings, rootParams: this.rootParams, icon: this.icons[0]},
          {title: this.titles[1], root: TabRounds, rootParams: this.rootParams, icon: this.icons[1]},
          {title: this.titles[2], root: TabRanks, rootParams: this.rootParams, icon: this.icons[2]}
        ];
      break;
      case "profile":
      case "team":
      this.tabs = [
        {title: this.titles[0], root: TabStandings, rootParams: this.rootParams, icon: this.icons[0]},
        {title: this.titles[1], root: TabRounds, rootParams: this.rootParams, icon: this.icons[1]},
        {title: this.titles[2], root: TabRanks, rootParams: this.rootParams, icon: this.icons[2]},
        {title: this.titles[3], root: TabStats, rootParams: this.rootParams, icon: this.icons[3]}
      ];
      break;
  
    }
  }

  
}
