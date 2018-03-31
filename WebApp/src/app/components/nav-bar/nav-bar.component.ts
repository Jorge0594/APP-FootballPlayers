import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private options: {rigth:[{name:string, path:string}], left:[{name:string, path:string}]};
  
  constructor(private userService: UserService) {
    if(this.userService.isUserLogged()){
      this.options = {
        rigth: [
          {name: "Crear equipo", path: "/crearEquipo"},
          {name: "Mi equipo", path: "/equipo"}
        ],
        left: [
          {name: "Cerrar sesión", path: "/cerrarSesion"} 
        ]
      };
    } else {
      this.options = {
        rigth: [
          {name: "Iniciar Sesión", path: "/iniciarSesion"},
          {name: "Solicitar usuario", path: "/solicitarUsuario"}
        ],
        left: [
          {name: "", path: ""} 
        ]
      }
    }
   }

  ngOnInit() {
  }

}
