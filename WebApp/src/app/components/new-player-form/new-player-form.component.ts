import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, FormBuilder } from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import { ComponentService } from '../../services/component.service';
import { PlayerService } from '../../services/player.service';
import { EventService } from '../../services/events.service';


import { Player } from '../../models/player.model';
import { filter } from 'rxjs/operators';
import { reject } from 'q';


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
  @Input() inputPlayer: Player;
  playerImage: File;
  validationError: boolean;
  inputControls: FormGroup;
  dateControl: any;

  private emailInputValue: string;
  private dniInputValue: string;
  private dorsalInputValue: number;
  private positionInputValue: string;

  constructor(private formBuilder: FormBuilder, private componentService: ComponentService, private playerService: PlayerService,
     private dateAdapter: DateAdapter<any>, private eventService: EventService) {

    this.dateAdapter.setLocale('es');
    this.check = false;
    this.captain = false;
    this.validationError = true;
    this.player = new Player();

    this.inputControls = this.formBuilder.group({
      name: [''],
      lastname: [''],
      birthdate: [''],
      email: [''],
      dni: [''],
      position: [''],
      birthplace: [''],
      nacionality: [''],
      dorsal: ['']
    });
  }

  ngOnInit() {

    if(this.inputPlayer && !this.playerIsEmpty(this.inputPlayer)){
      if(this.inputPlayer.fechaNacimiento)
        this.dateControl = new FormControl(new Date(this.reformatDate(this.inputPlayer.fechaNacimiento)));
      
      this.positionInputValue = this.inputPlayer.posicion;
      this.player.copy(this.inputPlayer);
    } else {
      this.enableValidators();
    }
    
  }

  imageChanged(fileInput: any) {

    this.playerImage = fileInput.target.files[0];
    
    this.player.fotoJugador = this.playerImage.name;

  }

  getDate(date: string) {
    this.player.fechaNacimiento = date;
  }

  getValue(from: string) {
    switch (from) {
      case "name":
        this.player.nombre = this.inputControls.value.name;
        if(this.inputPlayer && !this.inputControls.get('name').validator)
          this.inputControls.get('name').setValidators(Validators.required);
        break;
      case "lastname":
        this.player.apellidos = this.inputControls.value.lastname;
        if(this.inputPlayer && !this.inputControls.get('lastname').validator)
          this.inputControls.get('lastname').setValidators(Validators.required);
        break;
      case "email":
        this.player.email = this.emailInputValue;
        if(this.inputPlayer && !this.inputControls.get('email').validator && this.emailInputValue){
          this.inputControls.get('email').setValidators([Validators.required, Validators.email]);
          this.inputControls.get('email').setAsyncValidators(this.validatorEmail.bind(this));
        }
        break;
      case "dni":
        this.player.dni = this.dniInputValue;
      
        if(this.inputPlayer && !this.inputControls.get('dni').validator && this.dniInputValue){
          this.inputControls.get('dni').setValidators(Validators.required);
          this.inputControls.get('dni').setAsyncValidators( this.validatorDNI.bind(this));
        }
        break;
      case "position":
        this.player.posicion = this.positionInputValue;
        if(this.inputPlayer && !this.inputControls.get('position').validator)
          this.inputControls.get('position').setValidators(Validators.required);
        break;
      case "birthplace":
        this.player.lugarNacimiento = this.inputControls.value.birthplace;
        if(this.inputPlayer && !this.inputControls.get('birthplace').validator)
          this.inputControls.get('birthplace').setValidators(Validators.required);
        break;
      case "nacionality":
        this.player.nacionalidad = this.inputControls.value.nacionality;
        if(this.inputPlayer && !this.inputControls.get('nacionality').validator)
          this.inputControls.get('nacionality').setValidators(Validators.required);
        break;
      case "dorsal":
        this.player.dorsal = this.dorsalInputValue;
        if(this.inputPlayer && !this.inputControls.get('dorsal').validator && this.dorsalInputValue)
          this.inputControls.get('dorsal').setValidators([Validators.required, Validators.min(0), Validators.max(99)]);
        break;
    }
  }

  getCheckValue(event) {
    this.player.capitan = this.captain;
  }

  getPlayer() {
    return this.player;
  }

  enableValidators(){
    this.inputControls.get('name').setValidators(Validators.required);
    this.inputControls.get('lastname').setValidators(Validators.required);
    this.inputControls.get('birthdate').setValidators(Validators.required);
    this.inputControls.get('email').setValidators([Validators.required, Validators.email]);
    this.inputControls.get('email').setAsyncValidators(this.validatorEmail.bind(this));
    this.inputControls.get('dni').setValidators(Validators.required);
    this.inputControls.get('dni').setAsyncValidators( this.validatorDNI.bind(this));
    this.inputControls.get('position').setValidators(Validators.required);
    this.inputControls.get('birthplace').setValidators(Validators.required);
    this.inputControls.get('nacionality').setValidators(Validators.required);
    this.inputControls.get('dorsal').setValidators([Validators.required, Validators.min(0), Validators.max(99)]);
    this.inputControls.get('dorsal').setAsyncValidators(this.validatorDorsal.bind(this));

  }

  inputErrors(from: string) {
    let errMessage: string = "";

    switch (from) {
      case "name":
        errMessage = this.inputControls.get('name').hasError('required') ? "Campo obligatorio" : "";
        break;
      case "lastname":
        errMessage = this.inputControls.get('lastname').hasError('required') ? "Campo obligatorio" : "";
        break;
      case "birthdate":
        errMessage = this.inputControls.get('birthdate').hasError('required') ? "Campo obligatorio" : "";
        break;
      case "email":
        errMessage = this.inputControls.get('email').hasError('required') ? "Campo obligatorio" :
          this.inputControls.get('email').hasError('email') ? "Email no valido" :
            this.inputControls.get('email').hasError('duplicateEmail') ? "Email en uso" : "";
        break;
      case "dorsal":
        errMessage = this.inputControls.get('dorsal').hasError('required') ? "Campo obligatorio" :
          this.inputControls.get('dorsal').hasError('duplicateDorsal') ? "Dorsal ya asignado" : "";
        break;
      case "dni":
        errMessage = this.inputControls.get('dni').hasError('required') ? "Campo obligatorio" :
          this.inputControls.get('dni').hasError('duplicateDNI') ? "DNI en uso" : "";
        break;
      case "position":
        errMessage = this.inputControls.get('position').hasError('required') ? "Campo obligatorio" : "";
        break;
      case "birthplace":
        errMessage = this.inputControls.get('birthplace').hasError('required') ? "Campo obligatorio" : "";
        break;
      case "nacionality":
        errMessage = this.inputControls.get('nacionality').hasError('required') ? "Campo obligatorio" : "";
        break;
    }
    return errMessage;
  }

  validatorDorsal(formControl: FormControl): Promise<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        let player = this.componentService.getComponents()
          .filter(comp => comp.instance.player.dorsal == this.dorsalInputValue);
        if (player.length > 1 && this.dorsalInputValue != undefined) {
          resolve({ 'duplicateDorsal': true })
        } else {
          resolve(null);
        }
      });
    return promise;
  }

  validatorEmail(formControl: FormControl): Promise<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        this.playerService.existPlayerEmail(this.emailInputValue, this.inputPlayer ? this.inputPlayer.id : '').subscribe(
          response => {
            let player = this.componentService.getComponents()
              .filter(comp => comp.instance.player.email == this.emailInputValue);
            if (player.length > 1) {
              resolve({ 'duplicateEmail': true });
            } else {
              resolve(null);
            }

          },
          error => {
            resolve({ 'duplicateEmail': true });
          }
        )
      }
    );
    return promise;
  }

  validatorDNI(formControl: FormControl): Promise<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        this.playerService.existDNIPlayer(this.dniInputValue, this.inputPlayer ? this.inputPlayer.id : '').subscribe(
          response => {
            let player = this.componentService.getComponents()
              .filter(comp => comp.instance.player.dni == this.dniInputValue);

            if (player.length > 1) {
              resolve({ 'duplicateDNI': true });
            } else {
              resolve(null);
            }

          },
          error => {
            resolve({ 'duplicateDNI': true });
          }
        );
      }
    );
    return promise;
  }

  playerSelected(){
    if(this.inputPlayer)
      this.eventService.checkPlayerComponent.emit(this.inputPlayer.id);
  }

  //only works with the following format: dd/MM/yyyy
  reformatDate(date:string): string {
    let dateSplit = date.split("/");
    return dateSplit[2] + "/" +  dateSplit[1] + "/" + dateSplit[0];
  }

  playerIsEmpty(player: Player):boolean{
    return player.nombre == undefined && player.apellidos == undefined && player.fechaNacimiento == undefined && player.dni == undefined && player.email == undefined &&
      player.fotoJugador == undefined && player.equipo == undefined && player.liga == undefined && player.posicion == undefined && player.lugarNacimiento == undefined &&
        player.nacionalidad == undefined && player.dorsal == undefined && player.capitan == undefined;
  }

}
