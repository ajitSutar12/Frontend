import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../../environments/environment';
@Injectable()
export class TranscationInputSettingService {
    // Variable for handleError
    [x: string]: any;
    // API 
    url = environment.base_url;

    constructor(private http: HttpClient) { }

    //Insertion Operation
    postData(data: any): Observable<any> {
        return this.http.post(this.url + '/transcation-input-gl-head-setting/insert', data).pipe(map((res) => res),
            catchError((error) => {
                Swal.fire('Please Input Proper Data !');
                return throwError(error);
            })
            // catchError((e: any) => Observable.throw(this.errorHandler(e)))
        )
    }
    errorHandler(error: any): void {
        console.log(error)
    }
    // For append data
    getFormData(id: any): Observable<any> {
        return this.http.get(this.url + '/transcation-input-gl-head-setting/' + id).pipe(catchError(this.handleError));
    }
    //Updation Operation
    updateData(data): Observable<any> {

        return this.http.put(this.url + '/transcation-input-gl-head-setting/update', data);
    }

    duplicatecheck(data): Observable<any> {
        return this.http.post(this.url + '/transcation-input-gl-head-setting/duplicatecheck', data);
    }
    //Deletion Operation
    deleteData(id: any): Observable<any> {
        return this.http.delete(this.url + '/transcation-input-gl-head-setting/delete/' + id).pipe(catchError(this.handleError));
    }
}


