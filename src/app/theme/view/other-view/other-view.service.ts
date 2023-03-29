import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import Swal from "sweetalert2";
import {environment} from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OtherViewService {
  // Variable for handleError
  [x: string]: any;
  url = environment.base_url;

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<any> {
    return this.http.post(this.url + "/gl-account-master/aclist", data).pipe(
      map((res) => res),
      catchError((error) => {
        
        return throwError(error);``
      })
    );
  }

  updateCdData(data:any):Observable<any>{
    return this.http.post(this.url+"/gl-account-master/updateCdRatio",data);
  }

  ledgerbalance(data:any):Observable<any>{
    debugger
    return this.http.post(this.url+"/voucher/getledgerbalance",data);
  }

  profitloss(data:any):Observable<any>{
    return this.http.post(this.url+"/gl-account-master/profitloss",data);
  }

  ratioAnalysis():Observable<any>{
    return this.http.post(this.url +"/voucher/RationAnalysis",'');
  }

  loanProjection(data:any): Observable<any>{
    return this.http.post(this.url+'/voucher/loanprojection',data);
  }

  getInstallment(data:any): Observable<any>{
    return this.http.post(this.url+'/voucher/getLoanInstallment',data);
  }
  
}
