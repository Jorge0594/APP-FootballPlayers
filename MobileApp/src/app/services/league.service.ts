import { Injectable, Inject, forwardRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './httpClient.service';
import 'rxjs/Rx';

const BASE_URL: string = 'grupos/';
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
        return this.http.get(BASE_URL + name + '/clasificacion').map(
            response => response,
            error => console.error(error)
        )
    }

    getGroups(league:string){
        return this.http.get('ligas/' + league + '/grupos').map(
            response => response,
            error => console.error(error)
        )
    }

    getTopGoals(league:string, group:string){
        return this.http.get(BASE_URL + 'goleadores/' + league + '/' + group ).map(
            response => response,
            error => console.error(error)
        )
    }

    getTopYellowCards(league:string, group:string){
        return this.http.get(BASE_URL + 'amarillas/' + league + '/' + group).map(
            response => response,
            error => console.error(error)
        )
    }

    getTopRedCards(league:string, group:string){
        return this.http.get(BASE_URL + 'rojas/' + league + '/' + group).map(
            response => response,
            error => console.error(error)
        )
    }

}