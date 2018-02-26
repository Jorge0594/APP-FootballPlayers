import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';

import { HttpClient } from './httpClient.service';
import { TeamService } from './team.service';
import { LeagueService } from './league.service';
import { MatchService } from './match.service';
import { SanctionService } from './sanction.service';
import 'rxjs/Rx';

@Injectable()
export class UserService{
    private user: any;
    private userTeam: any;
    private userLeague: any;
    private userLeaguePlayers: any;
    private userMatches: any;
    private leagueMaches: any;
    private activeSanctions:any;
    private rounds: number [] = [];

    constructor(private http: HttpClient, private teamService:TeamService,
        private matchService: MatchService, private leagueService: LeagueService, private sanctionService: SanctionService ){}


    generateUserData(){
        return this.http.get("jugadores/usuario").subscribe(
            response => {
                this.user = response;
                this.teamService.getPlayerTeamById(response.equipo).subscribe(
                    team =>{
                        if(team != null || team != undefined){
                            this.userTeam = team;
                            this.leagueService.getLeagueByName(team.liga).subscribe(
                                league =>{
                                    this.userLeague = league;
                                    for(let i = 1; i<= ((league.clasificacion.length - 1) * 2); i++){
                                        this.rounds.push(i);
                                    };
                                    console.log(this.userLeague);
                                }
                            )
                            //REFACTOR!!!!
                            /*this.leagueService.getStandings(team.liga).subscribe(
                                league =>{
                                    this.userLeague = league;
                                    for(let i = 1; i<= ((league.length - 1) * 2); i++){
                                        this.rounds.push(i);
                                    };
                                }
                            );

                            this.leagueService.getTopGoals(team.liga).subscribe(
                                top => this.userLeaguePlayers = top
                            );*/
                            /*this.matchService.getMatchByLeague(team.liga).subscribe( //Unnecesary queries
                                leagueMatches => this.leagueMaches = leagueMatches
                            );
                            this.matchService.getMatchTeamById(response.equipo).subscribe(
                                matches => this.userMatches = matches
                            );*/
                        };
                    }
                )
                this.sanctionService.getActivePlayerSanctions(response.id).subscribe(
                    sanctions =>{this.activeSanctions = sanctions; console.log(this.activeSanctions)} 
                );
            },
            error => console.error(error)
        )
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
        this.leagueMaches = null;
        this.rounds = [];
    }
}