import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class RecoveryClearkMasterDropdownService {

    // // recovery-cleark-master";
    url = environment.base_url;
    recoveryclearkMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getRecoveryClearkMasterList() {
        this.recoveryclearkMasterObject = []
        return this.http.get<any>(this.url + '/recovery-cleark-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: `${element.id}` };
                    this.recoveryclearkMasterObject.push(obj)
                });
                return this.recoveryclearkMasterObject;
            }));
    }

}