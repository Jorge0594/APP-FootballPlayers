import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, FormBuilder } from '@angular/forms';

import { ComponentService } from '../../services/component.service';
import { PlayerService } from '../../services/player.service';

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
  playerImage: File;
  validationError: boolean;
  controls: FormGroup;

  private emailInputValue: string;
  private dniInputValue: string;
  private dorsalInputValue: number;
  private positionInputValue:string;




  constructor(private formBuilder: FormBuilder, private componentService: ComponentService, private playerService: PlayerService) {
    this.check = false;
    this.captain = false;
    this.validationError = true;
    this.player = new Player();

    this.controls = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email], this.validatorEmail.bind(this)],
      dni: ['', [Validators.required], this.validatorDNI.bind(this)],
      position: ['', Validators.required],
      birthplace: ['', Validators.required],
      nacionality: ['', Validators.required],
      dorsal: ['', [Validators.required, Validators.min(0), Validators.max(99)], this.validatorDorsal.bind(this)]
    });
  }

  ngOnInit() {
  }

  imageChanged(fileInput: any) {

    this.playerImage = fileInput.target.files[0];
    console.log("Nombre de la foto: " + this.playerImage.name);
    this.player.fotoJugador = this.playerImage.name;

  }

  getDate(date: string) {
    this.player.fechaNacimiento = date;
  }

  getValue(from: string) {
    switch (from) {
      case "name":
        this.player.nombre = this.controls.value.name;
        break;
      case "lastname":
        this.player.apellidos = this.controls.value.lastname;
        break;
      case "email":
        this.player.email = this.emailInputValue;
        break;
      case "dni":
        this.player.dni = this.dniInputValue;
        break;
      case "position":
        this.player.posicion = this.positionInputValue;
        break;
      case "birthplace":
        this.player.lugarNacimiento = this.controls.value.birthplace;
        break;
      case "nacionality":
        this.player.nacionalidad = this.controls.value.nacionality;
        break;
      case "dorsal":
        this.player.dorsal = this.dorsalInputValue;
        break;
    }
  }

  getCheckValue(event) {
    this.player.capitan = this.captain;
  }

  getPlayer() {
    return this.player;
  }

  inputErrors(from: string) {
    let errMessage: string = ""
    switch (from) {
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
          this.controls.get('email').hasError('email') ? "Email no valido" :
            this.controls.get('email').hasError('duplicateEmail') ? "Email en uso" : "";
        break;
      case "dorsal":
        errMessage = this.controls.get('dorsal').hasError('required') ? "Campo obligatorio" :
          this.controls.get('dorsal').hasError('duplicateDorsal') ? "Dorsal ya asignado" : "";
        break;
      case "dni":
        errMessage = this.controls.get('dni').hasError('required') ? "Campo obligatorio" :
          this.controls.get('dni').hasError('duplicateDNI') ? "DNI en uso" : "";
        break;
      case "position":
        errMessage = this.controls.get('position').hasError('required') ? "Campo obligatorio" : "";
        break;
      case "birthplace":
        errMessage = this.controls.get('birthplace').hasError('required') ? "Campo obligatorio" : "";
        break;
      case "nacionality":
        errMessage = this.controls.get('position').hasError('required') ? "Campo obligatorio" : "";
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
        this.playerService.existPlayerEmail(this.emailInputValue).subscribe(
          response => {
            resolve(null);
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
        this.playerService.existDNIPlayer(this.dniInputValue).subscribe(
          response => {
            resolve(null);
          },
          error => {
            resolve({ 'duplicateDNI': true });
          }
        );
      }
    );
    return promise;
  }

}
