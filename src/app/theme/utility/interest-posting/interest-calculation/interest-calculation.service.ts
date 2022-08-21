import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {environment} from '../../../../../environments/environment';

@Injectable()
export class CurrentSchemeService {
    // Variable for handleError
    [x: string]: any;
    // API 
    
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    getSchemeCodeList(): Observable<any> {
        return this.http.get(this.url + '/scheme-parameters')
    }
    // //Insertion Operation
    // postData(data: any): Observable<any> {
    //     return this.http.post(this.url + '/interest-calculation/insert', data).pipe(map((res) => res),
    //         catchError((error) => {
    //             Swal.fire('Please Input Proper Data!');
    //             return throwError(error);
    //         })
    //     )
    // }
    // For append data
    getFormData(id: any): Observable<any> {
        return this.http.get(this.url + '/interest-calculation/' + id).pipe(catchError(this.handleError));
    }
    //Updation Operation
    //submit data for form
    postData(data1: any): Observable<any> {
        return this.http.post(this.url + '/interest-calculation/update', data1).pipe(map((res) => res),
            catchError((error) => {
                let errorMessage = 'Please add valid length';
                console.log(error)
                // window.alert(errorMessage);
                return throwError(errorMessage);
            })
        )
    }
    //Deletion Operation
    deleteData(id: any): Observable<any> {
        return this.http.delete(this.url + '/interest-calculation/delete/' + id).pipe(catchError(this.handleError));
    }

    //Get Scheme Data
    SchemeDetails():Observable<any>{
        return this.http.get(this.url+'/scheme-parameters').pipe(catchError(this.handleError));
    }
}

