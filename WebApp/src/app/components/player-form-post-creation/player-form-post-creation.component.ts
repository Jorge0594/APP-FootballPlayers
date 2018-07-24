import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { environment } from '../../../environments/environment';

import { PlayerDataService } from '../../services/player-data.service';
import { EventService } from '../../services/events.service';

@Component({
  selector: 'app-player-form-post-creation',
  templateUrl: './player-form-post-creation.component.html',
  styleUrls: ['./player-form-post-creation.component.css']
})
export class PlayerFormPostCreationComponent implements OnInit {

  @Input() player: Player;
  private urlImages:any;


  constructor(private playerDataService: PlayerDataService, private eventService: EventService) {}

  ngOnInit() {
    this.urlImages = environment.apiImages + this.player.fotoJugador;

    this.eventService.changePlayerImage.subscribe(event => {
      this.urlImages = this.playerDataService.getImageById(this.player.id);
    });
  }

  loadImageError(){
    this.urlImages = "assets/images/defaultProfile.jpg";
  }

}
