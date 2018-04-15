import { Component, OnInit, EventEmitter, Input } from '@angular/core';

import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { EventService } from '../../services/events.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private options: {left:Array<{name:string, path:string}>, right:Array<{name:string, path:string}>};

  constructor(private userService: UserService, private eventService: EventService) {
    this.createNavbar();

    this.eventService.changeNavbar.subscribe(()=>{
      this.createNavbar();
    })
   }

   createNavbar(){
    if(this.userService.isUserLogged()){
      this.options = {
        left: [
          {name: "Mi equipo", path: "/equipo"},
          {name: "Crear equipo", path: "/crearEquipo"}
        ],
        right: [
          {name: "Cerrar sesión", path: "/cerrarSesion"} 
        ]
      };
    } else {
      this.options = {
        left: [
          {name: "Iniciar Sesión", path: "/iniciarSesion"},
          {name: "Solicitar usuario", path: "/solicitarUsuario"}
        ],
        right: [
          {name: "", path: ""} 
        ]
      }
    }
   }

  ngOnInit() {
  }

}
