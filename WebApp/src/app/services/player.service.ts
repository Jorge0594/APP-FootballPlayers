import { Injectable } from '@angular/core';

import { HttpClient } from './httpClient.service';

const BASE_URL = "jugadores/"
@Injectable()
export class PlayerService {

  constructor(private http: HttpClient) { }

  existPlayerEmail(email:string, id:string){
    return this.http.get(BASE_URL + "validar/email/" + email + "/" + id)
    .map(
      response => response,
      error => error
    )
  }

  existDNIPlayer(dni:string, id:string){
    return this.http.get(BASE_URL + "validar/dni/" + dni + "/" + id)
    .map(
      response => response,
      error => error
    )
  }

  updatePlayerImage(id:string, img: File){
    let formData = new FormData();
    formData.append("File", img);

    return this.http.put((BASE_URL + id + "/foto"), formData)
    .map(
      response => response,
      error => console.error(error)
    )
  }
}
