import { Component } from '@angular/core';

import { NewPlayerFormComponent } from './components/new-player-form/new-player-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private count: number;
  private numberOfPlayer: Array<number> = [];
  private id: number;

  constructor(){
    this.count = 0;
  }

  createPanel(){
    this.numberOfPlayer.push(++this.count);
  }

  deletePlayer(num:number){
    this.numberOfPlayer.pop();
    this.count--;
  }


}
