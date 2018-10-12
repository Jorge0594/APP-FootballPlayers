import { Injectable, Inject, forwardRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './httpClient.service';
import 'rxjs/Rx';

const BASE_URL: string = 'incidencias/';
@Injectable()
export class IncidenceService{
    constructor(private http: HttpClient){}

    getMatchIncidences(matchId: string){
        return this.http.get(BASE_URL + "partido/" + matchId).map(
            response => response,
            error => console.error()
        )
    }
}