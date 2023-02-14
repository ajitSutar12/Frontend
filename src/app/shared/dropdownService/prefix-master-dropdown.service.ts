import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class PrefixMasterDropdownService {
    prefixMasterObject = new Array();
    regprefixMasterObject = new Array();
    // url = 'http://localhost:4000/prefix-master';
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getPrefixMasterList() {
        this.prefixMasterObject = []
        return this.http.get<any>(this.url + '/prefix-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.PREFIX, value: `${element.PREFIX}`, regValue: element.PREFIX_REG };
                    this.prefixMasterObject.push(obj)
                });
                return this.prefixMasterObject;
            }));
    }

    public getRegionalPrefixMasterList() {
        this.regprefixMasterObject = []
        return this.http.get<any>(this.url + '/prefix-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    if (element.PREFIX_REG != null) {
                        let obj = { label: element.PREFIX, value: `${element.PREFIX}`, regValue: element.PREFIX_REG };
                        this.regprefixMasterObject.push(obj)
                    }
                });
                return this.regprefixMasterObject;
            }));
    }
}