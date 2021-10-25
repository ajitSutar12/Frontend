import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CompanyGroupMasterDropdownService {
    companyGroupObject = new Array();
    url = "http://localhost:4000/company-group-master";

    constructor(private http: HttpClient) { }
    public getCompanyGroupMasterList() {
        this.companyGroupObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.COMP_CODE, value: element.id };
                    this.companyGroupObject.push(obj)
                });
                return this.companyGroupObject;
            }));
    }
}
