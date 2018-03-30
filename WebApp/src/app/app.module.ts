import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewPlayerFormComponent } from './components/new-player-form/new-player-form.component';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatInputModule, MatToolbarModule } from '@angular/material';

import { HttpClient } from './services/httpClient.service';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { ComponentService } from './services/component.service';
import { LoginGuestComponent } from './components/login-guest/login-guest.component';
import { TeamCreatorComponent } from './components/team-creator/team-creator.component';
import { RequestAccountComponent } from './components/request-account/request-account.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
    { path:'', redirectTo:'inicio', pathMatch: 'full'},
    { path:'iniciarSesion', component: LoginGuestComponent },
    { path: 'inicio', component: HomeComponent },
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
    HomeComponent,
  ],
  imports: [
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
    ComponentService,
    HttpClient,
    UserService,
    LoginService
  ],
  entryComponents:[
    NewPlayerFormComponent
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
