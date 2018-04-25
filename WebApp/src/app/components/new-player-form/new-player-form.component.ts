import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, FormBuilder } from '@angular/forms';

import { ComponentService } from '../../services/component.service';
import { PlayerService } from '../../services/player.service';

import { Player } from '../../models/player.model';
import { filter } from 'rxjs/operators';


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
  email: string;
  playerImage: File;
  validationError: boolean;

  private controls:FormGroup;


  
  constructor(private formBuilder:FormBuilder, private componentService: ComponentService, private playerService: PlayerService) {
    this.check = false;
    this.captain = false;
    this.validationError = true;
    this.player = new Player();
    
    this.controls = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate:['', Validators.required],
      email: ['', [Validators.required, Validators.email], this.validatorEmail.bind(this)],
      dni:['', Validators.required],
      posicion:['', Validators.required],
      birthplace: ['', Validators.required],
      nacionality:['', Validators.required],
      dorsal: ['',[Validators.required, Validators.min(0), Validators.max(99)], this.validatorDorsal.bind(this)]
    });
  }

  ngOnInit() {
  }

  imageChanged(fileInput:any){

   this.playerImage = fileInput.target.files[0];
   this.player.fotoJugador = this.playerImage.name;

  }

  getValue(data:any, from:string){
    //console.log(this.player.toString());
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

  inputErrors(from:string){
    let errMessage:string = ""
    switch(from){
      case "name":
        errMessage = this.controls.get('name').hasError('required') ? "Campo obligatorio" : "";
        break;
      case "lastname":
        errMessage = this.controls.get('lastname').hasError('required') ? "Campo obligatorio" : "";
        break;
      case "birthdate":
        errMessage = this.controls.get('birthdate').hasError('required') ? "Campo obligatorio" : "";
        break;
      case "email":
        errMessage = this.controls.get('email').hasError('required') ? "Campo obligatorio" :
                   this.controls.get('email').hasError('email') ? "Email no valido":
                   this.controls.get('email').hasError('duplicateEmail') ? "Email en uso" : "";
        break;
      case "dorsal":
        errMessage = this.controls.get('dorsal').hasError('required') ? "Campo obligatorio" :
                     this.controls.get('dorsal').hasError('duplicateDorsal') ? "Dorsal ya asignado" : "";
        break;
    }

    return errMessage;
  }

  validatorDorsal(formControl:FormControl): Promise<any>{
    console.log("validador de dorsal");
    const promise = new Promise<any>(
      (resolve, reject)=>{
          let player = this.componentService.getComponents()
                                        .filter(comp => comp.instance.player.dorsal == this.player.dorsal);
          if(player.length > 1){
            resolve({'duplicateDorsal': true})
          } else {
            resolve(null);
          }   
        });  
        return promise;                                 
  }

  validatorEmail(formControl:FormControl):Promise<any>{
    console.log("validador de email: " +  this.player.email);
    const promise = new Promise<any>(
      (resolve, reject)=>{
        this.playerService.existPlayerEmail(this.player.email).subscribe(
          response => {
            resolve(null);
          },
          error => {
            console.log(error);
            resolve({'duplicateEmail': true});
          }
        )
      }
    );
    return promise;
  }

}
