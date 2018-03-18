import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SanctionService } from '../../app/services/sanction.service';
import { UserService } from '../../app/services/user.service';

@IonicPage()
@Component({
  selector: 'page-sanction',
  templateUrl: 'sanction.html',
})
export class SanctionPage {

  private sanction: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanctionService: SanctionService, private userService: UserService) {
    this.sanctionService.getSanctionById(this.navParams.get('id')).subscribe(
      sanction => this.sanction = sanction
    );
  }

}
