import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../../environments/environment'

@Injectable()
export class DeadstockmasterService {
    // Variable for handleError
    [x: string]: any;

    // API  
    //url = "http://localhost:4000/dead-stock-master";
    url = environment.base_url;

    constructor(private http: HttpClient) { }

    //Insertion Operation
    postData(data: any): Observable<any> {
        return this.http.post(this.url + '/dead-stock-master/insert', data).pipe(map((res) => res),
            catchError((error) => {
                Swal.fire('Please Input Proper Data!');
                return throwError(error);
            })
        )
    }
    // For append data
    getFormData(id: any): Observable<any> {
        return this.http.get(this.url + '/dead-stock-master/' + id).pipe(catchError(this.handleError));
    }
    //Updation Operation
    updateData(data): Observable<any> {
        return this.http.put(this.url + '/dead-stock-master/update', data);
    }
    //Deletion Operation
    deleteData(id: any): Observable<any> {
        return this.http.delete(this.url + '/dead-stock-master/delete/' + id).pipe(catchError(this.handleError));
    }
    public getDeadstockList() {
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.castObject.push(obj)
                });
                return this.castObject;
            }));
    }

    //approve master
    approve(data: any): Observable<any> {
        return this.http.post(this.url + '/dead-stock-master/approve', data).pipe(catchError(this.handleError));
    }


    //reject master
    reject(data: any): Observable<any> {
        return this.http.post(this.url + '/dead-stock-master/reject', data).pipe(catchError(this.handleError));
    }

}

