import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventService {

  changeNavbar = new EventEmitter<any>();

  constructor() { }


  

}
