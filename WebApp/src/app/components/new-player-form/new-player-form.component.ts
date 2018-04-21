import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-player-form',
  templateUrl: './new-player-form.component.html',
  styleUrls: ['./new-player-form.component.css']
})
export class NewPlayerFormComponent implements OnInit {

  private playerPositions = [
    "Portero", "Defensa", "Centrocampista", "Delantero"
  ];
  @Output() name: string;
  checked: boolean = false;
  captain: boolean = false;
  constructor() { }

  ngOnInit() {
    this.name = "";
  }
  //Update all input's values
  getValue(data:string, from:string){
    console.log(this.captain);
    switch(from){
      case "name":
        this.name = data;
        console.log(data);
        break;
      case "lastname":
        break;
      case "birthdate":
        console.log(data);
        break;
      case "email":
        break;
      case "dni":
        break;
      case "position":
        console.log(data);
        break;
    }
  }

}
