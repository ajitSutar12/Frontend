
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../../environments/environment'

@Injectable()
export class FreezeAccountService {
    // Variable for handleError
    [x: string]: any;
    // API 
    url = environment.base_url;

    constructor(private http: HttpClient) { }

    //Insertion Operation
    postData(data: any): Observable<any> {
        return this.http.post(this.url + '/freez-account/insert', data).pipe(map((res) => res),
            catchError((error) => {
                Swal.fire('Please Input Proper Data !');
                return throwError(error);
            })
        )
    }
    // For append data
    getFormData(id: any): Observable<any> {
        return this.http.get(this.url + '/freez-account/' + id).pipe(catchError(this.handleError));
    }
    //Updation Operation
    updateData(data): Observable<any> {

        return this.http.put(this.url + '/freez-account/update', data);
    }
    //Deletion Operation
    deleteData(id: any): Observable<any> {
        return this.http.delete(this.url + '/freez-account/delete/' + id).pipe(catchError(this.handleError));
    }


    public fetchSchemeData(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/freez-account/check/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_FREEZE_STATUS, value: element.AC_FREEZE_STATUS, name: element.AC_FREEZE_STATUS };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
}






