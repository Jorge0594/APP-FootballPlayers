import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SanctionPage } from './sanction';

@NgModule({
  declarations: [
    SanctionPage,
  ],
  imports: [
    IonicPageModule.forChild(SanctionPage),
  ],
})
export class SanctionPageModule {}
