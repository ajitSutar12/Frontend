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
export class DayBeginService {

  [x: string]: any;
    // API 
    url = environment.base_url;
    constructor(private http: HttpClient) { }

   //Insertion Operation
   postData(data: any): Observable<any> {
    return this.http.post(this.url + '/voucher/dayBegin', data).pipe(map((res) => res),
        catchError((error) => {
            //Swal.fire('Please Input Proper Data!');
            return throwError(error);
        })
    )
   }
   getSysparaDetails():Observable<any>{
    return this.http.get(this.url + '/system-master-parameters').pipe(map((res)=>res),catchError((error)=>{
      return throwError(error)
    }))
  }
}
