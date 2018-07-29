import { Injectable } from '@angular/core';

import { EventService } from '../services/events.service';

import { Player } from '../models/player.model';

@Injectable()
export class PlayerDataService {

  id:number = 0;
  teamPlayers: Array<Player> = [];
  playersModify: Array<Player> = []; 
  playersRemoved: Array<Player> = [];
  playersRemovedIds: Array<string> = [];
  playersAdded: Array<Player> = [];
  playersErrors: Array<string> = [];
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

    this.eventService.modifyTeam.subscribe(() => {

      this.playersModify = this.playersModify.filter(p => this.playersAdded.indexOf(p) == -1);
      this.playersRemovedIds = this.playersRemovedIds.filter(id => this.playersRemoved.find(p => p.id == id));

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
   this.teamPlayers = this.copyPlayers(players);
   this.playersModify = this.teamPlayers;
  }

  getPlayerById(id:string): Player{
    return this.teamPlayers.find(p => p.id == id);
  }

  copyPlayers(players: Array<Player>):Array<Player>{
    let list: Array<Player> = [];

    players.forEach(p =>{
      let aux = new Player();
      aux.copy(p);
      list.push(aux);
    });

    return list;
  }

  clearData(){
    console.log("CLEAR DATA");
    this.teamPlayers = [];
    this.playersRemoved = [];
    this.playersRemovedIds = [];
    this.playersAdded = [];
    this.playersErrors = [];
    this.playerImages = [];
    this.playersModify = [];
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
    let removedIdsAux = [].concat(this.playersRemovedIds);

    this.removeErrorByList(removed);

    removedIdsAux = removedIdsAux.filter(id => this.playersAdded.find(p => p.id == id) == undefined)

    this.playersAdded = this.playersAdded.filter(p => this.playersRemovedIds.indexOf(p.id) == -1);
    this.playersRemoved = removed.concat(this.playersRemoved);
    this.teamPlayers = this.teamPlayers.filter(p => this.playersRemovedIds.indexOf(p.id) == -1);
    this.playersModify = this.playersModify.filter(p => this.playersRemovedIds.indexOf(p.id) == -1);
    this.playersRemovedIds = removedIdsAux;
  }

  removePlayerImage(id:string){
    this.playerImages = this.playerImages.filter(img => img.id != id);
  }

  removeError(id:string){
    let index = this.playersErrors.indexOf(id);

    if(index > -1)
      this.playersErrors.splice(index);
  }

  removeErrorByList(players: Array<Player>){
    players = this.teamPlayers.filter(p => this.playersRemovedIds.indexOf(p.id) > -1);

    players.forEach(p => {
      this.removeError(p.id);
    });
  }

  containsId(id:string, list: Array<any>){
    let elem = list.find(p => p.id == id);

    return elem == undefined;
  }

  undoRemove(){
    let player = this.playersRemoved.pop();

    this.playersRemovedIds = this.playersRemovedIds.filter(id => player.id != id);
    this.teamPlayers.push(player);
  }

  hasErrors(){
    return this.playersErrors.length > 0 ;
  }

}
