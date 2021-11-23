import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../../environments/environment';
import {CustomerIdService} from '../customer-id/customer-id.service'

@Injectable()
export class DisputeLoanMasterService {
  // Variable for handleError
  [x: string]: any;
  // API 
  //// dispute-loan-master";
  url = environment.base_url;
  constructor(
    private http: HttpClient,
    private CustomerIdService:CustomerIdService) { }


    do(){
      this.CustomerIdService.doSomethingFromService1();
      console.log('after service 1 function');
    }

  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + '/dispute-loan-master/insert', data).pipe(map((res) => res),
    catchError((error) => {
      Swal.fire('Please Input Proper Data !');
      return throwError(error);
    })
    )
  }
  // For append data
  getFormData(id: any): Observable<any> {
    return this.http.get(this.url + '/dispute-loan-master/' + id).pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + '/dispute-loan-master/update', data);
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http.delete(this.url + '/dispute-loan-master/delete/' + id).pipe(catchError(this.handleError));
  }

}


