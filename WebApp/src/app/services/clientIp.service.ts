import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from './httpClient.service';
import { UserService } from './user.service';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs';

@Injectable()
export class IpClientService {

    private ipData: any;

    constructor(private httpClient: HttpClient){
        this.httpClient.getIP().subscribe(
            response => this.ipData = response,
            error => console.error(error)
        );
    }

    getIp(){
        return this.ipData;
    }
}