import { Injectable, ComponentRef } from '@angular/core';

import { Player } from '../models/player.model';

import { NewPlayerFormComponent } from '../components/new-player-form/new-player-form.component';
import { TeamDataService } from './team-data.service';

@Injectable()
export class ComponentService {

  private components: Array<ComponentRef<NewPlayerFormComponent>> = [];//data must be a "Player" type

  constructor(private teamData: TeamDataService){}

  addNewComponent(component: ComponentRef<NewPlayerFormComponent>){//rest to add player's photos
    this.components.push(component);
    this.teamData.addPlayer(component.instance.getPlayer());
    console.log(this.teamData.getTeam().plantillaEquipo);
  }

  getComponents(){
    return this.components;
  }

  setComponents(componentsList:Array<ComponentRef<NewPlayerFormComponent>>){
    this.components = componentsList;
  }
}
