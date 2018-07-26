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


  constructor(private playerDataService: PlayerDataService, private eventService: EventService) {
  }

  ngOnInit() {

    this.eventService.changePlayerImage.subscribe(event => {
      if(event == this.player.id)
        this.urlImages = this.playerDataService.getImageById(this.player.id);
    });

    this.urlImages = environment.apiImages + this.player.fotoJugador;

   
  }

  loadImageError(){
    this.urlImages = "assets/images/defaultProfile.jpg";
  }

}
