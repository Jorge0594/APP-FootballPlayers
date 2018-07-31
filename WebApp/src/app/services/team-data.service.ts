import { Injectable } from '@angular/core';

import { Player } from '../models/player.model';
import { Team } from '../models/team.model';

@Injectable()
export class TeamDataService {

  private team: Team;

  constructor() {
    this.team = new Team();
  }

  getTeam():Team{
    return this.team;
  }

  addPlayer(player:Player){
    this.team.plantillaEquipo.push(player);
  }

  clearData(){
    this.team = new Team();
  }

  addPlayers(players: Array<Player>){
    this.team.plantillaEquipo = players;
  }

  getPlayerById(id:string): Player{
    return this.team.plantillaEquipo.find(p => p.id == id);
  }

  addTeam(team:Team){
    this.team = team;
  }

  resetTeam(){
    this.team = new Team();
  }

  delegateRestrictions(){
    let delegate = this.team.plantillaEquipo.filter(p => p.delegado == true);
    let response =  {
      error: false,
      numDelegates: 1
    };

    if(delegate.length == 0){
      response.error = true;
      response.numDelegates = 0;
    } else if (delegate.length > 1){
      response.error = true;
      response.numDelegates = delegate.length;
    }
    
    return response;
  }

}
