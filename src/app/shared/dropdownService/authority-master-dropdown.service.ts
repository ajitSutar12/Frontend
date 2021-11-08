import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthorityMasterDropdownService {

    // url = "http://localhost:4000/authority-master";
    url = environment.base_url;
    authorityMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getAuthorityMasterList() {
        this.authorityMasterObject = [];
        return this.http.get<any>(this.url + '/authority-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.authorityMasterObject.push(obj)
                });
                return this.authorityMasterObject;
            }));
    }

}