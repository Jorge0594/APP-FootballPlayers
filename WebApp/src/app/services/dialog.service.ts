import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable()
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  openDialog(title:string, message:string, error:boolean, multiOption:boolean, spinner:boolean, width:string, height:string){
    let dialog = this.matDialog.open(DialogComponent, {
      width: width,
      height: height,
      data:{
        title: title,
        text: message,
        error: error,
        multioption:multiOption,
        spinner:spinner
      }
    });
  }

  closeDialog(){
    this.matDialog.closeAll();
  }

}
