import { Component, OnInit, EventEmitter, Input } from '@angular/core';

import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { EventService } from '../../services/events.service';
import { LoginService } from '../../services/login.service';
import { DialogService } from '../../services/dialog.service';
import { PlayerDataService } from '../../services/player-data.service';
import { TeamDataService } from '../../services/team-data.service';
import { ComponentService } from '../../services/component.service';

const DIALOG_WIDTH = "400px";
const DIALOG_HEIGHT = "400px";
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  options: { left: Array<{ name: string, path: string }>, right: Array<{ name: string, path: string }> };

  constructor(private userService: UserService, private eventService: EventService, private loginService: LoginService, private dialogService: DialogService,
  private playerDataService: PlayerDataService, private teamDataService: TeamDataService, private componentService: ComponentService) {
    
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
      this.playerDataService.clearData();
      this.teamDataService.clearData();
      this.componentService.clearData();
      this.dialogService.closeDialog();
    }, 2000);
  }

}
