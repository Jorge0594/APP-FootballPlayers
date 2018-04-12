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
         MatDialogModule
        } from '@angular/material';

import { HttpClient } from './services/httpClient.service';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { LeagueService } from './services/league.service';
import { RequestFormService } from './services/request-form.service';
import { ComponentService } from './services/component.service';
import { IpClientService } from './services/clientIp.service';

import { LoginGuestComponent } from './components/login-guest/login-guest.component';
import { TeamCreatorComponent } from './components/team-creator/team-creator.component';
import { RequestAccountComponent } from './components/request-account/request-account.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DialogComponent } from './components/dialog/dialog.component';


const appRoutes: Routes = [
    { path:'', redirectTo:'iniciarSesion', pathMatch: 'full'},
    { path:'iniciarSesion', component: LoginGuestComponent },
    { path: 'solicitarUsuario', component: RequestAccountComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewPlayerFormComponent,
    LoginGuestComponent,
    TeamCreatorComponent,
    RequestAccountComponent,
    NavBarComponent,
    DialogComponent
  ],
  imports: [
    HttpModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
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
    ComponentService,
    IpClientService,
    RequestAccountComponent,
    HttpClient,
    UserService,
    LoginService,
    LeagueService
  ],
  entryComponents:[
    NewPlayerFormComponent,
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
