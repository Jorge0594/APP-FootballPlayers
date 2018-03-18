import { Injectable, Inject, forwardRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './httpClient.service';
import 'rxjs/Rx';

const BASE_URL = "sanciones/";

@Injectable()
export class SanctionService{

    constructor(private http:HttpClient){}

    getPlayerSanctions(id:string){
        return this.http.get(BASE_URL + "sancionado/" + id).map(
            response => response,
            error => console.error(error)
        );
    }

    getActivePlayerSanctions(id:string){
        return this.http.get(BASE_URL + "activas/sancionado/" + id).map(
            response => response,
            error => console.error(error)
        );
    }

    getSanctionById(id:String){
        return this.http.get(BASE_URL + "id/" + id).map(
            response => response,
            error => console.error(error)
        );
    }
}