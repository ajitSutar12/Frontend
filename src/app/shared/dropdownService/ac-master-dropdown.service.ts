import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ACMasterDropdownService {

    url = "http://localhost:4000/gl-account-master";

    acMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getACMasterList() {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO + '(' + element.AC_NAME + ')', value: element.id };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }

}