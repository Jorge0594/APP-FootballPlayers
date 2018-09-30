import { Injectable, Inject, forwardRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './httpClient.service';
import 'rxjs/Rx';

const BASE_URL: string = 'histEquipos/';
@Injectable()
export class HistoricalTeamService{
    constructor(private http: HttpClient){}

    getTeamHistorials(id: string){
        return this.http.get(BASE_URL + "/equipo/" + id).map(
            response => response,
            error => console.error(error)
        )
    }

    getPlayerHistorials(id: string){
        return this.http.get("histJugadores/jugador/" + id).map(
            response => response,
            error => console.error(error)
        )
    }
}