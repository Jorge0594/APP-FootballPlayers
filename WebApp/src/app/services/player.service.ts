import { Injectable } from '@angular/core';

import { HttpClient } from './httpClient.service';

const BASE_URL = "jugadores/"
@Injectable()
export class PlayerService {

  constructor(private http: HttpClient) { }

  existPlayerEmail(email:string){
    return this.http.get(BASE_URL + "validar/email/" + email)
    .map(
      response => response,
      error => error
    )
  }

  existDNIPlayer(dni:string){
    return this.http.get(BASE_URL + "validar/dni/" + dni)
    .map(
      response => response,
      error => error
    )
  }
}