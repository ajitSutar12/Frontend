import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../../../environments/environment';
@Injectable()
export class PrematurePigmyService {
  // Variable for handleError
  [x: string]: any;
  // API 
  url = environment.base_url;

  constructor(private http: HttpClient) { }

  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + '/premature-pigmy-less-int-rate/insert', data).pipe(map((res) => res),
      catchError((error) => {
        Swal.fire('Please Input Proper Data!');
        return throwError(error);
      })
    )
  }
  // For append data
  getFormData(id: any): Observable<any> {
    return this.http.get(this.url + '/premature-pigmy-less-int-rate/' + id).pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + '/premature-pigmy-less-int-rate/update', data);
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http.delete(this.url + '/premature-pigmy-less-int-rate/delete/' + id).pipe(catchError(this.handleError));
  }

}