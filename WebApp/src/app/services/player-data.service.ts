import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';

@Injectable()
export class PlayerDataService {

  teamPlayers: Array<Player>;
  playerRemoved: Array<Player>;

  constructor() { }

}
