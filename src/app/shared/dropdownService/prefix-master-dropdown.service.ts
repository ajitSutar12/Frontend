import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class PrefixMasterDropdownService {
    prefixMasterObject = new Array();
    // url = 'http://localhost:4000/prefix-master';
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getPrefixMasterList() {
        this.prefixMasterObject = []
        return this.http.get<any>(this.url + '/prefix-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.PREFIX, value: `${element.PREFIX }`};
                    this.prefixMasterObject.push(obj)
                });
                return this.prefixMasterObject;
            }));
    }


}