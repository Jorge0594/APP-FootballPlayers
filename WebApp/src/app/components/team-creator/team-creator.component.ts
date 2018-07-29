import { Component, OnInit, Output, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, FormBuilder } from '@angular/forms';
import { Resolve, Router } from '@angular/router';
import { MatStepper } from '@angular/material';

import { Player } from '../../models/player.model';
import { Team } from '../../models/team.model';

import { NewPlayerFormComponent } from '../new-player-form/new-player-form.component';

import { UserService } from '../../services/user.service';
import { TeamService } from '../../services/team.service';
import { ComponentService } from '../../services/component.service';
import { TeamDataService } from '../../services/team-data.service';
import { DialogService } from '../../services/dialog.service';
import { PlayerDataService } from '../../services/player-data.service';
import { PlayerService } from '../../services/player.service';
import { EventService } from '../../services/events.service';

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
  private teamCity: string;

  @ViewChild('panel', { read: ViewContainerRef }) private component;
  private componentRef: ComponentRef<any>;

  constructor(private userService: UserService, private teamService: TeamService, private formBuilder: FormBuilder,
    private componentService: ComponentService, private resolver: ComponentFactoryResolver, private teamData: TeamDataService,
    private dialogService: DialogService, private router: Router, private playerDataService: PlayerDataService, private playerService: PlayerService,
    private eventService: EventService) {

      this.teamData.resetTeam();
    
      this.inputControls = this.formBuilder.group({
        inputTeamName: ['', [Validators.required], this.teamNameValidator.bind(this)],
        inputCity: ['', Validators.required]
      });

  }

  ngOnInit() {
  }


  teamChange(from: string) {
    switch (from) {
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
    this.componentService.removeComponents();
  }

  createTeam() {

    if (this.componentService.hasErrors()) {
      
      this.teamData.getTeam().plantillaEquipo.forEach(p => {
        p.fechaNacimiento = this.playerDataService.reformatDate(p.fechaNacimiento, "/", "-");
      });

      this.teamService.createTeam(this.teamData.getTeam()).subscribe(
        response => {
          if(this.file != null){
            this.userService.setUserTeamImage(this.file);
          }
          try {
            this.playerDataService.playerImages.forEach(data =>{
              this.playerService.updatePlayerImage(this.teamData.getPlayerById(data.id).dni, data.file).subscribe(
                response => {
                  this.eventService.imageSaved.emit();
                },
                error => {
                  throw new Error();
              });
            });

            this.userService.generateUserData();
            this.userService.setUserTeam(this.teamData.getTeam());

            this.dialogService.openDialog("Creación correcta", "El equipo se ha creado de manera correcta. Tendrá 7 días para modificar los datos de su equipo", false, false, false, DIALOG_WIDTH, DIALOG_HEIGHT);
            this.router.navigateByUrl("/equipo");
          } catch(error){
            this.dialogService.openDialog("Error", "Se ha producido un error al intentar guardar las imágenes de los jugadores. ERROR CODE: " + error, true, false, false, DIALOG_WIDTH, DIALOG_HEIGHT);
          }
      });
    } else {
      this.dialogService.openDialog("Error", "Por favor rellene todos los campos correctamente", true, false, false, DIALOG_WIDTH, DIALOG_HEIGHT);
    }

  }

}
