import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-player-form-post-creation',
  templateUrl: './player-form-post-creation.component.html',
  styleUrls: ['./player-form-post-creation.component.css']
})
export class PlayerFormPostCreationComponent implements OnInit {

  @Input() player: Player;
  private urlImages = environment.apiImages;

  constructor() {
   }

  ngOnInit() {
  }

}
