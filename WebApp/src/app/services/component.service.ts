import { Injectable, ComponentRef } from '@angular/core';

import { Player } from '../models/player.model';

import { NewPlayerFormComponent } from '../components/new-player-form/new-player-form.component';

@Injectable()
export class ComponentService {

  private components: Array<{component:ComponentRef<NewPlayerFormComponent>, data:string}> = [];//data must be a "Player" type
  private playersPhotos:Array<File> = [];

  constructor(){}

  addNewComponent(component: ComponentRef<NewPlayerFormComponent>){//rest to add player's photos
    this.components.push({component: component, data: ""});
  }

  getComponents(){
    return this.components;
  }
}
