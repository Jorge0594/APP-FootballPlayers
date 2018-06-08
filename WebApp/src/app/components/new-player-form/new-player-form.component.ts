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
  inputControls: FormGroup;

  private emailInputValue: string;
  private dniInputValue: string;
  private dorsalInputValue: number;
  private positionInputValue: string;

  constructor(private formBuilder: FormBuilder, private componentService: ComponentService, private playerService: PlayerService) {
    this.check = false;
    this.captain = false;
    this.validationError = true;
    this.player = new Player();

    this.inputControls = this.formBuilder.group({
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
    
    this.player.fotoJugador = this.playerImage.name;

  }

  getDate(date: string) {
    this.player.fechaNacimiento = date;
  }

  getValue(from: string) {
    switch (from) {
      case "name":
        this.player.nombre = this.inputControls.value.name;
        break;
      case "lastname":
        this.player.apellidos = this.inputControls.value.lastname;
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
        this.player.lugarNacimiento = this.inputControls.value.birthplace;
        break;
      case "nacionality":
        this.player.nacionalidad = this.inputControls.value.nacionality;
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
        errMessage = this.inputControls.get('position').hasError('required') ? "Campo obligatorio" : "";
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
        this.playerService.existDNIPlayer(this.dniInputValue).subscribe(
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

}
