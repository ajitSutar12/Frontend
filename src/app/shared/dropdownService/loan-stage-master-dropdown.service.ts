import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class LoanStageMasterDropdownService {
    loanStageMasterObject = new Array();
    // url = 'http://localhost:4000/loan-stage-master';
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getLoanStageMasterList() {
        this.loanStageMasterObject = []
        return this.http.get<any>(this.url + '/loan-stage-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.loanStageMasterObject.push(obj)
                });
                return this.loanStageMasterObject;
            }));
    }


}