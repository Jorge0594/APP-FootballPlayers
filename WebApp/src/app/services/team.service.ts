import { Injectable } from '@angular/core';

import { Team } from '../models/team.model';

import { HttpClient } from './httpClient.service';
import { ERROR_COLLECTOR_TOKEN } from '@angular/platform-browser-dynamic/src/compiler_factory';

const BASE_URL = "equipos/";
@Injectable()
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeamById(id:string){
    return this.http.get(BASE_URL + "/id/" + id)
    .map(
      response => response,
      error => console.error(error)
    )
  }

  existTeam(name:string, league:string){
    return this.http.get(BASE_URL + "validar/" + name + "/" + league)
    .map(
      response => response,
      error => error
    )
  }

  createTeam(team: Team){
    return this.http.post(BASE_URL + "temporal" , team)
    .map(
      response => response,
      error => console.error(error)
    );
  }

}
