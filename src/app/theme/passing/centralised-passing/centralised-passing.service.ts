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
export class CentralisedPassingService {
  [x: string]: any;
  // API 
  url = environment.base_url;
  constructor(private http: HttpClient) { }

  // For append data
  getCountOfPassing(branch_code): Observable<any> {
        return this.http.get(this.url + '/passing/' + branch_code).pipe(catchError(this.handleError));
  }
}
