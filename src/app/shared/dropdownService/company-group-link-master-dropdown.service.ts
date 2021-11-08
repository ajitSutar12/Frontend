import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class CompanyGLinkMasterDropdownService {
    companyGLinkObject = new Array();
    // url = "http://localhost:4000/company-group-link-master";
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getCompanyGLinkMasterList() {
        this.companyGLinkObject = []
        return this.http.get<any>(this.url + '/company-group-link-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.COMP_CODE, value: element.id };
                    this.companyGLinkObject.push(obj)
                });
                return this.companyGLinkObject;
            }));
    }
}
