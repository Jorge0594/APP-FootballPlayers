import { Injectable, ComponentRef } from '@angular/core';

import { Player } from '../models/player.model';
import { NewPlayerFormComponent } from '../components/new-player-form/new-player-form.component';

@Injectable()
export class ComponentService {

  private components: Array<ComponentRef<NewPlayerFormComponent>> = [];

  constructor(){}

  addNewComponent(component: ComponentRef<NewPlayerFormComponent>){
    this.components.push(component);
  }

  getComponents(){
    return this.components;
  }
}
