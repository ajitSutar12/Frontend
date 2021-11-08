import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';
import { map } from 'rxjs/operators';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'


@Injectable() 
export class bankMasterService {
    bankMasterObject = new Array();
    // API 
    //url = "http://localhost:4000/bank-master"; 
    url = environment.base_url;

    constructor(private http: HttpClient) { }

    public getbankList() {
        this.bankMasterObject = [];
        return this.http.get<any>(this.url + '/bank-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.bankMasterObject.push(obj)
                });
                return this.bankMasterObject;
            }));
    }

}