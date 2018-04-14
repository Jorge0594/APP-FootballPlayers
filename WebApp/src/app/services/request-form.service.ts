import { Injectable } from '@angular/core';
import { HttpClient } from './httpClient.service';
import { RequestAccess } from '../models/requestAccess.model';

const BASE_URL = "solicitudes";
@Injectable()
export class RequestFormService {

  constructor(private http: HttpClient) { }

  sendRequest(requestForm: RequestAccess){
    return this.http.postWithoutAuth(BASE_URL, requestForm)
    .map(
      response => response,
      error => console.error(error)
    )
  }

  existEmail(email:string){
    return this.http.get(BASE_URL + "/email")
    .map(
      response => response,
      error => console.error(error)
    )
  }
}
