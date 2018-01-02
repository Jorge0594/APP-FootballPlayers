import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import { Header } from 'ionic-angular/components/toolbar/toolbar-header';

const BASE_URL = "http://localhost:8080/";

@Injectable()
export class HttpClient{

    private isLogged : Boolean = false;
    private userLoged: any;
    private authTokens: Headers;

    constructor (private http: Http){}
    

    generateAuthTokens(username:String, password: String){
        let headers = new Headers();
        let credentials = btoa(username + ":" + password);
        if(this.isLogged == true){
            headers.append("Authorization","Basic " + credentials);
            this.authTokens = headers;
        }
    }


    //All server request they need to be logged.
    get(url:any){
        return this.http.get((BASE_URL + url),{headers:this.authTokens}).map(
            response => {
                console.log(response.json())
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
    
    isLoggedUser(){
        return this.isLogged;
    }

    setIsLoggedUser(value: Boolean){
        this.isLogged = value;
    }

    getUserLogged(){
        return this.userLoged;
    }

    setUserLogged(user:any){
        console.log("Llamo a setUserLogged");
        this.userLoged = user;
    }

    getAuthTokens(){
        return this.authTokens;
    }


};