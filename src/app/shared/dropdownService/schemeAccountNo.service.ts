import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class SchemeAccountNoService {
    // savingSchemeObject = new Array();
    schemeObject = new Array();
    // // scheme-parameters";
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getSavingSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/saving-master/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: `${element.AC_NO}`, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getShareSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/share-master/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: `${element.AC_NO}`, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getCurrentAccountSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/current-account-master/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: `${element.AC_NO}`, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getTermLoanSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/term-loan-master/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: `${element.AC_NO}`, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getTermDepositSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/term-deposit-master/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: `${element.AC_NO}`, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getDisputeLoanSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/dispute-loan-master/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: `${element.AC_NO}`, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getCashCreditSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/cash-credit-master/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: `${element.AC_NO}`, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getAnamatSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/anamat-gsm/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: `${element.AC_NO}`, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getPigmyAccountSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/pigmy-account-master/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: `${element.AC_NO}`, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getPigmyAgentSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/pigmy-agent/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: `${element.AC_NO}`, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getInvestmentSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/investment/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: `${element.AC_NO}`, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

}