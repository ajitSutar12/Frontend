import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import Swal from "sweetalert2";
import {environment} from '../../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class RecoverySequenceService {
  [x: string]: any;
  // API
  url = environment.base_url;

  constructor(private http: HttpClient) { }

  getRecoveryData(): Observable<any> {
    return this.http
      .post(this.url + "/voucher/getRecoveryData",'')
      .pipe(catchError(this.handleError));
  }

  submitRecoveryData(data): Observable<any>{
    return this.http.post(this.url+"/voucher/submitRecoverySeqData",data)
  }
}
