import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabLeague } from './league-tab';

@NgModule({
  declarations: [
    TabLeague,
  ],
  imports: [
    IonicPageModule.forChild(TabLeague),
  ],
})
export class LeagueTabPageModule {}
