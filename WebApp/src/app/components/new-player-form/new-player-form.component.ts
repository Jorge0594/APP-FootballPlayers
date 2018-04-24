import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, FormBuilder } from '@angular/forms';

import { Player } from '../../models/player.model';


@Component({
  selector: 'app-new-player-form',
  templateUrl: './new-player-form.component.html',
  styleUrls: ['./new-player-form.component.css']
})
export class NewPlayerFormComponent implements OnInit {

  private playerPositions = [
    "Portero", "Defensa", "Centrocampista", "Delantero"
  ];
  check: boolean;
  captain: boolean;
  player: Player
  playerImage: File;


  
  constructor() {
    this.check = false;
    this.captain = false;
    this.player = new Player();
  }

  ngOnInit() {
  }

  imageChanged(fileInput:any){

   this.playerImage = fileInput.target.files[0];
   this.player.fotoJugador = this.playerImage.name;

  }

  getValue(data:any, from:string){
    console.log(this.player.toString());
    switch(from){
      case "name":
        this.player.nombre = data;
        break;
      case "lastname":
        this.player.apellidos = data; 
        break;
      case "birthdate":
        this.player.fechaNacimiento = data;
        break;
      case "email":
        this.player.email = data;
        break;
      case "dni":
        this.player.dni = data;
        break;
      case "position":
        this.player.posicion = data;
        break;
      case "birthplace":
        this.player.lugarNacimiento = data;
        break;
      case "nacionality":
        this.player.nacionalidad = data;
        break;
      case "dorsal":
        this.player.dorsal = data;
        break;
    }
  }

  getCheckValue(event){
    this.player.capitan = this.captain;
  }

  getPlayer(){
    return this.player;
  }

}
