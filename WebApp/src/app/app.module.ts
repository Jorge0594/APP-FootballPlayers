import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewPlayerFormComponent } from './components/new-player-form/new-player-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule, MatToolbarModule, MatCardModule, MatButton } from '@angular/material';

import { HttpClient } from './services/httpClient.service';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { ComponentService } from './services/component.service';
import { LoginGuestComponent } from './components/login-guest/login-guest.component';
import { TeamCreatorComponent } from './components/team-creator/team-creator.component';
import { RequestAccountComponent } from './components/request-account/request-account.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


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
    NavBarComponent
  ],
  imports: [
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
    ComponentService,
    HttpClient,
    UserService,
    LoginService
  ],
  entryComponents:[
    NewPlayerFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
