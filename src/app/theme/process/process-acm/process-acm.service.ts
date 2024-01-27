import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {environment} from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProcessAcmService {

  [x: string]: any;
  
  url = environment.base_url;
  constructor(private http: HttpClient) { }

  getSchemeCodeList(): Observable<any> {
    return this.http.get(this.url + '/scheme-parameters');
  }

  penalInterestCalculation(data): Observable<any>{
    return this.http.post(this.url + '/voucher/PenalInterestCalculation',data);
  }

  penalInterestCalculationProcess(data): Observable<any>{
    return this.http.post(this.url + '/voucher/PenalInterstCalculatinProcess',data);
  }

  OverdraftPosting(data): Observable<any>{
    return this.http.post(this.url+'/voucher/OverdraftPosting',data);
  }

  transferGLClosingAccount(data): Observable<any>{
    return this.http.post(this.url+'/voucher/transferGLClosingAccount',data);
  }
}
