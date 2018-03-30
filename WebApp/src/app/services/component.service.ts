import { Injectable, ComponentRef } from '@angular/core';

import { Player } from '../models/player.model';
import { NewPlayerFormComponent } from '../components/new-player-form/new-player-form.component';

@Injectable()
export class ComponentService {

  private components: Array<{component:ComponentRef<NewPlayerFormComponent>, data:string}> = [];//data must be a "Player" type

  constructor(){}

  addNewComponent(component: ComponentRef<NewPlayerFormComponent>){
    this.components.push({component: component, data: ""});
  }

  getComponents(){
    return this.components;
  }
}
