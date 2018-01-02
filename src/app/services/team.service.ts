import { Injectable, Inject, forwardRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './httpClient.service';
import 'rxjs/Rx';

const BASE_URL = "equipos";

@Injectable()
export class TeamService{
    constructor(private http:HttpClient){}

    getPlayerTeamById(teamId:any){
        return this.http.get("equipos/id/" + teamId).map(
            response => response,
            error => console.error(error)
        )
    }
}