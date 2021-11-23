import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { IOption } from 'ng-select';
import { environment } from 'src/environments/environment';

@Injectable()
export class GeneralSubAcSchemeService {
    // Variable for handleError
    [x: string]: any;
    // API 
    // // general-sub-ac-scheme";
    url = environment.base_url;
    constructor(private http: HttpClient) { }

    //Insertion Operation
    postData(data: any): Observable<any> {
        return this.http.post(this.url + '/general-sub-ac-scheme/insert', data).pipe(map((res) => res),
            catchError((error) => {
                Swal.fire('Please Input Proper Data!');
                return throwError(error);
            })
        )
    }
    // For append data
    getFormData(id: any): Observable<any> {
        return this.http.get(this.url + '/general-sub-ac-scheme/' + id).pipe(catchError(this.handleError));
    }
    //Updation Operation
    updateData(data): Observable<any> {
        return this.http.put(this.url + '/general-sub-ac-scheme/update', data);
    }

    dropDown(data): Observable<any> {
        console.log(data.S_GLACNO)
        return this.http.get(this.url + '/general-sub-ac-scheme/getOneColumn', data.S_GLACNO);
    }
}

