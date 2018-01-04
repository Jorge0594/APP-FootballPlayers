import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';

const BASE_URL = "http://localhost:8080/";

@Injectable()
export class HttpClient{

    private logged : Boolean = false;
    private authTokens: Headers;

    constructor (private http: Http){}
    

    generateAuthTokens(username:String, password: String){
        let headers = new Headers();
        let credentials = btoa(username + ":" + password);
        if(this.logged == true){
            headers.append("Authorization","Basic " + credentials);
            this.authTokens = headers;
        }
    }


    //All server request they need to be logged.
    get(url:any){
        return this.http.get((BASE_URL + url),{headers:this.authTokens}).map(
            response => {
                //console.log(response.json())
                return response.json()},
            error => console.error(error.json())
        );
    }

    put(url:any){

    }

    post(url:any){

    }

    delete(url:any){

    }
    
    isLogged(){
        return this.logged;
    }

    setLogged(value: Boolean){
        this.logged = value;
    }
    
    getAuthTokens(){
        return this.authTokens;
    }


};