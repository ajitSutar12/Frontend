import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class PurposeMasterDropdownService {

    // url = "http://localhost:4000/purpose-master";
    url = environment.base_url;
    purposeMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getPurposeMasterList() {
        this.purposeMasterObject = []
        return this.http.get<any>(this.url + '/purpose-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: `${element.id}` };
                    this.purposeMasterObject.push(obj)
                });
                return this.purposeMasterObject;
            }));
    }

}