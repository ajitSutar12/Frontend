import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment'
@Injectable()
export class LegderViewService {
    // Variable for handleError
    [x: string]: any;
    // API 
    url = environment.base_url;
    constructor(private http: HttpClient) { }

    //Insertion Operation
    postData(date: any): Observable<any> {
        return this.http.post(this.url + '/ledger-view/view', date).pipe(map((res) => res),
            catchError((error) => {
                Swal.fire('Please Input Proper Data!');
                return throwError(error);
            })
        )
    }

    //Deletion Operation
    deleteData(date: any): Observable<any> {
        return this.http.delete(this.url + '/holiday/delete/' + date).pipe(catchError(this.handleError));
    }
}