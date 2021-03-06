import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { DialogService } from '../../services/dialog.service';
import { EventService } from '../../services/events.service';
import { PlayerDataService } from '../../services/player-data.service';
import { TeamService } from '../../services/team.service';
import { PlayerService } from '../../services/player.service';

import  { Player } from '../../models/player.model';

const DIALOG_WIDTH = "400px";
const DIALOG_HEIGHT = "400px";

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  modify: boolean;

  constructor(public userService: UserService, private dialogService : DialogService, private eventService: EventService, private playerDataService: PlayerDataService,
  private teamService: TeamService, private playerService: PlayerService) {
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
            this.eventService.saveChanges.emit();

            if(this.playerDataService.hasErrors()){
              throw new Error();
            }
           
            this.eventService.modifyTeam.emit();

            let requestBody = this.requestBodyMapping();

            this.teamService.updateTeam(this.userService.getUserTeam().id, requestBody).subscribe(
              response => {
                this.playerDataService.playerImages.forEach(data => {
                  this.playerService.updatePlayerImage(this.playerDataService.getPlayerById(data.id).dni, data.file).subscribe(
                    response => this.eventService.imageSaved.emit(),
                    error =>{
                      console.log(error);
                    } 
                  );
                });
                this.userService.generateUserData();
                this.dialogService.openDialog("Guardando cambios", "Actualizando datos del equipo...", false, false, true, DIALOG_WIDTH, DIALOG_HEIGHT);
                setTimeout(() =>{
                  this.dialogService.closeDialog();
                }, 2000);
              },
              error =>{
                this.dialogService.openDialog("Error", "No se ha podido actualizar el equipo. ERROR_CODE: " + error, true, false, false, DIALOG_WIDTH, DIALOG_WIDTH);
              }
            );
            
            this.modify = false;
          } catch(error) {
            console.error(error);
            this.dialogService.openDialog("Error", "Compruebe que todos los campos son correctos. ERROR_CODE: " + error, true, false, false, DIALOG_WIDTH, DIALOG_WIDTH);
          }
          
        }
      }
    );
  }

  undoPlayerRemove(){
    this.playerDataService.undoRemove();
  }

  requestBodyMapping(){
    let requestBody = {
      newPlayers: this.playerDataService.playersAdded,
      modifyPlayers: this.playerDataService.playersModify,
      removedPlayers: this.playerDataService.playersRemovedIds
    };

    return requestBody;
  }

}
