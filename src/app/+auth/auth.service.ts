import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import {HttpClient,  HttpHeaders } from '@angular/common/http';

//import { catchError, tap } from 'rxjs/internal/operator'
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { tap } from 'rxjs/operators/tap';
// const httpOptions ={ 
//   headers:new HttpHeaders({'content-Type': 'application/json'})
// };
@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  //private url = '/logins/';
  constructor(private http: HttpClient, public router: Router){

  }

// logins(data): Observable<any>{
//   return this.http.post<any>(this.url, data, httpOptions).pipe(
//     tap((result) => this.save_token(result)),
//     catchError(this.handleError<any>('logins'))
//   );
// }

// private handleError<T>(operation = 'operation', result?: T){
//   return (error: any): Observable<T> => {
//     return of(result as T);
//   };
// }

// private save_token(data){
//   if (data.success){
//     localStorage.setItem('token',data.token);
//     return;
//   }
// }


// canActivate(): boolean {
//   const token = localStorage.getItem('token');
//       if (token == null)   {
//           this.router.navigate(['logins']);
//           return false;
//       }
//       return true;
//   }


  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
