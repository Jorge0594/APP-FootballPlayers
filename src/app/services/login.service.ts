import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './httpClient.service';
import { UserService } from './user.service';

import 'rxjs/Rx';

const role : String = "ROLE_JUGADOR";
@Injectable()
export class LoginService{

    constructor (private http: HttpClient, private userService: UserService){}

    login(username:String, password:String){
        if(username == "" || username == null || username == undefined){
            return Observable.throw("Server error (401):Por favor introduzca el nombre de usuario correcto");
        }else{

            this.http.setLogged(true);
            this.http.generateAuthTokens(username,password);

            return this.http.get("iniciarSesion/" + role).map(
                response => response,
                error => console.error(error)
            );
        }
    }

    logout(){
        return this.http.get("cerrarSesion").map(
            response => response,
            error => console.error(error)
        ).subscribe(
            logout =>{ 
                this.http.logout();
                this.userService.logout();
            }
        );
    }


};