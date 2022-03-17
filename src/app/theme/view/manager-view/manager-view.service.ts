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
export class ManagerViewService {
    // Variable for handleError
    [x: string]: any;
    // API 
    url = environment.base_url;
    constructor(private http: HttpClient) { }


    getSchemeCodeList():Observable<any>{
      return this.http.get(this.url+'/scheme-parameters')
    }

    //get narration data
    getNarrationMaster():Observable<any>{
      return this.http.get(this.url+'/narration')
    }

    //get syspara 
    getSysParaData():Observable<any>{
      return this.http.get(this.url+'/system-master-parameters');
    }

    // //insert voucher entyr
    // insertVoucher(data):Observable<any>{
    //   return this.http.post(this.url+'/voucher',data);
    // }

  
}
