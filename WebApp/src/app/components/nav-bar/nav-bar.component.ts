import { Component, OnInit, EventEmitter, Input } from '@angular/core';

import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { EventService } from '../../services/events.service';
import { LoginService } from '../../services/login.service';
import { DialogService } from '../../services/dialog.service';

const DIALOG_WIDTH = "400px";
const DIALOG_HEIGHT = "400px";
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private options: { left: Array<{ name: string, path: string }>, right: Array<{ name: string, path: string }> };

  constructor(private userService: UserService, private eventService: EventService, private loginService: LoginService, private dialogService: DialogService) {
    
  }

  ngOnInit() {
    this.createNavbar();

    this.eventService.changeNavbar.subscribe(() => {
      this.createNavbar();
    });
  }

  createNavbar() {
    if (this.userService.isUserLogged()) {
      this.options = {
        left: [
          { name: "Mi equipo", path: "/equipo" },
          { name: "Crear equipo", path: "/crearEquipo" }
        ],
        right: [
          { name: "Cerrar sesión", path: "" }
        ]
      };
    } else {
      this.options = {
        left: [
          { name: "Iniciar Sesión", path: "/iniciarSesion" },
          { name: "Solicitar usuario", path: "/solicitarUsuario" }
        ],
        right: [
          { name: "", path: "" }
        ]
      }
    }
  }

  logout(){
    
    this.dialogService.openDialog("Cierre de sesión", "Cerrando sesión...", false, false, true, DIALOG_WIDTH, DIALOG_HEIGHT);

    setTimeout(()=>{
      this.loginService.logout();
      this.dialogService.closeDialog();
    }, 2000);
  }

}
