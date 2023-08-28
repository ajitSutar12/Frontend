import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import Swal from "sweetalert2";
import { environment } from '../../../../environments/environment';





@Injectable({
  providedIn: "root",
})
export class TermDepositeAcRenewalService {
  // Variable for handleError
  [x: string]: any;
  // API
  url = environment.base_url;


  constructor(private http: HttpClient) { }
  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + "/cash-credit-ac-renewal/term-deposit-renewal-insert", data).pipe(
      map((res) => res),
      catchError((error) => {
        Swal.fire("Please Input Proper Data !");
        return throwError(error);
      })
    );
  }

  getAccountDeatils(obj) {
    return this.http.post(this.url + '/cash-credit-ac-renewal/TDAccountDeatils', obj).pipe(catchError(this.handleError));
  }
  getInterestAmount(obj) {
    return this.http.post(this.url + '/cash-credit-ac-renewal/getInterestAmount', obj).pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + "/cash-credit-ac-renewal/updateTermDeposit", data);
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http
      .delete(this.url + "/term-deposite-ac-renewal/delete/" + id)
      .pipe(catchError(this.handleError));
  }

  //Interest Category List
  interestCategory(): Observable<any> {
    return this.http.get(this.url + '/interest-category-master').pipe(catchError(this.handleError));
  }

  //Interest Category List
  termDepositExpiryAccount(schemeid): Observable<any> {
    return this.http.get(this.url + '/cash-credit-ac-renewal/scheme/' + schemeid).pipe(catchError(this.handleError));
  }

  //approve master
  approve(data: any): Observable<any> {
    return this.http.post(this.url + '/cash-credit-ac-renewal/TermRenewApprov', data).pipe(catchError(this.handleError));
  }

  //unapprove master
  unapprove(data: any): Observable<any> {
    return this.http.post(this.url + '/cash-credit-ac-renewal/unapprove', data).pipe(catchError(this.handleError));
  }


  //reject master
  reject(data: any): Observable<any> {
    return this.http.post(this.url + '/cash-credit-ac-renewal/TermRenewReject', data).pipe(catchError(this.handleError));
  }
  // For append data
  getFormData(id: any): Observable<any> {
    return this.http
      .get(this.url + "/cash-credit-ac-renewal/" + id)
      .pipe(catchError(this.handleError));
  }
  // For append data
  getTermFormData(id: any): Observable<any> {
    return this.http
      .get(this.url + "/cash-credit-ac-renewal/editTerm/" + id)
      .pipe(catchError(this.handleError));
  }

  // For append data
  getTermDepositAccountDeatils(id: any): Observable<any> {
    return this.http.get(this.url + '/term-deposit-scheme/' + id).pipe(catchError(this.handleError));
  }
}