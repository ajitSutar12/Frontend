import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getSavingSchemeList1(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/saving-master/scheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getShareSchemeList1(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/share-master/scheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getShareSchemeList2(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/share-master/memno/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getShareSchemeListDT(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/share-master/getdata/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.DIV_TRANSFER_BRANCH, value: element.DIV_TRANSFER_ACTYPE, name: element.DIV_TRANSFER_ACNO };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
        // return this.http.get(this.url + '/share-master/getdata/' + schemeid);
        // return this.http.get(this.url + '/scheme-parameters/' + schemeid).pipe(catchError(this.handleError));
    }
    public getCurrentAccountSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/current-account-master/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getCurrentAccountSchemeList1(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/current-account-master/scheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getTermLoanSchemeList1(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/term-loan-master/scheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getTermDepositSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/term-deposits-master/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getTermDepositSchemeList1(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/term-deposits-master/scheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getDisputeLoanSchemeList1(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/dispute-loan-master/scheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getCashCreditSchemeList1(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/cash-credit-master/scheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getAnamatSchemeList1(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/anamat-gsm/scheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getPigmyAccountSchemeList1(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/pigmy-account-master/scheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getPigmyAgentSchemeList() {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/pigmy-agent-master/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getPigmyAgentSchemeList1(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/pigmy-agent-master/scheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getpigmyChartAcno(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/pigmy-agent-master/scheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getPigmyAgentSchemeList2(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/pigmy-agent-master/pigmyscheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO + ' ' + element.AC_NAME, value: element.AC_NO, name: element.AC_NAME };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getInvestmentSchemeList1(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/pigmy-agent-master/scheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

}