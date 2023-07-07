import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment'
@Injectable()
export class UserDefinationService {
  // Variable for handleError
  [x: string]: any;
  // API 
  // url = "http://localhost:4000/user-defination";
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

  //update Role and Branch
  updateRoleBranch(data: any): Observable<any> {
    return this.http.post(this.url + '/user-defination/updateRoleBranch', data).pipe(catchError(this.handleError));
  }

  //update Role and Branch
  checkUserName(data: any): Observable<any> {
    return this.http.post(this.url + '/user-defination/checkUserName', data).pipe(catchError(this.handleError));
  }

  //get user list
  getRoleList(): Observable<any> {
    let array = new Array();
    return this.http.post<any>(this.url + '/user-defination/roles', {})
      .pipe(map(ele => {
        ele.forEach(element => {
          let obj = { label: element.NAME, value: element.id };
          array.push(obj)
        });
        return array;
        console.log(array);

      }));
  }
}


