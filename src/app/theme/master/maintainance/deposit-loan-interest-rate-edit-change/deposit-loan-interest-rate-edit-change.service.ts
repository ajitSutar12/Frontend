import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class DepositLoanInterestRateEditChangeService {
  // Variable for handleError
  [x: string]: any;
  // API 
  url = environment.base_url;

  constructor(private http: HttpClient) { }

  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + '/term-loan-master/addinterest', data).pipe(map((res) => res),
      catchError((error) => {
        Swal.fire('Please Input Proper Data !');
        return throwError(error);
      })
    )
  }

  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + '/term-deposits-master/rate', data);
  }

  public getTermLoanSchemeList1(schemeid) {
    this.schemeObject = []
    return this.http.get<any>(this.url + '/term-loan-master/lnacint/' + schemeid)
      .pipe(map(ele => {
        ele.forEach(element => {
          let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id };
          this.schemeObject.push(obj)
        });
        return this.schemeObject;
      }));
  }

  public getTermDepositSchemeList1(schemeid) {
    this.schemeObject = []
    return this.http.get<any>(this.url + '/term-deposits-master/lnacint/' + schemeid)
      .pipe(map(ele => {
        ele.forEach(element => {
          let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id };
          this.schemeObject.push(obj)
        });
        return this.schemeObject;
      }));
  }

  public getCashCreditSchemeList1(schemeid) {
    this.schemeObject = []
    return this.http.get<any>(this.url + '/cash-credit-master/lnacint/' + schemeid)
      .pipe(map(ele => {
        ele.forEach(element => {
          let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id };
          this.schemeObject.push(obj)
        });
        return this.schemeObject;
      }));
  }

}


