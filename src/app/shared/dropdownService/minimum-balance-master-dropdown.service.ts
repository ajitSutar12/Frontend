import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class MinimumBalanceMasterDropdownService {
    minimumBalancrMasterObject = new Array();
    // url = 'http://localhost:4000/minimum-balance-master';
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getMinimumBalanceMasterList() {
        this.minimumBalancrMasterObject = []
        return this.http.get<any>(this.url + '/minimum-balance-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.minimumBalancrMasterObject.push(obj)
                });
                return this.minimumBalancrMasterObject;
            }));
    }


}