import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { UserService } from './user.service';

const logoutRoutes = [
  "/iniciarSesion", "solicitarUsuario"
]

@Injectable()
export class RouterSecurityService implements CanActivate {

  constructor(private router:Router, private userService: UserService) { }

  canActivate(){
    console.log(this.router.url);
    if(!this.userService.isUserLogged()){
      this.router.navigateByUrl('/iniciarSesion');
    } 
    return this.userService.isUserLogged();
  }
}
