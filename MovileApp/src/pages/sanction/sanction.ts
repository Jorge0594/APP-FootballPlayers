import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

import { SanctionService } from '../../app/services/sanction.service';
import { UserService } from '../../app/services/user.service';

@IonicPage()
@Component({
  selector: 'page-sanction',
  templateUrl: 'sanction.html',
})
export class SanctionPage {

  private sanction: any;

  constructor(public navParams: NavParams, private sanctionService: SanctionService, private userService: UserService, private viewController: ViewController) {
    this.sanctionService.getSanctionById(this.navParams.get('idSanction')).subscribe(
      sanction => this.sanction = sanction
    );
  }

  closeModal(){
    this.viewController.dismiss();
  }

}
