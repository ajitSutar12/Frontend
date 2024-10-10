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
export class MultiVoucherService {
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
    return this.http.post(this.url + '/voucher/insertMultiVoucher', data);
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
  getFormData(id): Observable<any> {
    console.log(id, 'id')
    // return this.http.post(this.url + '/voucher/editMulti', id);
    return this.http.post(this.url + "/voucher/editMulti/", id).pipe(catchError(this.handleError));

  }

  //approve master
  approve(data: any): Observable<any> {
    return this.http.post(this.url + '/voucher/multiApprove', data).pipe(catchError(this.handleError));
  }
  //unapporveMultiVoucher master
  unapporveMultiVoucher(data: any): Observable<any> {
    return this.http.post(this.url + '/voucher/unapporveMultiVoucher', data).pipe(catchError(this.handleError));
  }


  //reject master
  reject(data: any): Observable<any> {
    return this.http.post(this.url + '/voucher/multiReject', data).pipe(catchError(this.handleError));
  }

  // Check Zero Balance of account

  checkZeroBalance(data): Observable<any> {
    return this.http.post(this.url + '/voucher/ZeroBalanceAc', data);
  }

  clearWithdrawBal(data): Observable<any> {
    return this.http.post(this.url + '/voucher/clearWithdrawBal', data);
  }

  CheckAccountCloseFlagInDailytran(data): Observable<any> {
    return this.http.post(this.url + '/voucher/CheckAccountCloseFlagInDailytran', data);
  }

  CheckLoginFlagInDpmaster(data): Observable<any> {
    return this.http.post(this.url + '/voucher/CheckLoginFlagInDpmaster', data);
  }

  specialInstruction(data): Observable<any> {
    return this.http.post(this.url + '/voucher/specialInstruction', data);
  }

  CheckPanNoInIDMaster(data): Observable<any> {
    return this.http.post(this.url + '/voucher/CheckPanNoInIDMaster', data);
  }

  ClearVoucherSameBal(data): Observable<any> {
    return this.http.post(this.url + '/voucher/ClearVoucherSameBal', data);
  }

  BalancePresentOrOverdraft(data): Observable<any> {
    return this.http.post(this.url + '/voucher/BalancePresentOrOverdraft', data);
  }

  ClearBalanceDebitAmt(data): Observable<any> {
    return this.http.post(this.url + '/voucher/ClearBalanceDebitAmt', data);
  }
  getCheckList(id: any): Observable<any> {
    return this.http.get(this.url + "/voucher/getChequelist/" + id).pipe(catchError(this.handleError));
  }
}
