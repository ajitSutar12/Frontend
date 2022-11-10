import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VouchersPrintingService {

// Variable for handleError
[x: string]: any;
// API 
url = environment.base_url;

constructor(private http: HttpClient) { }

postData(data: any): Observable<any> {
  return this.http.post(this.url + '/voucher/getTranNoList', data).pipe(map((res) => res),
      catchError((error) => {
          Swal.fire('Please Input Proper Data!');
          return throwError(error);
      })
  )
}

//for getting the tran no from voucher
getTranNo(data): Observable<any> {
  return this.http.post(this.url + '/voucher/getTranNoList', data);
}

// getTranNoList1(data): Observable<any> {
//   return this.http.post(this.url + '/saving-pigmy-account-closing/getTranNoList', data);
// }

// getTranNoList2(data): Observable<any> {
//   return this.http.post(this.url + '/pigmy-chart/getTranNoList', data);
// }

}
