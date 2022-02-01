import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class TermLoanMasterDropdownService {
    TermLoanMasterObject = new Array();
    // url = "http://localhost:4000/scheme-parameters";
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getTermLoanMasterList() {
        this.TermLoanMasterObject = []
        return this.http.get<any>(this.url + '/term-loan-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO+' '+element.AC_NO, value: element.id};
                    this.TermLoanMasterObject.push(obj)
                });
                return this.TermLoanMasterObject;
            }));
    }
}