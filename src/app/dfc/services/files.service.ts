import { Injectable } from "@angular/core";
import {
    HttpClient, HttpEvent, HttpEventType, HttpProgressEvent,
    HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders
  } from '@angular/common/http';
import { MessageService } from "./message.service";
import { catchError, last, map, tap } from 'rxjs/operators';
import { of } from "rxjs/observable/of";
import { Config } from "../config";
import { Observable } from "rxjs/Observable";
import { HandleError, HttpErrorHandler } from "./http-error-handler.service";


const TOKEN = 'TOKEN';
let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'File',
      'Access-Control-Allow-Origin': '*',
      'Authorization':'Bearer '+localStorage.getItem(TOKEN)
    })
  };

@Injectable()
export class FileService{
    public handleError: HandleError;


    constructor(public http: HttpClient, public messenger:MessageService, httpErrorHandler: HttpErrorHandler){
        this.handleError = httpErrorHandler.createHandleError('UserServices');
    }

    setToken(token: string): void {
        localStorage.setItem(TOKEN, token);
        console.log(httpOptions);
      }


      postFile(fileToUpload: File): Observable<boolean> {
        const endpoint = 'your-destination-url';
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        return this.http
          .post(endpoint, formData, { headers: httpOptions.headers })
          .map(() => { return true; })
         // .catch((e => this.handleError(e));
        .pipe(
           catchError(this.handleError('fileToUpload', true))
         );
    }







    // uploadFile(file:File){
    //     if(!file){
    //         return;
    //     }

    //     const req = new HttpRequest('POST',Config.baseUrl+Config.loginUrl, file,
    //     {
    //           headers: httpOptions.headers,
    //           reportProgress: true
    //         });
    //     return this.htpp.request(req).pipe(
    //         map(event=>this.getEventMessage(event,file)),
    //         tap(message =>this.showProgress(message)),
    //         last(),
    //         catchError(this.handleError(file))
    //         );
    // }

    

    // private getEventMessage(event: HttpEvent<any>, file:File){
    //     switch(event.type){
    //         case HttpEventType.Sent:
    //             return `Uploading file "${file.name}" of size ${file.size}.`;

    //         case HttpEventType.Response:
    //             return `File "${file.name}" was completely uploaded!`;

    //         default:
    //              return `File "${file.name}" surprising upload event: ${event.type}.`;
            
    //     }
    // }

    //  private handleError(file: File){
    //      const userMessage = `${file.name} upload fail.`;
         
    //      return(error:HttpErrorResponse) =>{
    //          console.error(error);
        
    //      const message = (error.error instanceof Error )?
    //         error.error.message:
    //         `server returned code ${error.status} with body "${error.error}"`;

    //         this.messenger.add(`${userMessage} ${message}`);

    //         return of(userMessage);
    //      };
    //  }

    //  private showProgress(message:string){
    //      this.messenger.add(message);
    //  }
}