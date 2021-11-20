import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class SchemeCodeDropdownService {
    schemeCodeObject = new Array();
    // url = "http://localhost:4000/scheme-parameters";
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getSchemeCodeList() {
        this.schemeCodeObject = []
        return this.http.get<any>(this.url + '/scheme-parameters')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.S_APPL + '( ' + element.S_ACNOTYPE + ' )', value: `${element.id}` };
                    this.schemeCodeObject.push(obj)
                });
                return this.schemeCodeObject;
            }));
    }
}