import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
@Injectable()
export class NotingChargesService {
    [x: string]: any;
    httpData: any;
    // API 
    url = environment.base_url;
    constructor(private http: HttpClient) { }

    //submit data for form
    postData(data1: any): Observable<any> {
        return this.http.post(this.url + '/noting-charges/insert', data1).pipe(map((res) => res),
            catchError((error) => {
                let errorMessage = 'Please add valid length';
                console.log(error)
                // window.alert(errorMessage);
                return throwError(errorMessage);
            })
        )
    }


    // For append data
    getFormData(id: any): Observable<any> {
        return this.http.get(this.url + '/term-loan-master/' + id).pipe(catchError(this.handleError));
    }

}



