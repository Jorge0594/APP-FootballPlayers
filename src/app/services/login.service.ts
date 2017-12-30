import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { PlayerService } from './player.service';
import { HttpClient } from './httpClient.service';
import 'rxjs/Rx';

@Injectable()
export class LoginService{

    constructor (private playerService:PlayerService, private http: HttpClient){}

    login(username:string, password:string){
        if(username == "" || username == null || username == undefined){
            return Observable.throw("Server error (401):Por favor introduzca el nombre de usuario correcto");
        }else{
            this.http.setLoggedUser(true);
            this.http.generateAuthTokens(username,password);
            return this.http.get("iniciarSesion").map(
                reponse => reponse,
                error => console.error(error)
            );
        }
    }

    isLoggedUser(){
    }

    getUserLogged(){
    }
};