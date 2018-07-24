import { Injectable, ComponentRef } from '@angular/core';

import { Player } from '../models/player.model';

import { NewPlayerFormComponent } from '../components/new-player-form/new-player-form.component';
import { TeamDataService } from './team-data.service';

@Injectable()
export class ComponentService {

  private components: Array<ComponentRef<NewPlayerFormComponent>> = [];//data must be a "Player" type
  private id: number = 0;
  private playersImages: Array<{id:string, image:File }> = [];

  constructor(private teamData: TeamDataService) { }

  addNewComponent(component: ComponentRef<NewPlayerFormComponent>) {//rest to add player's photos
    component.instance.player.id = String(this.id);
    this.components.push(component);
    this.teamData.addPlayer(component.instance.getPlayer());
    this.id++;
  }

  removeComponents() {
    this.components
      .filter(comp => comp.instance.check == true)
      .forEach(comp => comp.destroy());

    let removed = this.components.filter(comp => comp.instance.check == true);
    this.components = this.components.filter(comp => comp.instance.check == false);

    for(let remove of removed){
      let it = 0;
      for(let comp of this.teamData.getTeam().plantillaEquipo){
        if(comp.equals(remove.instance.player)){
          this.teamData.getTeam().plantillaEquipo.splice(it);
          break;
        }
        it++;
      }
    }

  }

  getPlayersImages():Array<{id:string, image:File}>{
    return this.playersImages;
  }

  getComponents(): Array<ComponentRef<NewPlayerFormComponent>>{
    return this.components;
  }

  setComponents(componentsList: Array<ComponentRef<NewPlayerFormComponent>>) {
    this.components = componentsList;
  }

  hasErrors(): boolean{
    const errors = this.components.filter(comp => comp.instance.inputControls.invalid);

    return errors.length == 0;
  }
}
