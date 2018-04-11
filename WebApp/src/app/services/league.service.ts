import { Injectable } from '@angular/core';
import { HttpClient } from "./httpClient.service";

const BASE_URL ="ligas";

@Injectable()
export class LeagueService {
  constructor(private http:HttpClient) { }

  getLeaguesNames(){
    return this.http.get(BASE_URL + "/nombres").map(
      response => response
    ).catch(
      error => error
    )
  }
}
