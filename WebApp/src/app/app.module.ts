import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewPlayerFormComponent } from './components/new-player-form/new-player-form.component';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule,
         MatToolbarModule,
         MatCardModule,
         MatButton,
         MatIconModule,
         MatFormFieldModule,
         MatSelectModule,
         MatOptionModule,
         MatSnackBarModule,
         MatDialogModule,
         MatStepperModule,
         MatCheckboxModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatDividerModule,
         MatProgressSpinnerModule
        } from '@angular/material';

import { HttpClient } from './services/httpClient.service';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { LeagueService } from './services/league.service';
import { DialogService } from './services/dialog.service';
import { RequestFormService } from './services/request-form.service';
import { ComponentService } from './services/component.service';
import { TeamService } from './services/team.service';
import { IpClientService } from './services/clientIp.service';
import { EventService } from './services/events.service';
import { PlayerService } from './services/player.service';
import { TeamDataService } from './services/team-data.service';
import { RouterSecurityService } from './services/router-security.service';
import { PlayerDataService } from './services/player-data.service';

import { appRoutes } from './app.routing';

import { LoginGuestComponent } from './components/login-guest/login-guest.component';
import { TeamCreatorComponent } from './components/team-creator/team-creator.component';
import { RequestAccountComponent } from './components/request-account/request-account.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MyTeamComponent } from './components/my-team/my-team.component';
import { PlayerFormPostCreationComponent } from './components/player-form-post-creation/player-form-post-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPlayerFormComponent,
    LoginGuestComponent,
    TeamCreatorComponent,
    RequestAccountComponent,
    NavBarComponent,
    DialogComponent,
    MyTeamComponent,
    PlayerFormPostCreationComponent
  ],
  imports: [
    HttpModule,
    MatStepperModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    RequestFormService,
    RouterSecurityService,
    ComponentService,
    EventService,
    TeamService,
    PlayerService,
    TeamDataService,
    IpClientService,
    DialogService,
    RequestAccountComponent,
    HttpClient,
    UserService,
    LoginService,
    LeagueService,
    PlayerDataService
  ],
  entryComponents:[
    NewPlayerFormComponent,
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
