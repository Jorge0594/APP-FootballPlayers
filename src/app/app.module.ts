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
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomeTabsPage } from '../pages/home-tabs/home-tabs';
import { TabHome } from '../pages/home-tabs/Tabs/home/home';
import { TabTeam } from '../pages/home-tabs/Tabs/team/tab-team';
import { TabLeague } from '../pages/home-tabs/Tabs//league/league-tab';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomeTabsPage,
    TabHome,
    TabTeam,
    TabLeague
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
    TabHome,
    TabTeam,
    TabLeague
  ],
  providers: [
    HttpModule,
    PlayerService,
    LoginService,
    TeamService,
    MatchService,
    HttpClient,
    UserService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
