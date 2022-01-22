import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class cityMasterService {
    cityMasterObject = new Array();
    // Variable for handleError
    [x: string]: any;
    // API 
    //// city-master"; 
    url = environment.base_url;
    constructor(private http: HttpClient) { }

    // public getcityList() {
    //     this.cityMasterObject = [];
    //     return this.http.get<any>(this.url + '/city-master')
    //         .pipe(map(ele => {
    //             ele.forEach(element => {
    //                 let obj = { label:element.CITY_NAME, value: element.id };
    //                 this.cityMasterObject.push(obj)
    //             });
    //             return this.cityMasterObject;
    //         }));
    // }

    getcityList(): Observable<any> {
        return this.http.get(this.url + '/city-master').pipe(catchError(this.handleError));
    }

    public getcityList1() {
        this.cityMasterObject = [];
        return this.http.get<any>(this.url + '/city-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.CITY_NAME, value: `${element.id}` };
                    this.cityMasterObject.push(obj)
                });
                return this.cityMasterObject;
            }));
    }
}