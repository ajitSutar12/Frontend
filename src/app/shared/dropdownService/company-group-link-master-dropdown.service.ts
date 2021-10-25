import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CompanyGLinkMasterDropdownService {
    companyGLinkObject = new Array();
    url = "http://localhost:4000/company-group-link-master";

    constructor(private http: HttpClient) { }
    public getCompanyGLinkMasterList() {
        this.companyGLinkObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.COMP_CODE, value: element.id };
                    this.companyGLinkObject.push(obj)
                });
                return this.companyGLinkObject;
            }));
    }
}
