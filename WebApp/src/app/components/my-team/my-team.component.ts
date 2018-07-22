import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { DialogService } from '../../services/dialog.service';

import { Player } from '../../models/player.model';
import { EventService } from '../../services/events.service';

const DIALOG_WIDTH = "400px";
const DIALOG_HEIGHT = "400px";

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  private modify: boolean;
  private id: number;
  private teamPlayersCopy: Array<Player>;
  private playersRemoved: Array<Player>;
  private playersRemovedIds: Array<String>;
  private playersAdded: Array<Player>;
  private playersModify: Array<Player>;

  constructor(private userService: UserService, private dialogService : DialogService, private eventService: EventService) {
    
  }

  ngOnInit() {
    this.id = 0;
    this.modify = false;

    this.initializeModifyVariables();

    this.eventService.checkPlayerComponent.subscribe((event)=>{
      let index = this.playersRemoved.indexOf(event);
      if(index > -1){
        this.playersRemovedIds.splice(index); 
      } else {
        this.playersRemovedIds.push(event);
      }
    })
  }

  modifyTeam(){
    this.modify = true;
    this.initializeModifyVariables();
  }

  addPlayer(){
    let newPlayer = new Player();
    newPlayer.id = String(this.id);
    this.id++;

    this.teamPlayersCopy.push(newPlayer);
    this.playersAdded.push(newPlayer);
  }

  removePlayer(){
    let players = this.teamPlayersCopy;

    let removed = players.filter(p => this.playersRemovedIds.indexOf(p.id) > -1);
    this.playersRemoved = this.playersRemoved.concat(removed);

    players = players.filter(p => this.playersRemovedIds.indexOf(p.id) == -1);

    this.teamPlayersCopy = players;
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
          this.dialogService.openDialog("Guardando cambios", "Actualizando datos del equipo...", false, false, true, DIALOG_WIDTH, DIALOG_HEIGHT);

          setTimeout(() =>{
            this.dialogService.closeDialog();
          }, 2000)
        }
      }
    );

    this.modify = false;
  }

  initializeModifyVariables(){
    this.playersAdded = [];
    this.playersModify = [];
    this.playersRemoved = [];
    this.playersRemovedIds = [];
    this.teamPlayersCopy = [].concat(this.userService.getUserTeam().plantillaEquipo);
  }

}
