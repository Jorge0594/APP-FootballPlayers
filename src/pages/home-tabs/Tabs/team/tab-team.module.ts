import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabTeam } from './tab-team';

@NgModule({
  declarations: [
    TabTeam,
  ],
  imports: [
    IonicPageModule.forChild(TabTeam),
  ],
})
export class TabTeamPageModule {}
