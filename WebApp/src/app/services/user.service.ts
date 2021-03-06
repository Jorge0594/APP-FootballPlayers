import { Injectable } from '@angular/core';

import { HttpClient } from './httpClient.service';
import { TeamService } from './team.service';
import { ComponentService } from './component.service';
import { PlayerService } from './player.service';

import { Team } from '../models/team.model';
import { Player } from '../models/player.model';

import { Observer } from 'rxjs';

import 'rxjs';


@Injectable()
export class UserService {

    private userTeam: Team;
    private userTeamImage: File;
    private user: any;

    constructor(private http: HttpClient, private teamService: TeamService, private componentService: ComponentService, private playerService: PlayerService) { }

    logout() {
        this.userTeam = null;
        this.user = null;
    }

    isUserLogged(): boolean {
        return this.http.isLogged();
    }

    getUserLogged(): any {
        return this.user;
    }

    setUserTeamImage(img: File) {
        this.userTeamImage = img;
    }

    getUserTeam(): Team {
        return this.userTeam;
    }

    setUserTeam(team: Team) {
        this.userTeam = team;
    }

    setTeamPlayers(players: Array<Player>) {
        this.userTeam.plantillaEquipo = players;
    }

    generateUserData() {
        return this.http.get("temporales/usuario").subscribe(
            response => {
                this.user = response;
                if (this.user.equipoId || this.user.equipoId != "") {
                    this.teamService.getTeamById(this.user.equipoId).subscribe(
                        team => {
                            this.userTeam = team;
                            if (this.userTeamImage) {
                                this.teamService.updateTeamImage(team.id, this.userTeamImage).subscribe(
                                    response => response
                                )
                            }
                        }
                    )
                }
            }
        )
    }
}