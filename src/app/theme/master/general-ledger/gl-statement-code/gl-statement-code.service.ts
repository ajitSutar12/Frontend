
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../../environments/environment';
@Injectable()
export class GlStatementCodeService {
  // Variable for handleError
  [x: string]: any;

  // API 
  url = environment.base_url;
  constructor(private http: HttpClient) { }

  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + '/gl-statement-code/insert', data).pipe(map((res) => res),
      catchError((error) => {
        Swal.fire('Please Input Proper Data !');
        return throwError(error);
      })
    )
  }
  // For append data
  getFormData(id: any): Observable<any> {
    return this.http.get(this.url + '/gl-statement-code/' + id).pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {

    return this.http.put(this.url + '/gl-statement-code/update', data);
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http.delete(this.url + '/gl-statement-code/delete/' + id).pipe(catchError(this.handleError));
  }

  //get code list
  getCodeList() {
    return this.http.get(this.url + '/gl-statement-code').pipe(catchError(this.handleError));
  }

  //Insert new Code
  insertNewCode(data: any): Observable<any> {
    return this.http.post(this.url + '/gl-statement-code/newCode', data);
  }

  //Update new Code
  updateNewCode(data: any): Observable<any> {
    return this.http.post(this.url + '/gl-statement-code/newCode1', data);
  }

  //update node position
  updatePosition(data: any): Observable<any> {
    return this.http.post(this.url + '/gl-statement-code/PositionUpdate', data);
  }
}






