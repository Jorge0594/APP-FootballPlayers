import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { DialogService } from '../../services/dialog.service';
import { EventService } from '../../services/events.service';
import { PlayerDataService } from '../../services/player-data.service';

const DIALOG_WIDTH = "400px";
const DIALOG_HEIGHT = "400px";

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  private modify: boolean;

  constructor(private userService: UserService, private dialogService : DialogService, private eventService: EventService, private playerDataService: PlayerDataService) {
  }

  ngOnInit() {
    this.modify = false;
  }

  modifyTeam(){
    this.modify = true;
    this.playerDataService.clearData();
    this.playerDataService.setTeamPlayers(this.userService.getUserTeam().plantillaEquipo);
  }

  addPlayer(){
    this.playerDataService.addPlayer();
  }

  removePlayer(){
    this.playerDataService.removePlayers();
  }

  dontSaveChanges(){
    this.modify = false;
  }

  saveChanges(){
    //Logic of save changes
    this.dialogService.openDialog("Modificar equipo", "¿Desea guardar los cambios?", false, true, false, DIALOG_WIDTH, DIALOG_HEIGHT);

    this.dialogService.getResult().subscribe(
      response => {
        if(response == true){

          try{
            if(this.playerDataService.hasErrors()){
              throw new Error();
            }
            this.dialogService.openDialog("Guardando cambios", "Actualizando datos del equipo...", false, false, true, DIALOG_WIDTH, DIALOG_HEIGHT);
  
            setTimeout(() =>{
              this.dialogService.closeDialog();
            }, 2000)
  
            this.modify = false;
          } catch(error) {
            this.dialogService.openDialog("Error", "Compruebe que todos los campos son correctos", true, false, false, DIALOG_WIDTH, DIALOG_WIDTH);
          }
          
        }
      }
    );
  }

  undoPlayerRemove(){
    this.playerDataService.undoRemove();
  }

}
