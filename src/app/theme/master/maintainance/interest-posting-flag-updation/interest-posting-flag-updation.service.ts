import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
@Injectable()
export class InterestPostingFlagUpdationService {
    [x: string]: any;
    httpData: any;
    // API 
    url = environment.base_url;
    constructor(private http: HttpClient) { }

    //get data for form
    loadData(): Observable<any> {
        return this.http.get(this.url).pipe(
            map((res) => res)
        )
    }

    //submit data for form
    postData(data1: any): Observable<any> {
        return this.http.post(this.url + '/interest-posting-updation/update', data1).pipe(map((res) => res),
            catchError((error) => {
                let errorMessage = 'Please add valid length';
                console.log(error)
                // window.alert(errorMessage);
                return throwError(errorMessage);
            })
        )
    }

    //delete record from table
    deleteData(id: any): Observable<any> {
        return this.http.delete(this.url + '/delete/' + id).pipe(catchError(this.handleError));
    }

    // For append data
    getFormData(id: any): Observable<any> {
        return this.http.get(this.url + '/term-loan-master/' + id).pipe(catchError(this.handleError));
    }

    IntrestCalculation(data:any):Observable<any>{
        return this.http.post(this.url + '/voucher/InterestCalculation',data).pipe(catchError(this.handleError))
    }

}



