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
export class CashierUmService {

  [x: string]: any;
  // API 
  url = environment.base_url;
  constructor(private http: HttpClient) { }

  getUserDetails():Observable<any>{
    return this.http.get(this.url + '/user-defination').pipe(map((res)=>res),catchError((error)=>{
      return throwError(error)
    }))
  }

  createCashier(obj):Observable<any>{
    return this.http.post(this.url+'/user-defination/createCashier',obj)
  }

  getCashierData():Observable<any>{
    return this.http.post(this.url+'/user-defination/cashierlist','');
  }
  
}
