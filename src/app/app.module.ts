import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { PlayerService } from '../../src/app/services/player.service'
import { LoginService } from '../../src/app/services/login.service';
import { HttpClient } from '../../src/app/services/httpClient.service';
import { TeamService } from '../../src/app/services/team.service';
import { MatchService } from '../../src/app/services/match.service';
import { UserService } from '../../src/app/services/user.service';
import { LeagueService } from '../../src/app/services/league.service';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomeTabsPage } from '../pages/home-tabs/home-tabs';
import { TabStandings } from '../pages/home-tabs/Tabs/standings/standings';
import { TabRounds} from '../pages/home-tabs/Tabs/rounds/tab-rounds';
import { TabRanks } from '../pages/home-tabs/Tabs/ranks/ranks-tab';
import { PlayerPage } from '../pages/player/player';
import { MatchPage } from '../pages/match/match';
import { TeamsPage } from '../pages/teams/teams';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomeTabsPage,
    TabStandings,
    TabRounds,
    TabRanks,
    PlayerPage,
    MatchPage,
    TeamsPage,
    ProfilePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomeTabsPage,
    TabStandings,
    TabRounds,
    TabRanks,
    PlayerPage,
    MatchPage,
    TeamsPage,
    ProfilePage
  ],
  providers: [
    HttpModule,
    PlayerService,
    LoginService,
    TeamService,
    MatchService,
    HttpClient,
    UserService,
    LeagueService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
