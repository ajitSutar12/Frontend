import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class AdvocateMasterDropdownService {
    advocateMasterObject = new Array();
    // url ='http://localhost:4000/advocate-master';
    url = environment.base_url;

    constructor(private http: HttpClient) { }
    public getAdvocateMasterList() {
        this.advocateMasterObject = [];
        return this.http.get<any>(this.url + '/advocate-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.advocateMasterObject.push(obj)
                });
                return this.advocateMasterObject;
            }));
    }
 

}