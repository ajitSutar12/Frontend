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
  getNarrationMaster():Observable<any>{
    return this.http.get(this.url+'/narration')
  }

  submitData(data):Observable<any>{
    return this.http.post(this.url+'/voucher/insertBatchVoucher',data);
  }
}
