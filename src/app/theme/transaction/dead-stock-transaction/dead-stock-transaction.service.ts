import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment';

@Injectable()
export class DeadStockTransactionService {
  // Variable for handleError
  [x: string]: any;
  // API 
  url = environment.base_url;


  constructor(private http: HttpClient) { }

  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + '/deadstock-purchase/TranInsert', data).pipe(map((res) => res),
      catchError((error) => {
        Swal.fire('Please Input Proper Data!');
        return throwError(error);
      })
    )
  }

  //get narration data
  getNarrationMaster(): Observable<any> {
    return this.http.get(this.url + '/narration')
  }
  // For append data
  getFormData(id: any): Observable<any> {
    return this.http.get(this.url + '/deadstock-purchase/' + id).pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + '/dead-stock-transaction/update', data);
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http.delete(this.url + '/dead-stock-transaction/delete/' + id).pipe(catchError(this.handleError));
  }

  //approve master
  approve(data: any): Observable<any> {
    return this.http.post(this.url + '/deadstock-purchase/approve', data).pipe(catchError(this.handleError));
  }


  //reject master
  reject(data: any): Observable<any> {
    return this.http.post(this.url + '/deadstock-purchase/reject', data).pipe(catchError(this.handleError));
  }

}