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
  // For append data
  getFormData(id: any): Observable<any> {
    return this.http
      .get(this.url + "/voucher/" + id)
      .pipe(catchError(this.handleError));
  }

  //check customer account close or not
  checkAccountCloseOrNot(data): Observable<any> {
    return this.http.post(this.url + '/voucher/checkAccountCloseDetails', data);
  }

  //approve master
  approve(data: any): Observable<any> {
    return this.http.post(this.url + '/voucher/approve', data).pipe(catchError(this.handleError));
  }

  //reject master
  reject(data: any): Observable<any> {
    return this.http.post(this.url + '/voucher/reject', data).pipe(catchError(this.handleError));
  }
  // ledger balance function
  getledgerbalance(data: any): Observable<any> {
    return this.http.post(this.url + '/voucher/getledgerbalance', data).pipe(catchError(this.handleError));
  }

  getPassedUnpassedBalance(data: any): Observable<any> {
    return this.http.post(this.url + '/voucher/getPassedUnpassedBalance', data).pipe(catchError(this.handleError));
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

  checkDormantAccount(data): Observable<any> {
    return this.http.post(this.url + '/voucher/checkDormantAccount', data);
  }

  BalancePresentOrOverdraft(data): Observable<any> {
    return this.http.post(this.url + '/voucher/BalancePresentOrOverdraft', data);
  }

  ClearBalanceDebitAmt(data): Observable<any> {
    return this.http.post(this.url + '/voucher/ClearBalanceDebitAmt', data);
  }

  MinBalanceChecking(data): Observable<any> {
    return this.http.post(this.url + '/voucher/MinBalanceChecking', data);
  }

  CheckClearBalAndAmt(data): Observable<any> {
    return this.http.post(this.url + '/voucher/CheckClearBalAndAmt', data);
  }

  StandingOrInterestInstruction(data): Observable<any> {
    return this.http.post(this.url + '/voucher/StandingOrInterestInstruction', data);
  }

  InstructionFreezeAc(data): Observable<any> {
    return this.http.post(this.url + '/voucher/InstructionFreezeAc', data);
  }

  CashWithdraw(data): Observable<any> {
    return this.http.post(this.url + '/voucher/CashWithdraw', data);
  }

  ComInterestDateAndCurrentDate(data): Observable<any> {
    return this.http.post(this.url + '/voucher/ComInterestDateAndCurrentDate', data);
  }

  WithdrawAmtClosingEqualClearBal(data): Observable<any> {
    return this.http.post(this.url + '/voucher/WithdrawAmtClosingEqualClearBal', data);
  }

  withdrawClosingCondition(data): Observable<any>{
    return this.http.post(this.url + '/voucher/WithdrawClosingCondition',data);
  }
  RecurringTypeDeposite(data): Observable<any> {
    return this.http.post(this.url + '/voucher/RecurringTypeDeposite', data);
  }

  DepositeAmountAndIntallments(data): Observable<any> {
    return this.http.post(this.url + '/voucher/DepositeAmountAndIntallments', data);
  }

  ComInterestDateAndLastDMonth(data): Observable<any> {
    return this.http.post(this.url + '/voucher/ComInterestDateAndLastDMonth', data);
  }

  LienMarkChecking(data): Observable<any> {
    return this.http.post(this.url + '/voucher/LienMarkChecking', data);
  }

  DepositAndTotalInstallments(data): Observable<any> {
    return this.http.post(this.url + '/voucher/DepositAndTotalInstallments', data);
  }

  DepositAndDepositAmount(data): Observable<any> {
    return this.http.post(this.url + '/voucher/DepositAndDepositAmount', data);
  }

  PremcloseTdateTamtCom(data): Observable<any> {
    return this.http.post(this.url + '/voucher/PremcloseTdateTamtCom', data);
  }

  PrecloseTrDateTrAmtComCol(data): Observable<any> {
    return this.http.post(this.url + '/voucher/PrecloseTrDateTrAmtComCol', data);
  }

  CheckClearBalNotEqualAmt(data): Observable<any> {
    return this.http.post(this.url + '/voucher/CheckClearBalNotEqualAmt', data);
  }

  SysparaSetTokenAndCSTran(data): Observable<any> {
    return this.http.post(this.url + '/voucher/SysparaSetTokenAndCSTran', data);
  }

  ComVouamtClearbalAndStrs(data): Observable<any> {
    return this.http.post(this.url + '/voucher/ComVouamtClearbalAndStrs', data);
  }

  IsDirectEntryAllow(data): Observable<any> {
    return this.http.post(this.url + '/voucher/IsDirectEntryAllow', data);
  }

  DepositGreaterShareLimitAmt(data): Observable<any> {
    return this.http.post(this.url + '/voucher/DepositGreaterShareLimitAmt', data);
  }

  SysAndScheCheckTotalAmt(data): Observable<any> {
    return this.http.post(this.url + '/voucher/SysAndScheCheckTotalAmt', data);
  }

  calculateDividend(data): Observable<any> {
    return this.http.post(this.url + '/voucher/calculateDividend', data);
  }

  VoucherPassing(data): Observable<any> {
    return this.http.post(this.url + '/voucher/VoucherPassing', data);
  }

  ZeroBalance(data): Observable<any> {
    return this.http.post(this.url + '/voucher/ZeroBalance', data);
  }

  getInputHeadBal(data): Observable<any> {
    return this.http.post(this.url + '/voucher/getInputHeadBal', data);
  }


}
