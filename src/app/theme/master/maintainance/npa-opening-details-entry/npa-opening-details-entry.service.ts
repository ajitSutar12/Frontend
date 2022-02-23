import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
@Injectable()
export class NpaOpeningDetailsEntryService {
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
        return this.http.post(this.url + '/term-loan-master/entryNpa', data1).pipe(map((res) => res),
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

    // updateData(data): Observable<any> {

    //     let result = this.http.post(this.url + '/update/', data).pipe(catchError(this.handleError));
    //     console.log(result);
    //     return result;
    // }

    // updateData(id:any,data:any):Observable<any>{
    //   return this.http.post(this.url +'/update/'+id,data).pipe(catchError(this.handleError));
    // }

    // For append data
    getFormData(id: any): Observable<any> {
        return this.http.get(this.url + '/term-loan-master/' + id).pipe(catchError(this.handleError));
    }

}



