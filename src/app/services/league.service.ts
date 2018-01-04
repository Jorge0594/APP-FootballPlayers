import { Injectable, Inject, forwardRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './httpClient.service';
import 'rxjs/Rx';

const BASE_URL: string = "ligas/";
@Injectable()
export class LeagueService{
    constructor(private http: HttpClient){}

    getLeagueByName(name:string){
        return this.http.get(BASE_URL + name).map(
            response => response,
            error => console.error(error)
        )
    }

    getStandings(name:string){
        return this.http.get(BASE_URL + name + "/clasificacion").map(
            response => response,
            error => console.error(error)
        )
    }
}