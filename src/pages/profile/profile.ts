import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Content} from 'ionic-angular';

import { HomeTabsPage } from '../home-tabs/home-tabs';

import { UserService } from '../../app/services/user.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  @ViewChild(Content)content: Content;
  private selection:string;
  private header: number;
  private clickImage: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, private events: Events) {
    this.selection = "one";
    this.header = 150;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  goTeam(){
    this.navCtrl.push(HomeTabsPage, {id:[this.navParams.get('id')[0]]});
  }

  resizeHeader(){
    this.content.scrollTo(0, 0, 0);//relocate the content after click in a button
    this.events.publish('resizeHeader');
  }
  
}
