import { Injectable } from '@angular/core';

import { HttpClient } from './httpClient.service';

const BASE_URL = "equipos/";
@Injectable()
export class TeamService {

  constructor(private http: HttpClient) { }

  gettemaById(id:string){
    return this.http.get(BASE_URL + "/id/" + id)
    .map(
      response => response,
      error => console.error(error)
    )
  }

}
