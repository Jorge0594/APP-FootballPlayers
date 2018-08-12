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

    getStandings(groupId:string){
        return this.http.get(BASE_URL + groupId + '/clasificacion').map(
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

    getTopGoals(group:string){
        return this.http.get(BASE_URL + 'goleadores/' + group ).map(
            response => response,
            error => console.error(error)
        )
    }

    getTopYellowCards(group:string){
        return this.http.get(BASE_URL + 'amarillas/' + group).map(
            response => response,
            error => console.error(error)
        )
    }

    getTopGoalkeepers(group:string){
        return this.http.get(BASE_URL + 'porteros/' + group).map(
            response => response,
            error => console.error(error)
        )
    }

    getTopRedCards(group:string){
        return this.http.get(BASE_URL + 'rojas/' + group).map(
            response => response,
            error => console.error(error)
        )
    }

}