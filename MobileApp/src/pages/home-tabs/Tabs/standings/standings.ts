import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { HttpClient } from '../../../../app/services/httpClient.service';
import { UserService } from  '../../../../app/services/user.service';
import { TeamService } from '../../../../app/services/team.service';
import { PlayerService } from '../../../../app/services/player.service';
import { MapsPage } from '../../../maps/maps';

@Component({
  selector: 'page-home',
  templateUrl:'standings.html'
})
export class TabStandings {

  private userMatches: any;
  private team: any;
  private delegate: any;//player

  constructor(public navCtrl: NavController, private navParams :NavParams, private http:HttpClient, private userService: UserService, private teamService: TeamService, private playerService: PlayerService, private modalController: ModalController) {
    if(this.navParams.data[0] == 'team'){
        this.team = userService.getUserTeam();
        this.playerService.getPlayerById(this.team.delegado).subscribe(
          response => {
            this.delegate = response
          }
        )
    } else if (this.navParams.data[0] == 'teamsList'){
        this.teamService.getPlayerTeamById(this.navParams.data[1]).subscribe(
          team =>{
            this.team = team;
            this.playerService.getPlayerById(team.delegado).subscribe(
              response => {
                this.delegate = response
              }
            )
          }
        );
    }
  }

  viewGoogleMaps(){
    let mapModal;
    if(this.team.estadioEquipo){
      mapModal = this.modalController.create(MapsPage, {latitude: this.team.estadioEquipo.latitud, longitude: this.team.estadioEquipo.longitud})
    } else {
      mapModal = this.modalController.create(MapsPage, {latitude: undefined, longitude: undefined});
    }

    mapModal.present();
  }

  
}


