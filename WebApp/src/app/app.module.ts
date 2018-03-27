import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { NewPlayerFormComponent } from './components/new-player-form/new-player-form.component';

import { HttpClient } from './services/httpClient.service';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NewPlayerFormComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpClient,
    UserService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
