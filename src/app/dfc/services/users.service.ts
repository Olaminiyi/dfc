import { Injectable } from "@angular/core";
import { HandleError, HttpErrorHandler } from "./http-error-handler.service";

import { Observable } from "rxjs";

import { catchError } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Config } from "../config";
import { UserLogin } from "../models/userlogin";
import { User } from "../models/user";
import { UserVM } from "../models/adduser";


let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

const TOKEN = 'TOKEN';
@Injectable()
export class UsersService{

    usersUrl = Config.baseUrl; //Url to web api
    public handleError: HandleError;

    constructor(public http: HttpClient, httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('UserServices');
    }

    setToken(token: string): void {
        localStorage.setItem(TOKEN, token);
        console.log(httpOptions);
      }
    
      isLogged() {
        return localStorage.getItem(TOKEN) != null;
      }
    userLogin: any;
     login(email: string, password: string): Observable<User>{
       this.userLogin=new UserLogin();
       this.userLogin.email=email;
       this.userLogin.password=password;
       this.userLogin.rememberMe=true;
       
       return this.http.post<User>(Config.baseUrl+Config.loginUrl, this.userLogin, httpOptions);
   }
      
      getUsers():Observable<User[]>{
        return this.http.get<User[]>(this.usersUrl)
        .pipe(
          catchError(this.handleError('getUsers', []))
        )
      }

    addusers:UserVM;
    addUser(name: string, email:string, password:string):Observable<User>{
      this.addusers = new UserVM();
      this.addusers.FirstName= name.trim();
      this.addusers.email = email.trim();
      this.addusers.password = password.trim();
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization':'Bearer '+localStorage.getItem(TOKEN)
        })
      };
     
        return this.http.post<any>(Config.baseUrl+Config.addUserUrl, this.addusers,
          httpOptions)
          .pipe(
            catchError(this.handleError('addUsers', this.addusers))
          );
    }
}