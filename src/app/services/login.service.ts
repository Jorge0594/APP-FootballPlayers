import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PlayerService } from './player.service';
import { HttpClient } from './httpClient.service';
import 'rxjs/Rx';

const role : String = "ROLE_JUGADOR";
@Injectable()
export class LoginService{

    constructor (private playerService:PlayerService, private http: HttpClient){}

    login(username:String, password:String){
        if(username == "" || username == null || username == undefined){
            return Observable.throw("Server error (401):Por favor introduzca el nombre de usuario correcto");
        }else{

            this.http.setIsLoggedUser(true);
            this.http.generateAuthTokens(username,password);

            return this.http.get("iniciarSesion/" + role).map(
                response => response,
                error => console.error(error)
            );
        }
    }

    isLoggedUser(){
    }

    getPlayerLogged(){
        return this.http.get("jugadores/usuario").subscribe(
            response => {
                console.log("response");
                this.http.setUserLogged(response);
            },
            error => console.error(error)
        )
    }

    getUser(){
        return this.http.getUserLogged();
    }

    getIsUserLogged(){
        return this.http.isLoggedUser();
    }


};