import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabRanks } from './ranks-tab';

@NgModule({
  declarations: [
    TabRanks,
  ],
  imports: [
    IonicPageModule.forChild(TabRanks),
  ],
})
export class LeagueTabPageModule {}
