import { Injectable } from '@angular/core';

import { HttpClient } from './httpClient.service';

const BASE_URL = "jugadores/"
@Injectable()
export class PlayerService {

  constructor(private http: HttpClient) { }

  existPlayerEmail(email:string){
    return this.http.get(BASE_URL + "validar/" + email)
    .map(
      response => response,
      error => console.error(error)
    )
  }
}
