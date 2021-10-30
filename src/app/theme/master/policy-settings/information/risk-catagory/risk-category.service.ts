import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {environment}  from '../../../../../../environments/environment';
@Injectable()
export class RiskCatMasterService {
  // Variable for handleError
  [x: string]: any;

  url = environment.base_url;

  constructor(private http: HttpClient) { }

  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + '/risk-catagory/insert', data).pipe(map((res) => res),
    catchError((error) => {
      Swal.fire('Please Input Proper Data !');
      return throwError(error);
    })
    )
  }
  // For append data
  getFormData(id: any): Observable<any> {
    return this.http.get(this.url + '/risk-catagory/' + id).pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {
  
    return this.http.put(this.url + '/risk-catagory/update', data);
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http.delete(this.url + '/risk-catagory/delete/' + id).pipe(catchError(this.handleError));
  }
}


