import { Injectable } from '@angular/core';

import { HttpClient } from './httpClient.service';
import 'rxjs/Rx';

@Injectable()
export class UserService{
    private isLogged: boolean = false;
    constructor(){}

    logout(){
        
    }

    isUserLogged(){
        return this.isLogged;
    }
}