import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CashDenominationService {

  [x: string]: any;
  // API 
  url = environment.base_url;
  constructor(private http: HttpClient) { }

  initialize(data): Observable<any> {
    return this.http.post(this.url + '/cash-initialization-entry/initialize', data);
  }

  getList(data): Observable<any> {
    return this.http.post(this.url + '/cash-initialization-entry/cashierlist', data);
  }

  public getOwnbranchList() {
    this.OwnbranchMasterObject = []
    return this.http.get<any>(this.url + '/own-branch-master')
      .pipe(map(ele => {
        ele.forEach(element => {
          let obj = { label: element.CODE + ' ' + element.NAME, value: element.id, name: element.CODE };
          this.OwnbranchMasterObject.push(obj)
        });
        return this.OwnbranchMasterObject;
      }));
  }

  acceptVoucher():Observable<any>{
    return this.http.post(this.url + '/accept-denomination/Acceptforvoucher','');
  }

  paymentVoucher():Observable<any>{
    return this.http.post(this.url + '/accept-denomination/Paymentforvoucher','');
  }
}
