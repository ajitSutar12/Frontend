import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {environment}  from '../../../../../environments/environment';
import {ShareMasterService} from '../../../master/customer/shares-master/shares-master.service'

@Injectable()
export class YearwiseunpaidService {
  // Variable for handleError
  [x: string]: any;
  // API 
  //url = "http://localhost:4000/year-wise-unpaid-dividend-entry";
  url = environment.base_url;
  constructor(private http: HttpClient) { }

  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + '/year-wise-unpaid-dividend-entry/insert', data).pipe(map((res) => res),
    catchError((error) => {
      Swal.fire('Please Input Proper Data !');
      return throwError(error);
    })
    )
  }
  // For append data
  getFormData(id: any): Observable<any> {
    return this.http.get(this.url + '/year-wise-unpaid-dividend-entry/' + id).pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + '/year-wise-unpaid-dividend-entry/update', data);
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http.delete(this.url + '/year-wise-unpaid-dividend-entry/delete/' + id).pipe(catchError(this.handleError));
  }
}


