import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Injectable()
export class SharesSchemeService {
  // Variable for handleError
  [x: string]: any;
  // API 
  // // shares-scheme";
  url = environment.base_url;


  constructor(private http: HttpClient) { }

   //Insertion Operation
   postData(data: any): Observable<any> {
    return this.http.post(this.url + '/shares-scheme/insert', data).pipe(map((res) => res),
    catchError((error) => {
      let errorMessage = 'Please add valid length';
      Swal.fire('Kindly Add Valid Length !');
      return throwError(errorMessage);
    })
    )
  }

  // For append data
  getFormData(id: any): Observable<any> {
    return this.http.get(this.url + '/shares-scheme/' + id).pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + '/shares-scheme/update', data);
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http.delete(this.url + '/shares-scheme/delete/' + id).pipe(catchError(this.handleError));
  }

  
}


