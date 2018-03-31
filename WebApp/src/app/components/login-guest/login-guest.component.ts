import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-guest',
  templateUrl: './login-guest.component.html',
  styleUrls: ['./login-guest.component.css']
})
export class LoginGuestComponent implements OnInit {

  private hide: boolean = true;
  private userInput = new FormControl('', Validators.required);
  private passwordInput = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit() {
  }

  getUserErrorMessage(){
      return this.userInput.hasError('required') ? "Por favor introduzca su usario" : "Por favor introduzca un usuario valido";
  }

  getPasswordErrorMessage(){
    return this.passwordInput.hasError('required') ? "Por favor introduzca su contraseña" : "Por favor introduzca una contraseña valida";
  }

  login(user:string, password:string){
    //call Login
  }


}
