import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ACMasterDropdownService {

    // // gl-account-master"; 
    url = environment.base_url;
    acMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getACMasterList() {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/gl-account-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO + '(' + element.AC_NAME + ')', value: element.id };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }

}