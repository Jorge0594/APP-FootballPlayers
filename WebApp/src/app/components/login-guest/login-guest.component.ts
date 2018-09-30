import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DialogComponent } from '../dialog/dialog.component';

import { LoginService } from '../../services/login.service';
import { DialogService } from '../../services/dialog.service';
import { UserService } from '../../services/user.service';
import { EventService } from '../../services/events.service';

const DIALOG_WIDTH = "400px";
const DIALOG_HEIGHT = "400px";

@Component({
  selector: 'app-login-guest',
  templateUrl: './login-guest.component.html',
  styleUrls: ['./login-guest.component.css']
})

export class LoginGuestComponent implements OnInit {

  hide: boolean = true;
  userInput = new FormControl('', Validators.required);
  passwordInput = new FormControl('', Validators.required);
  showSpinner:boolean;
  

  constructor(private loginService: LoginService, private dialogService: DialogService,
     private userService: UserService, private eventService: EventService, private router:Router) {
     
      this.showSpinner = false;
    
  }

  ngOnInit() {
  }

  getUserErrorMessage(){
      return this.userInput.hasError('required') ? "Por favor introduzca su usuario" : "Por favor introduzca un usuario valido";
  }

  getPasswordErrorMessage(){
    return this.passwordInput.hasError('required') ? "Por favor introduzca su contraseña" : "Por favor introduzca una contraseña valida";
  }

  login(user:string, password:string){
      this.loginService.login(user, password).subscribe(
        response => {
          this.userService.generateUserData();
          this.dialogService.openDialog("Iniciando sesión", "Accediendo a la aplicación...", false, false, true, DIALOG_WIDTH, DIALOG_HEIGHT);
          setTimeout(()=>{
            this.dialogService.closeDialog();
            this.eventService.changeNavbar.emit('login');
            this.router.navigateByUrl('/equipo');
          }, 2000);
        },
        error => {
          const dialogRef = this.dialogService.openDialog("Error", "Usuario o contraseña incorrectos", true, false, false, DIALOG_WIDTH, DIALOG_HEIGHT);
        }
      )
  }


}
