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
export class BatchVoucherService {
  // Variable for handleError
  [x: string]: any;
  // API 
  url = environment.base_url;
  constructor(private http: HttpClient) { }
  //get syspara 
  getSysParaData(): Observable<any> {
    return this.http.get(this.url + '/system-master-parameters');
  }

  //get narration data
  getNarrationMaster(): Observable<any> {
    return this.http.get(this.url + '/narration')
  }

  submitData(data): Observable<any> {
    return this.http.post(this.url + '/voucher/insertBatchVoucher', data);
  }

  // For append data
  getFormData(id: any): Observable<any> {
    let data = { id: id }
    return this.http
      .post(this.url + "/voucher/batch_voucher_edit", data)
      .pipe(catchError(this.handleError));
  }

  //approve master
  approve(data: any): Observable<any> {
    return this.http.post(this.url + '/voucher/batchApprove', data).pipe(catchError(this.handleError));
  }

  //unapporveBatchVoucher master
  unapporveBatchVoucher(data: any): Observable<any> {
    return this.http.post(this.url + '/voucher/unapporveBatchVoucher', data).pipe(catchError(this.handleError));
  }


  //reject master
  reject(data: any): Observable<any> {
    return this.http.post(this.url + '/voucher/batchReject', data).pipe(catchError(this.handleError));
  }

  //get SchmeMast Data
  schemastData(): Observable<any> {
    return this.http.get(this.url + '/scheme-parameters')
  }

  //get Ledger balance
  getLedgerBalance(body): Observable<any> {
    return this.http.post(this.url + '/voucher/getledgerbalance', body).pipe(catchError(this.handleError))
  }
}
