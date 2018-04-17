import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

import { UserService } from '../../services/user.service';
import { TeamService } from '../../services/team.service';
import { Resolve } from '@angular/router';


@Component({
  selector: 'app-team-creator',
  templateUrl: './team-creator.component.html',
  styleUrls: ['./team-creator.component.css']
})
export class TeamCreatorComponent implements OnInit {

  private teamError: boolean = false;
  private teamName: string;
  private inputTeamName;

  constructor(private userService: UserService, private teamService: TeamService) {
    this.inputTeamName = new FormControl('',  [Validators.required], this.teamNameValidator.bind(this));
  }

  changeEvent(data){
    this.teamName = data;
  }

  teamErrorMessage(){
    return this.inputTeamName.hasError('required') ? "Este campo es obligatorio" : this.inputTeamName.hasError('teamNameError') ? "Nombre de equipo ya en uso" : "";
  }

  teamNameValidator(control:FormControl):Promise<any>{
    if(this.teamName != "" && this.teamName != undefined){
      const promise = new Promise<any>(
        (resolve, reject) => {
            this.teamService.existTeam(this.teamName, this.userService.getUserLogged().liga).subscribe(
            (response: Response) => {
              resolve(null);
            },
            (error:Response) => {
              resolve({'teamNameError': true});
            }
          )   
        }
      );
      return promise;
    }
  }



  ngOnInit() {
  }

}
