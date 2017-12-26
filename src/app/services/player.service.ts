import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//import { Player } from '../Class/player.model';
import 'rxjs/Rx';
@Injectable()
export class PlayerService{

    players: any;

    constructor(public http:Http){};

    getHttpPlayers(){
        return this.http.get('assets/data/players.json')
        .map(response => {return response.json()})
    }

    getPlayer(){
        return this.players;
    }

    loadPlayers(){
       /* this.getHttpPlayers().subscribe(
            reponse => {
                this.players = reponse.players;
            }
        )*/
        console.log("Llama a load palyers");
        return this.http.get('assets/data/players.json')
        .map(response => {return response.json()}).subscribe(
            data =>  {
                this.players = data;
            }
        );
        
    }
};