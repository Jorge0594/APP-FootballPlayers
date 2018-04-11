import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { IpClientService } from '../../services/clientIp.service';
import { MatSnackBar } from '@angular/material';
import { LeagueService } from '../../services/league.service';
import { RequestFormService } from '../../services/request-form.service';

import { RequestAccess } from '../../models/requestAccess.model';

@Component({
  selector: 'app-request-account',
  templateUrl: './request-account.component.html',
  styleUrls: ['./request-account.component.css']
})
export class RequestAccountComponent implements OnInit {

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

  constructor(private ipService: IpClientService, private leagueService: LeagueService, private requestFormService: RequestFormService) { 
    this.leagueService.getLeaguesNames().subscribe(
      namesList => this.listLeagueNames = namesList
    )
  }

  sendData(name:string, lastname:string, email:string, teamName:string, league:string, campus: any, moreInfo: string){
    if(this.handleError()){
      this.error = true;
      console.error("Debe rellenar todos los campos")
    } else {
      console.log(this.ipService.getIp().ip);
      
      let formAccess = new RequestAccess(name, lastname, email, teamName, league, campus, moreInfo ,this.ipService.getIp().ip);

      this.requestFormService.sendRequest(formAccess).subscribe(
        response => console.log(response)
      )

      this.error = false;
      console.log(formAccess);
      console.log("send email");
      //send the email to the comite
    }
  }

  getErrorMessage(){
    return  "Este campo es obligatorio";
  }

  getEmailError(){
    return this.inputEmail.hasError('required') ? 'Este campo es obligatorio' : this.inputEmail.hasError('email') ? 'Email no valido' : '';
  }

  handleError(){
    return this.inputName.hasError('required') || this.inputLastname.hasError('required') || this.inputEmail.hasError('required') || this.inputEmail.hasError('email')
            || this.inputCampus.hasError('required') || this.inputTeamName.hasError('required') || this.inputLeague.hasError('required');   
  }

  ngOnInit() {
  }

}
