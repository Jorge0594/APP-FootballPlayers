import { Component, OnInit, Output, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, FormBuilder } from '@angular/forms';
import { Resolve } from '@angular/router';
import { MatStepper } from '@angular/material';

import { Player } from '../../models/player.model';

import { NewPlayerFormComponent } from '../new-player-form/new-player-form.component';

import { UserService } from '../../services/user.service';
import { TeamService } from '../../services/team.service';
import { ComponentService } from '../../services/component.service';


@Component({
  selector: 'app-team-creator',
  templateUrl: './team-creator.component.html',
  styleUrls: ['./team-creator.component.css']
})
export class TeamCreatorComponent implements OnInit {

  private teamError: boolean = false;
  private teamName: string;
  private controls: FormGroup;
  private showPreview: boolean = false;
  private file: File;
  private fileShow: File;

  @ViewChild('panel', {read: ViewContainerRef}) private component;
  private componentRef: ComponentRef<any>;

  constructor(private userService: UserService, private teamService: TeamService, private formBuilder: FormBuilder,
    private componentService: ComponentService, private resolver: ComponentFactoryResolver ) {
    this.controls = this.formBuilder.group({
      inputTeamName: ['', [Validators.required], this.teamNameValidator.bind(this)],
      inputCity:['', Validators.required]
    })
  }

  changeEvent(data){
    this.teamName = data;
  }

  teamErrorMessage(){
    return this.controls.get('inputTeamName').hasError('required') ? "Campo obligatorio" : this.controls.get('inputTeamName').hasError('teamNameError') ? "Nombre de equipo en uso" : "";
  }

  errorInput(){
    return this.controls.get('inputCity').hasError('required') ? "Campo obligatorio" : "";
  }

  teamNameValidator(control:FormControl):Promise<any>{
    if(this.teamName != "" && this.teamName != undefined){
      const promise = new Promise<any>(
        (resolve, reject) => {
            this.teamService.existTeam(this.teamName, this.userService.getUserLogged().liga).subscribe(
            (response: Response) => {
              resolve(null);
            },
            (error:Response) => {
              resolve({'teamNameError': true});
            }
          )   
        }
      );
      return promise;
    }
  }

  imageChanged(fileInput:any){
    this.file = fileInput.target.files[0];
    this.showPreview = true;

    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.fileShow = event.target.result;
    }
    reader.readAsDataURL(fileInput.target.files[0]);
  }

  addPlayer(){
    const factory: ComponentFactory<NewPlayerFormComponent> = this.resolver.resolveComponentFactory(NewPlayerFormComponent);
    this.componentRef = this.component.createComponent(factory);

    this.componentService.addNewComponent(this.componentRef);
  }

  deletePlayers(){
    let listComponents: Array<ComponentRef<NewPlayerFormComponent>> = [];
    
    this.componentService.getComponents()
                                   .filter(comp => comp.instance.check == true)
                                   .forEach(comp => comp.destroy());
    this.componentService.setComponents(
      this.componentService.getComponents()
                                    .filter(comp => comp.instance.check == false)
    );
  }

  goNext(stepper:MatStepper, from:string){
    //stepper.next();
  }
  
  ngOnInit() {
  }

}
