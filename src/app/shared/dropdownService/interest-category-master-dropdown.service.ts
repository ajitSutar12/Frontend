import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class IntrestCategoryMasterDropdownService {
    intrestCategoryMasterObject = new Array();
    // url = 'http://localhost:4000/interest-category-master';
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getIntrestCategoaryMasterList() {
        this.intrestCategoryMasterObject = []
        return this.http.get<any>(this.url + '/interest-category-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: `${element.CODE}` + ' ' + `${element.NAME}` , value: `${element.id }` };
                    this.intrestCategoryMasterObject.push(obj)
                });
                return this.intrestCategoryMasterObject;
            }));
    }


}