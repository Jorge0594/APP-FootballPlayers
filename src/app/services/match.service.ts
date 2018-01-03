import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './httpClient.service';
import 'rxjs/Rx';

const BASE_URL: String = "partidos/";

@Injectable()
export class MatchService{
    constructor(private http: HttpClient){}

    getMatchTeamById(idMatch:String){
        return this.http.get(BASE_URL + 'partidosEquipo/' + idMatch).map(
            response => response,
            error => console.error(error)
        )
    }
}