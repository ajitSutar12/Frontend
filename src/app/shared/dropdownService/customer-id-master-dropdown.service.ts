import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class CustomerIDMasterDropdownService {
    loadCharacters() {
        throw new Error('Method not implemented.');
    }

    url = environment.base_url;
    customerIDMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getCustomerIDMasterList() {
        this.customerIDMasterObject = [];
        return this.http.get<any>(this.url + '/customer-id')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO + ' ' + element.AC_NAME, value: element.id, name: element.AC_NO };
                    this.customerIDMasterObject.push(obj)
                });
                return this.customerIDMasterObject;
            }));
    }
}