import { Injectable } from '@angular/core';

import { EventService } from '../services/events.service';

import { Player } from '../models/player.model';

@Injectable()
export class PlayerDataService {

  teamPlayers: Array<Player> = [];
  playersRemoved: Array<Player> = [];
  playersRemovedIds: Array<string> = [];
  playersAdded: Array<Player> = [];
  playersModify: Array<Player> = [];

  constructor(private eventService: EventService) { 

    this.eventService.checkPlayerComponent.subscribe((event) => {
      this.addPlayerRemovedId(event);
    });

  }

  setTeamPlayers(players: Array<Player>){
    this.teamPlayers = players;
  }

  clearData(){
    this.teamPlayers = [];
    this.playersRemoved = [];
    this.playersRemovedIds = [];
    this.playersAdded = [];
    this.playersModify = [];
  }

  addPlayerRemovedId(id:string){
    let index = this.playersRemovedIds.indexOf(id);

    if(index > -1){
      this.playersRemovedIds.splice(index);
    } else{
      this.playersRemovedIds.push(id);
    }
  }

  addPlayer(id:string){
    let newPlayer = new Player();
    newPlayer.id = id;

    this.teamPlayers.push(newPlayer);
    this.playersAdded.push(newPlayer);
  }

  removePlayers(){
    let removed = this.teamPlayers.filter(p => this.playersRemovedIds.indexOf(p.id) > -1);

    this.playersRemoved = this.playersRemoved.concat(removed);

    this.teamPlayers = this.teamPlayers.filter(p => this.playersRemovedIds.indexOf(p.id) == -1);

  }

}
