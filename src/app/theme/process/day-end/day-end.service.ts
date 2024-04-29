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
export class DayEndService {

  // Variable for handleError
  [x: string]: any;
  // API 
  url = environment.base_url;
  constructor(private http: HttpClient) { }

  dayEndHandoverProcess(data: any): Observable<any> {
    return this.http.post(this.url + '/voucher/dayendhandoverbranchwise', data).pipe(map((res) => res),
      catchError((error) => {
        return throwError(error);
      })
    )
  }

  getSysparaDetails(): Observable<any> {
    return this.http.get(this.url + '/system-master-parameters').pipe(map((res) => res), catchError((error) => {
      return throwError(error)
    }))
  }

  dayHandOver(data): Observable<any> {
    return this.http.post(this.url + '/voucher/dayHandOver', data).pipe(map((res) => res), catchError((error) => {
      return throwError(error)
    }))
  }

  checkDayHandOverStatus(obj): Observable<any> {
    return this.http.post(this.url + '/voucher/dayHandOverCheck', obj).pipe(map((res) => res),
      catchError((error) => {
        return throwError(error);
      }))
  }

  CheckBranchHandOverReport(data): Observable<any> {
    return this.http.post(this.url + '/voucher/branchWiseHandOverList', data);
  }

  revertHandOver(data): Observable<any> {
    return this.http.post(this.url + '/voucher/revertHandOver', data);
  }

  sendBranchData(data): Observable<any> {
    return this.http.post(this.url + '/voucher/DayEnd', { date: data.date, branch_id: data.branch_id });
  }

  dayEndRemarkChangeBranchWise(data): Observable<any> {
    return this.http.post(this.url + '/voucher/DayEndRemarkChange', data);
  }

  dayEndProccessingRemarkChangeBranchWise(data): Observable<any> {
    return this.http.post(this.url + '/voucher/DayEndProccessingRemarkChange', data);
  }

  pigmyDayEnd(data): Observable<any> {
    return this.http.post(this.url + '/voucher/pigmyDayEnd', data);
  }

  yearEnd(data): Observable<any> {
    return this.http.post(this.url + '/voucher/YearEnd', data);
  }

  
}
