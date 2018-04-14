import { Injectable } from '@angular/core';

import { HttpClient } from './httpClient.service';
import { TeamService } from './team.service';

import 'rxjs/Rx';

@Injectable()
export class UserService{

    private isLogged: boolean = false;
    private userTeam:any;
    private user:any;

    constructor(private http: HttpClient, private teamService: TeamService){}

    logout(){
        this.isLogged = false;
        this.userTeam = false;
        this.user = false;
    }

    isUserLogged(){
        return this.isLogged;
    }

    getUserLogged(){
        return this.user;
    }

    getUserTeam(){
        return this.userTeam;
    }

    generateUserData(){
        return this.http.get("usuariosTemporales/usuario").subscribe(
            response => {
                this.user = response;
                if(this.user.equipoId != "" || this.user.equipoId){
                    this.teamService.gettemaById(this.user.equipoId).subscribe(
                        team => this.userTeam = team
                    )
                }
            }
        )
    }
}