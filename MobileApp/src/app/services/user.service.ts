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
    private leagueGroups: any;
    private currentGroup: string;

    constructor(private http: HttpClient, private teamService:TeamService, private leagueService: LeagueService, private sanctionService: SanctionService ){}


    generateUserData(){
        return this.http.get("jugadores/usuario").subscribe(
            response => {
                this.user = response;
                
                this.teamService.getPlayerTeamById(response.equipo).subscribe(
                    team =>{
                        if(team != null || team != undefined){
                            this.userTeam = team;
                        };

                        this.currentGroup = team.grupo;

                        this.leagueService.getStandings(team.grupo.idGrupo).subscribe(
                            group => {
                                this.userLeague = group;

                                let groupLength = group.length % 2 == 0 ? (group.length * 2) - 1 : group.length * 2;

                                for(let i = 0; i < groupLength; i++){
                                    this.rounds.push(i + 1);
                                }
                            }
                        );
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

    getCurrentGroup(){
        return this.currentGroup;
    }

    getLeagueGroups(){
        return this.leagueGroups;
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