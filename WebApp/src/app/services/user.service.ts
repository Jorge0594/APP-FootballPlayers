import { Injectable } from '@angular/core';

import { HttpClient } from './httpClient.service';
import { TeamService } from './team.service';
import { ComponentService } from './component.service';
import { PlayerService } from './player.service';

import { Team } from '../models/team.model';
import { Observer } from 'rxjs/Rx';

import 'rxjs/Rx';


@Injectable()
export class UserService{

    private userTeam:Team;
    private userTeamImage: File;
    private user:any;

    constructor(private http: HttpClient, private teamService: TeamService, private componentService: ComponentService, private playerService: PlayerService){}

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

    setUserTeamImage(img: File){
        this.userTeamImage = img;
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
                console.log(this.user);
                if(this.user.equipoId != "" || this.user.equipoId){
                    this.teamService.getTeamById(this.user.equipoId).subscribe(
                        team =>{
                            this.userTeam = team;
                            
                            if(this.componentService.getComponents() != null){
                                console.log("Entro en envio de fotos");
                                console.log("Numero de jugadores " + this.userTeam.plantillaEquipo.length);

                                this.teamService.updateTeamImage(team.id, this.userTeamImage).subscribe(
                                    response => response
                                )

                                for (var i = 0; i < this.userTeam.plantillaEquipo.length; i++){
                                    console.log("Jugador imagen: " + this.componentService.getPlayersImages()[i].image);
                                    if(this.componentService.getPlayersImages()[i].image != null){
                                        this.playerService.updatePlayerImage(this.userTeam.plantillaEquipo[i].id, this.componentService.getPlayersImages()[i].image)
                                        .subscribe(
                                            response => response
                                        );
                                    }
                                }
                            }
                        } 
                    )
                }
            }
        )
    }
}