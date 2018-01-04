import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './httpClient.service';
import { TeamService } from './team.service';
import { LeagueService } from './league.service';
import { MatchService } from './match.service';
import 'rxjs/Rx';

@Injectable()
export class UserService{
    private user: any;
    private userTeam: any;
    private userLeague: any;
    private userMatches: any;

    constructor(private http: HttpClient, private teamService:TeamService,
        private matchService: MatchService, private leagueService: LeagueService){}


    generateUserData(){
        return this.http.get("jugadores/usuario").subscribe(
            response => {
                console.log("response");
                this.user = response;
                this.teamService.getPlayerTeamById(response.equipo).subscribe(
                    team =>{
                        this.userTeam = team;
                        this.leagueService.getStandings(team.liga).subscribe(
                            league => this.userLeague = league
                        )
                    }
                )
                this.matchService.getMatchTeamById(response.equipo).subscribe(
                    matches => this.userMatches = matches
                )
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
}