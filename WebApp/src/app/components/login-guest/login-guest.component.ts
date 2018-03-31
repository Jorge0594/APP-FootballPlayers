import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-guest',
  templateUrl: './login-guest.component.html',
  styleUrls: ['./login-guest.component.css']
})
export class LoginGuestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(user:string, password:string){
    //call Login
  }


}
