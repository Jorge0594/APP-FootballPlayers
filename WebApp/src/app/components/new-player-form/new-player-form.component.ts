import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-player-form',
  templateUrl: './new-player-form.component.html',
  styleUrls: ['./new-player-form.component.css']
})
export class NewPlayerFormComponent implements OnInit {

  @Output() name: string;
  constructor() { }

  ngOnInit() {
    this.name = "";
  }
  //Update all input's values
  getValue(name:string){
    this.name = name;
  }

}
