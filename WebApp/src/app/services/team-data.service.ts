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

  addPlayers(players: Array<Player>){
    this.team.plantillaEquipo = players;
  }

  addTeam(team:Team){
    this.team = team;
  }

  resetTeam(){
    this.team = new Team();
  }

}
