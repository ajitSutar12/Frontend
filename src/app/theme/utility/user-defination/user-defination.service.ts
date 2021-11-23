import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {environment}  from '../../../../environments/environment'
import { id } from '@swimlane/ngx-datatable';
@Injectable()
export class UserDefinationService {
  // Variable for handleError
  [x: string]: any;
  // API 
  // // user-defination";
  url = environment.base_url;
  constructor(private http: HttpClient) { }

  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + '/user-defination/insert', data).pipe(map((res) => res),
      catchError((error) => {
        Swal.fire('Please Input Proper Data !');
        return throwError(error);
      })
    )
  }
  // For append data
  getFormData(id: any): Observable<any> {
    return this.http.get(this.url + '/user-defination/' + id).pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + '/user-defination/update', data);
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http.delete(this.url + '/user-defination/delete/' + id).pipe(catchError(this.handleError));
  }

// check exist or not 

userCheckUnique(username: any): Observable<any> {
    console.log('user-defination frontend service');
    console.log(username);
    //_.where("username === :USER_NAME", { username });

  
   // return this.http .get(`${this.url + '/' + ''}/${username}`);
 
      return this.http.post(this.url + '/checkUser', {'uservalue':username}).pipe(catchError(this.handleError));
    }

    // check exist or not 


  // userCheckUnique1(username: any): Observable<any> {
  //   return this.http.post(this.url + '/insert', username).pipe(map((res) => res),
  //   catchError((error) => {
  //     alert('already exist');
  //     return throwError(error);
  //   })  
  //   )
  // }

  // getServers(EMAIL: string) {
  //   console.log(EMAIL);
  //   return this._http.get(this.url + '/' )
  //     .map(
  //       (response: Response) => {
  //         const data = response.json();
  //         console.log(data)
  //         return data;
  //       }
  //     )
  // }
  
}


