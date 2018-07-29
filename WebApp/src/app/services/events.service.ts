import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventService {

  changeNavbar = new EventEmitter<any>();
  checkPlayerComponent = new EventEmitter<any>();
  changePlayerImage = new EventEmitter<any>();
  imageSaved = new EventEmitter<any>();
  saveChanges = new EventEmitter<any>();
  modifyTeam = new EventEmitter<any>();

  constructor() { }


  

}
