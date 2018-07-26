import { Injectable } from '@angular/core';

import { EventService } from '../services/events.service';

import { Player } from '../models/player.model';

@Injectable()
export class PlayerDataService {

  id:number = 0;
  teamPlayers: Array<Player> = [];
  playersRemoved: Array<Player> = [];
  playersRemovedIds: Array<string> = [];
  playersAdded: Array<Player> = [];
  playersModify: Array<Player> = [];
  playerImages: Array<{id:string, file:File, filePreview: any}> = [];

  imagesSaved:number = 0;

  constructor(private eventService: EventService) { 

    this.eventService.checkPlayerComponent.subscribe((event) => {

      let index = this.playersRemovedIds.indexOf(event);

      if(index > -1){
        this.playersRemovedIds.splice(index);
      } else {
        this.playersRemovedIds.push(event);
      }
    });

    this.eventService.imageSaved.subscribe(()=>{
      this.imagesSaved++;
      if(this.imagesSaved == this.playerImages.length)
        this.clearData();
    });

  }

  getImageById(id:string):any{
    return this.playerImages.find(img => img.id == id).filePreview;
  }

  addPlayerImage(id:string, file:File, filePreview:any){
    this.playerImages.push({id:id, file:file, filePreview:filePreview});
    this.eventService.changePlayerImage.emit(id);
  }

  setTeamPlayers(players: Array<Player>){
   this.teamPlayers =  this.teamPlayers.concat(players);
  }

  getPlayerById(id:string): Player{
    return this.teamPlayers.find(p => p.id == id);
  }

  clearData(){
    console.log("CLEAR DATA");
    this.teamPlayers = [];
    this.playersRemoved = [];
    this.playersRemovedIds = [];
    this.playersAdded = [];
    this.playersModify = [];
    this.playerImages = [];
  }

  addPlayer(){
    let newPlayer = new Player();
    newPlayer.id = String(this.id);

    this.id++;

    this.teamPlayers.push(newPlayer);
    this.playersAdded.push(newPlayer);
  }

  removePlayers(){
    let removed = this.teamPlayers.filter(p => this.playersRemovedIds.indexOf(p.id) > -1);

    this.playersRemoved = this.playersRemoved.concat(removed);

    this.teamPlayers = this.teamPlayers.filter(p => this.playersRemovedIds.indexOf(p.id) == -1);
  }

  removePlayerImage(id:string){
    this.playerImages = this.playerImages.filter(img => img.id != id);
  }



}
