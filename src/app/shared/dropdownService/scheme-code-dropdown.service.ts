import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class SchemeCodeDropdownService {
    schemeCodeObject = new Array();
    schemeObject = new Array();
    // // scheme-parameters";
    url = environment.base_url;
    constructor(private http: HttpClient) { }

    public getSchemeCodeList(scheme) {
        this.schemeCodeObject = []
        return this.http.get<any>(this.url + '/scheme-parameters/' + scheme)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_APPL ,id:element.S_ACNOTYPE };
                    this.schemeCodeObject.push(obj)
                });
                return this.schemeCodeObject;
            }));
    }


    public getAllSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/scheme-parameters/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.S_ACNOTYPE + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getTermDepositeScheme() {
        return this.http.get<any>(this.url + '/scheme-parameters/')
        .pipe(map(ele => {
            ele.forEach(element => {
                let obj = { label: element.S_ACNOTYPE + ' ' + element.S_APPL, value: element.id };
                this.schemeObject.push(obj)
            });
            return this.schemeObject;
        }));
    }
    public getTdReceiptScheme() {
        return this.http.get<any>(this.url + '/scheme-parameters/')
        .pipe(map(ele => {
            ele.forEach(element => {
                let obj = { label: element.RECEIPT_TYPE, value: element.id };
                this.schemeObject.push(obj)
            });
            return this.schemeObject;
        }));
    }
    public getAllSchemeListINT() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/scheme-parameters/interest')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }


}