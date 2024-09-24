import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class TermDepositMasterService {
  // Variable for handleError
  [x: string]: any;
  // API 
  url = environment.base_url;

  constructor(private http: HttpClient) { }

  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + '/term-deposits-master/insert', data).pipe(map((res) => res),
      catchError((error) => {
        // Swal.fire('Please Input Proper Data !');
        return throwError(error);
      })
    )
  }
  // For append data
  getFormData(id: any): Observable<any> {
    return this.http.get(this.url + '/term-deposits-master/' + id).pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + '/term-deposits-master/update', data);
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http.delete(this.url + '/term-deposits-master/delete/' + id).pipe(catchError(this.handleError));
  }

  //approve master
  approve(data: any): Observable<any> {
    return this.http.post(this.url + '/term-deposits-master/approve', data).pipe(catchError(this.handleError));
  }
  //unapporve master
  unapporve(data: any): Observable<any> {
    return this.http.post(this.url + '/term-deposits-master/unapporve', data).pipe(catchError(this.handleError));
  }


  //reject master
  reject(data: any): Observable<any> {
    return this.http.post(this.url + '/term-deposits-master/reject', data).pipe(catchError(this.handleError));
  }
}


