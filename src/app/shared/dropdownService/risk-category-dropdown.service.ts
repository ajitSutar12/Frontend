import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class RiskCategoryDropdownService {

    // // risk-catagory";
    url = environment.base_url;
    riskCatObject = new Array();

    constructor(private http: HttpClient) { }

    public getRiskCategoryList() {
        this.riskCatObject = [];
        return this.http.get<any>(this.url + '/risk-catagory')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.riskCatObject.push(obj)
                });
                return this.riskCatObject;
            }));
    }

}