import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IpClientService } from '../../services/clientIp.service';
import { DialogService } from '../../services/dialog.service';
import { LeagueService } from '../../services/league.service';
import { RequestFormService } from '../../services/request-form.service';

import { DialogComponent } from '../dialog/dialog.component';

import { RequestAccess } from '../../models/requestAccess.model';

const DIALOG_WIDTH = "400px";
const DIALOG_HEIGHT = "400px";

@Component({
  selector: 'app-request-account',
  templateUrl: './request-account.component.html',
  styleUrls: ['./request-account.component.css']
})

export class RequestAccountComponent{

  private options: Array<string> = [
    "Alcorcón", "Aranjuez", "Fuenlabrada", "Madrid", "Móstoles", "Online"
  ];
  
  private inputName = new FormControl('', Validators.required);
  private inputLastname = new FormControl('', Validators.required);
  private inputEmail = new FormControl('',[Validators.required, Validators.email]);
  private inputCampus = new FormControl('', Validators.required);
  private inputTeamName = new FormControl('', Validators.required);
  private inputLeague = new FormControl('', Validators.required);

  private listLeagueNames:any;

  private error: boolean = false;
  private showDialog:boolean = false;

  constructor(private ipService: IpClientService, private leagueService: LeagueService, private requestFormService: RequestFormService,
  private dialogService: DialogService, private router: Router) { 
    this.leagueService.getLeaguesNames().subscribe(
      namesList => this.listLeagueNames = namesList
    )
  }

  sendData(name:string, lastname:string, email:string, teamName:string, league:string, campus: any, moreInfo: string){
    if(this.handleError()){

      this.error = true;

    } else {
      
      let formAccess = new RequestAccess(name, lastname, email, teamName, league, campus, moreInfo ,this.ipService.getIp().ip);

      this.requestFormService.sendRequest(formAccess).subscribe(
        response =>{
          this.dialogService.openDialog("Envio correcto",
          "La petición ha sido enviada correctamente. Se le notificará por correo electronico si ha sido aceptada.", false, false, DIALOG_WIDTH, DIALOG_HEIGHT);
          this.router.navigateByUrl('/iniciarSesion');
        },
        error => {
          if(error.status == 406){
            this.dialogService.openDialog("Error", "No tiene permitido relizar más peticiones desde su ip.", true, false, DIALOG_WIDTH, DIALOG_HEIGHT);
          } else {
            this.dialogService.openDialog("Error", "El email introducido ya está en uso.", true, false, DIALOG_WIDTH, DIALOG_HEIGHT);
          }
        }
        
      )

      this.error = false;
      //send the email to the comite
    }
  }

  getErrorMessage(){
    return  "Este campo es obligatorio";
  }

  getEmailError(){
    return this.inputEmail.hasError('required') ? 'Este campo es obligatorio' : this.inputEmail.hasError('email') ? 'Email no valido' : "";
  }

  handleError(){
    return this.inputName.hasError('required') || this.inputLastname.hasError('required') || this.inputEmail.hasError('required') || this.inputEmail.hasError('email')
            || this.inputCampus.hasError('required') || this.inputTeamName.hasError('required') || this.inputLeague.hasError('required');   
  }
}
