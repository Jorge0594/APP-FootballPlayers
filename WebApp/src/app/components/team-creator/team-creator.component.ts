import { Component, OnInit, Output, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, FormBuilder } from '@angular/forms';
import { Resolve } from '@angular/router';
import { MatStepper } from '@angular/material';

import { Player } from '../../models/player.model';
import { Team } from '../../models/team.model';

import { NewPlayerFormComponent } from '../new-player-form/new-player-form.component';

import { UserService } from '../../services/user.service';
import { TeamService } from '../../services/team.service';
import { ComponentService } from '../../services/component.service';
import { TeamDataService } from '../../services/team-data.service';
import { DialogService } from '../../services/dialog.service';

const DIALOG_WIDTH = "400px";
const DIALOG_HEIGHT = "400px";

@Component({
  selector: 'app-team-creator',
  templateUrl: './team-creator.component.html',
  styleUrls: ['./team-creator.component.css']
})
export class TeamCreatorComponent implements OnInit {

  private teamError: boolean = false;
  private inputControls: FormGroup;
  private showPreview: boolean = false;
  private file: File;
  private fileShow: File;

  private teamName: string;
  private teamCity:string;

  @ViewChild('panel', { read: ViewContainerRef }) private component;
  private componentRef: ComponentRef<any>;

  constructor(private userService: UserService, private teamService: TeamService, private formBuilder: FormBuilder,
    private componentService: ComponentService, private resolver: ComponentFactoryResolver, private teamData: TeamDataService,
    private dialogService: DialogService) {
    this.inputControls = this.formBuilder.group({
      inputTeamName: ['', [Validators.required], this.teamNameValidator.bind(this)],
      inputCity: ['', Validators.required]
    });
    
  }


  teamChange(from:string){
    switch(from){
      case "name":
        this.teamData.getTeam().nombre = this.teamName;
      break;
      case "city":
        this.teamData.getTeam().ciudad = this.teamCity;
      break;
    }
  }


  teamErrorMessage() {
    return this.inputControls.get('inputTeamName').hasError('required') ? "Campo obligatorio" : this.inputControls.get('inputTeamName').hasError('teamNameError') ? "Nombre de equipo en uso" : "";
  }

  errorInput() {
    return this.inputControls.get('inputCity').hasError('required') ? "Campo obligatorio" : "";
  }

  teamNameValidator(formControl: FormControl): Promise<any> {
    console.log("Entro en validar nombre del equipo");
    if (this.teamName != "" && this.teamName != undefined) {
      const promise = new Promise<any>(
        (resolve, reject) => {
          this.teamService.existTeam(this.teamName, this.userService.getUserLogged().liga).subscribe(
            (response: Response) => {
              resolve(null);
            },
            (error: Response) => {
              resolve({ 'teamNameError': true });
            }
          )
        }
      );
      return promise;
    }
  }

  imageChanged(fileInput: any) {
    this.file = fileInput.target.files[0];
    this.showPreview = true;

    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.fileShow = event.target.result;
    }
    reader.readAsDataURL(fileInput.target.files[0]);
  }

  addPlayer() {
    const factory: ComponentFactory<NewPlayerFormComponent> = this.resolver.resolveComponentFactory(NewPlayerFormComponent);
    this.componentRef = this.component.createComponent(factory);

    this.componentService.addNewComponent(this.componentRef);
  }

  deletePlayers() {
    let listComponents: Array<ComponentRef<NewPlayerFormComponent>> = [];
    this.componentService.removeComponents();
  }

  createTeam(){
    
    console.log("Entro en createTeam");
    if(this.componentService.hasErrors()){
      this.teamService.createTeam(this.teamData.getTeam()).subscribe(
        response => console.log("Equipo creado correctamente")
      )
    } else {
      this.dialogService.openDialog("Error" , "Hay errores en los campos de los jugadores. Por favor revise que ha rellenado todos los campos correctamente", true, false, DIALOG_WIDTH, DIALOG_HEIGHT);
    }
   
  }

  ngOnInit() {
  }

}
