import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecoveryClearkMasterDropdownService {

    url = "http://localhost:4000/recovery-cleark-master";

    recoveryclearkMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getRecoveryClearkMasterList() {
        this.recoveryclearkMasterObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.recoveryclearkMasterObject.push(obj)
                });
                return this.recoveryclearkMasterObject;
            }));
    }

}