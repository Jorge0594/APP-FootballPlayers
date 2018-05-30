import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './httpClient.service';
import { UserService } from './user.service';
import { EventService } from './events.service';

import 'rxjs/Rx';


const role : string = "ROLE_TEMPORAL";
@Injectable()
export class LoginService{

    constructor (private http: HttpClient, private userService: UserService, private eventService: EventService){}

    login(username:string, password:string){
        this.http.setLogged(true);
        this.http.generateAuthTokens(username, password);

        return this.http.get("iniciarSesion/" + role).map(
            response =>{
                //this.userService.setUserLogged(response.nombreUsuario);
            },
            error => console.error(error)
        );
    }

    logout(){
        return this.http.get("cerrarSesion").map(
            response => response,
            error => console.error(error)
        ).subscribe(
            logout =>{ 
                this.http.logout();
                this.userService.logout();
                this.eventService.changeNavbar.emit('login');
            }
        );
    }


};