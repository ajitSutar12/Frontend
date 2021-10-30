import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RiskCategoryDropdownService {

    url = "http://localhost:4000/risk-catagory";

    riskCatObject = new Array();

    constructor(private http: HttpClient) { }

    public getRiskCategoryList() {
        this.riskCatObject = [];
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.riskCatObject.push(obj)
                });
                return this.riskCatObject;
            }));
    }

}