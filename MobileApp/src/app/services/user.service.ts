import { Injectable } from '@angular/core';

import { HttpClient } from './httpClient.service';
import { TeamService } from './team.service';
import { LeagueService } from './league.service';
import { SanctionService } from './sanction.service';

import { environment } from '../../enviroments/environment';
import 'rxjs/Rx';

@Injectable()
export class UserService{

    private user: any;
    private userTeam: any;
    private userLeague: any;
    private leagueGoals: any;
    private userLeaguePlayers: any;
    private userMatches: any;
    private activeSanctions:any;
    private rounds: number [] = [];

    constructor(private http: HttpClient, private teamService:TeamService, private leagueService: LeagueService, private sanctionService: SanctionService ){}


    generateUserData(){
        return this.http.get("jugadores/usuario").subscribe(
            response => {
                this.user = response;
                this.leagueService.getStandings(response.liga).subscribe(
                    league => {
                        this.userLeague = league;
                        for(let i = 0; i< (league.length - 1)* 2 ; i++){
                            this.rounds.push(i + 1);
                        }
                    }
                );
                this.teamService.getPlayerTeamById(response.equipo).subscribe(
                    team =>{
                        if(team != null || team != undefined){
                            this.userTeam = team;
                        };
                    }
                )
                this.sanctionService.getActivePlayerSanctions(response.id).subscribe(
                    sanctions => this.activeSanctions = sanctions
                );
            },
            error => console.error(error)
        )
    }

    setleagueGoals(goals: any){
        this.leagueGoals = goals;
    }

    getLeagueGoals(){
        return this.leagueGoals;
    }

    getBaseURL(){
        return environment.api;
    }

    getBaseURLforImages(){
        return environment.imagesUrl;
    }

    isLogged(){
        return this.http.isLogged();
    }

    getUserLogged(){
        return this.user;
    }

    getUserTeam(){
        return this.userTeam;
    }

    getUserLeague(){
        return this.userLeague;
    }

    getUserMatches(){
        return this.userMatches;
    }

    getRounds(){
        return this.rounds;
    }

    getTopGoals(){
        return this.userLeaguePlayers;
    }

    getActiveSanctions(){
        return this.activeSanctions;
    }

    logout(){
        this.user = null;
        this.userTeam = null;
        this.userLeague = null;
        this.userLeaguePlayers = null;
        this.userMatches = null;
        this.rounds = [];
        this.leagueGoals = null;
        this.activeSanctions = null;
    }
}