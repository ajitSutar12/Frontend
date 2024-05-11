import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../../environments/environment'

@Injectable()
export class SystemMasterParametersService {
  // Variable for handleError
  [x: string]: any;
  // API 
  // url = "http://localhost:4000/system-master-parameters";
  url = environment.base_url;
  constructor(private http: HttpClient) { }

  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + '/system-master-parameters/insert', data).pipe(map((res) => res),
      catchError((error) => {
        let errorMessage = 'Please add valid length';
        Swal.fire('Kindly Add Valid Length !');
        return throwError(errorMessage);
      })
    )
  }

  // For append data
  getFormData(id: any): Observable<any> {
    return this.http.get(this.url + '/system-master-parameters/' + id).pipe(catchError(this.handleError));
    // return this.http.get('http://192.168.1.128:7266/system-master-parameters/' + id).pipe(catchError(this.handleError));

  }
  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + '/system-master-parameters/update', data);
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http.delete(this.url + '/system-master-parameters/delete/' + id).pipe(catchError(this.handleError));
  }

  getData(): Observable<any> {
    return this.http.get(this.url + '/system-master-parameters/').pipe(catchError(this.handleError));
  }


}


