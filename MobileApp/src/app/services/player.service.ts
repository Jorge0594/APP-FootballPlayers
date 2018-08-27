import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './httpClient.service';

import 'rxjs/Rx';

const BASE_URL = "jugadores/";
@Injectable()
export class PlayerService{

    constructor(public http:HttpClient){};

    getPlayerById(id:string){
        return this.http.get(BASE_URL + "id/" + id).map(
            response => response,
            error => console.error(error)
        );
    }

    forgottenPassword(email:string){
        return this.http.getRecoveredPasword(BASE_URL + "clave/" + email).map(
            response => response,
            error => console.error(error)
        )
    }

    changePassword(id:string, password:string){
        return this.http.put((BASE_URL + "clave/" + id), password).map(
            response => response,
            error => console.error(error)
        )
    }
   
};