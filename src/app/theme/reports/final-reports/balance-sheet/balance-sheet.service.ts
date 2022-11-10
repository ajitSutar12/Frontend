import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {environment}  from '../../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BalanceSheetService {

  // Variable for handleError
[x: string]: any;
url = environment.base_url;

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<any> {
    return this.http.post(this.url + '/reports/balanceSheet', data).pipe(map((res) => res),
        catchError((error) => {
            Swal.fire('Please Input Proper Data!');
            return throwError(error);
        })
    )
}

getFormData(data): Observable<any> {
  return this.http.post(this.url + '/reports/balanceSheet',data).pipe(catchError(this.handleError));
}
}
