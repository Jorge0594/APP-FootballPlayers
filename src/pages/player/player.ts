import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlayerService } from '../../app/services/player.service';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  private player: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private playerService: PlayerService) {
    this.playerService.getPlayerById(this.navParams.get('playerId')).subscribe(
      player => this.player = player
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerPage');
  }

}
