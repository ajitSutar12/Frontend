import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PrefixMasterDropdownService {
    prefixMasterObject = new Array();
    url = 'http://localhost:4000/prefix-master';

    constructor(private http: HttpClient) { }
    public getPrefixMasterList() {
        this.prefixMasterObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.prefixMasterObject.push(obj)
                });
                return this.prefixMasterObject;
            }));
    }


}