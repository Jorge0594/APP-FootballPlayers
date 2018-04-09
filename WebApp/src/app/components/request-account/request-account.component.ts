import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { IpClientService } from '../../services/clientIp.service';

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
  private inputPlayers = new FormControl('', Validators.required);

  private error: boolean = false;

  constructor(private ipService: IpClientService) { }

  sendData(name:string, lastname:string, email:string, teamName:string, nPlayers: number, campus: any, moreInfo: string){
    if(this.handleError()){
      this.error = true;
      console.error("Debe rellenar todos los campos")
    } else {
      console.log(this.ipService.getIp().ip);
      this.error = false;
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
            || this.inputCampus.hasError('required') || this.inputTeamName.hasError('required') || this.inputPlayers.hasError('required');   
  }

  ngOnInit() {
  }

}
