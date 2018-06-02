import { Injectable } from '@angular/core';

import { HttpClient } from './httpClient.service';
import { TeamService } from './team.service';
import { ComponentService } from './component.service';



import { Team } from '../models/team.model';
import { Observer } from 'rxjs/Rx';

import 'rxjs/Rx';


@Injectable()
export class UserService{

    private userTeam:Team;
    private user:any;

    constructor(private http: HttpClient, private teamService: TeamService, private componentService: ComponentService){}

    logout(){
        this.userTeam = null;
        this.user = null;
    }

    isUserLogged(): boolean{
        return this.http.isLogged();
    }

    getUserLogged(): any{
        return this.user;
    }

    getUserTeam(): Team{
        return this.userTeam;
    }

    setUserTeam(team: Team){
        this.userTeam = team;
    }

    generateUserData(){
        return this.http.get("temporales/usuario").subscribe(
            response => {
                this.user = response;
                if(this.user.equipoId != "" || this.user.equipoId){
                    this.teamService.getTeamById(this.user.equipoId).subscribe(
                        team =>{
                            this.userTeam = team;
                            if(this.componentService.getComponents()!= null){
                                for(var i = 0; i < this.userTeam.plantillaEquipo.length; i++){
                                    this.componentService.getPlayersImages()[i].id = this.userTeam.plantillaEquipo[i].id;
                                }
                            }
                        } 
                    )
                }
            }
        )
    }
}