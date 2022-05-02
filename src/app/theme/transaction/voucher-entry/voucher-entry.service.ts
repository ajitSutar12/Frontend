import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VoucherEntryService {
  // Variable for handleError
  [x: string]: any;
  // API 
  url = environment.base_url;
  constructor(private http: HttpClient) { }


  getSchemeCodeList(): Observable<any> {
    return this.http.get(this.url + '/scheme-parameters')
  }

  //get narration data
  getNarrationMaster(): Observable<any> {
    return this.http.get(this.url + '/narration')
  }

  //get syspara 
  getSysParaData(): Observable<any> {
    return this.http.get(this.url + '/system-master-parameters');
  }

  //insert voucher entyr
  insertVoucher(data): Observable<any> {
    return this.http.post(this.url + '/voucher', data);
  }

  //Get Head details using head
  getHeadDetails(data): Observable<any> {
    return this.http.post(this.url + '/voucher/intrestHead', data);
  }

  //get voucher pass and unpass data
  getVoucherPassAndUnpassData(data): Observable<any> {
    return this.http.post(this.url + '/voucher/PassUnpassData', data);
  }

  //check customer account close or not
  checkAccountCloseOrNot(data): Observable<any> {
    return this.http.post(this.url + '/voucher/checkAccountCloseDetails', data);
  }

  // For append data
  getFormData(id: any): Observable<any> {
    return this.http
      .get(this.url + "/voucher/" + id)
      .pipe(catchError(this.handleError));
  }

  //approve master
  approve(data: any): Observable<any> {
    return this.http.post(this.url + '/voucher/approve', data).pipe(catchError(this.handleError));
  }


  //reject master
  reject(data: any): Observable<any> {
    return this.http.post(this.url + '/voucher/reject', data).pipe(catchError(this.handleError));
  }
}
