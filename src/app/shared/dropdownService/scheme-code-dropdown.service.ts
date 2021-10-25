import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SchemeCodeDropdownService {
    schemeCodeObject = new Array();
    url = "http://localhost:4000/scheme-parameters";

    constructor(private http: HttpClient) { }
    public getSchemeCodeList() {
        this.schemeCodeObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.S_APPL, value: element.id };
                    this.schemeCodeObject.push(obj)
                });
                return this.schemeCodeObject;
            }));
    }
}
