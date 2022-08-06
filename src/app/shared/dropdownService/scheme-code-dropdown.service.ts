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
                    let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_APPL, id: element.S_ACNOTYPE, dividend: element.DIVIDEND_PERCENTAGE, divMethod: element.INTEREST_RULE, isAddBonus: element.IS_ADD_BONUS_IN_DIVIDEND, INT_ROUND_OFF: element.INT_ROUND_OFF };
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
                    let obj = { label: element.S_NAME, value: element.id, name: element.S_ACNOTYPE, id: element.S_APPL, glacno: element.S_GLACNO, intapp: element.S_INT_APPLICABLE, SVR_CHARGE_GLCODE: element.SVR_CHARGE_GLCODE, SVR_CHARGE_RATE: element.SVR_CHARGE_RATE, prematureRate: element.LESS_PREMATURE_INT_RATE, schemeMethod: element.INTEREST_RULE, monthDays: element.S_INTCALTP, Quarterly: element.COMPOUND_INT_BASIS, interestUptoCalDate: element.IS_INTUPTODATE, afterMatureIntRate: element.AFTER_MATURE_INT_RATE, rebateRate: element.REBATE_INTRATE, installmentType: element.S_INSTTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getAllSchemeList1() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/scheme-parameters/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE, code: element.S_APPL };
                    this.schemeObject.push(obj)
                });

                return this.schemeObject;
            }));

    }

    public getTermDepositSchemeRD() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/scheme-parameters/term/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    // let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };

                    let obj = { label: element.S_NAME, value: element.id, name: element.S_ACNOTYPE, id: element.S_APPL, glacno: element.S_GLACNO, intapp: element.S_INT_APPLICABLE, SVR_CHARGE_GLCODE: element.SVR_CHARGE_GLCODE, SVR_CHARGE_RATE: element.SVR_CHARGE_RATE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getTermDepositSchemePatD() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/scheme-parameters/pat/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.S_APPL + ' ' + element.S_NAME, value: element.id, name: element.S_ACNOTYPE };
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