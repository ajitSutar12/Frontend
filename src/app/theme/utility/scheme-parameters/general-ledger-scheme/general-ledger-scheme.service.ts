
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Injectable()
export class GeneralLedgerSchemeService {
    // Variable for handleError
    [x: string]: any;
    // API 
    // // general-ledger-scheme";
    url = environment.base_url;
    constructor(private http: HttpClient) { }

    //Insertion Operation
    postData(data: any): Observable<any> {
        return this.http.post(this.url + '/general-ledger-scheme/insert', data).pipe(map((res) => res),
            catchError((error) => {
                Swal.fire('Please Input Proper Data!');
                return throwError(error);
            })
        )
    }
    // For append data
    getFormData(id: any): Observable<any> {
        return this.http.get(this.url + '/general-ledger-scheme/' + id).pipe(catchError(this.handleError));
    }

    getData(): Observable<any> {
        return this.http.get(this.url + '/general-ledger-scheme/').pipe(catchError(this.handleError));
    }
    //Updation Operation
    updateData(data): Observable<any> {
        return this.http.put(this.url + '/general-ledger-scheme/update', data);
    }
    //Deletion Operation
    deleteData(id: any): Observable<any> {
        return this.http.delete(this.url + '/general-ledger-scheme/delete/' + id).pipe(catchError(this.handleError));
    }
}

