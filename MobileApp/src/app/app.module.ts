import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { PlayerService } from '../../src/app/services/player.service'
import { LoginService } from '../../src/app/services/login.service';
import { HttpClient } from '../../src/app/services/httpClient.service';
import { TeamService } from '../../src/app/services/team.service';
import { MatchService } from '../../src/app/services/match.service';
import { UserService } from '../../src/app/services/user.service';
import { LeagueService } from '../../src/app/services/league.service';
import { SanctionService } from '../../src/app/services/sanction.service';
import { MinuteService } from '../app/services/minute.service';
import { MyApp } from './app.component';

import { ElasticHeader } from '../components/elastic-header/elastic-header'

import { LoginPage } from '../pages/login/login';
import { HomeTabsPage } from '../pages/home-tabs/home-tabs';
import { TabStandings } from '../pages/home-tabs/Tabs/standings/standings';
import { TabRounds} from '../pages/home-tabs/Tabs/rounds/tab-rounds';
import { TabRanks } from '../pages/home-tabs/Tabs/ranks/ranks-tab';
import { PlayerPage } from '../pages/player/player';
import { MatchPage } from '../pages/match/match';
import { TeamsPage } from '../pages/teams/teams';
import { SanctionPage } from '../pages/sanction/sanction';
import { ProfilePage } from '../pages/profile/profile';
import { TabStats } from '../pages/home-tabs/Tabs/stats/stats';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomeTabsPage,
    TabStandings,
    TabRounds,
    TabRanks,
    PlayerPage,
    SanctionPage,
    MatchPage,
    TeamsPage,
    ProfilePage,
    TabStats,
    ElasticHeader
  ],
  imports: [
    HttpModule,
    IonicImageViewerModule,
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
    ProfilePage,
    ElasticHeader,
    SanctionPage,
    TabStats
  ],
  providers: [
    HttpModule,
    PlayerService,
    MinuteService,
    LoginService,
    SanctionService,
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
