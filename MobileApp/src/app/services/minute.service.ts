import { Injectable, Inject, forwardRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './httpClient.service';
import 'rxjs/Rx';

const BASE_URL = "actas/";

@Injectable()
export class MinuteService{
    constructor(private http:HttpClient){}

    getMinuteByMatchId(id: string){
        return this.http.get(BASE_URL + "partido/" +  id).map(
            response => response,
            error => console.error(error)
        )
    }
}