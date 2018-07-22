import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

import { RequestAccess } from '../models/requestAccess.model';

import { Observable } from 'rxjs/Observable';



import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs';

const BASE_URL = environment.api;
const BASE_URL_IMAGES = environment.apiImages;

@Injectable()
export class HttpClient{

    private logged : boolean = false;
    private authTokens: Headers;

    constructor (private http: Http){}
    

    generateAuthTokens(username:string, password: string){
        let headers = new Headers();
        let credentials = btoa(username + ":" + password);
        if(this.logged == true){
            headers.append("Authorization","Basic " + credentials);
            this.authTokens = headers;
        }
    }


    //All server request they need to be logged.
    get(url:any){
        return this.http.get((BASE_URL + url),{headers:this.authTokens})
        .map(
            response => {
                return response.json()},
            error => console.error(error.json())
        );
    }

    getIP(): Observable<any[]> {
        return this.http.get('http://ipinfo.io') 
        .map(response => response.json()) 
        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    }

    getRecoveredPasword(url:any){
        return this.http.get((BASE_URL + url)).
        map(
            response => {
                return response.json()},
            error => console.error(error.json())
        );
    }
    
    getBaseURL(){
        return BASE_URL;
    }

    getBaseURLImages(){
        return BASE_URL_IMAGES;
    }
    
    put(url:any, body:any){
        return this.http.put((BASE_URL + url), body, {headers: this.authTokens})
        .map(
            response => response,
            error => error
        );

    }

    post(url:any, body:any){
        return this.http.post((BASE_URL + url), body, {headers: this.authTokens})
        .map(
            response => response,
            error => error
        );
    }

    postWithoutAuth(url:any, body:any){
        return this.http.post((BASE_URL + url), body)
        .map(
            response => response,
            error => console.error(error)
        )
    }

    delete(url:any){

    }
    
    isLogged(){
        return this.logged;
    }

    setLogged(value: boolean){
        this.logged = value;
    }
    
    getAuthTokens(){
        return this.authTokens;
    }

    logout(){
        this.authTokens = null;
        this.logged = false;
    }


};