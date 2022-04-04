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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getSavingMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/saving-master/balUpdate/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE, branch: element.BRANCH_CODE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getShareMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/share-master/balUpdate/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getCurrentMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/current-account-master/balUpdate/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getTermLoanSchemeListGridData(id):Observable<any>{
        let data = {'id':id};
        return this.http.post(this.url+'/term-loan-master/scheme/',data);
      }

    public getTermLoanMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/term-loan-master/balUpdate/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getTermDepositMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/term-deposits-master/balUpdate/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getGeneralLedgerList1(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/gl-account-master/scheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.AC_NO, acnotype: element.AC_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getGeneralLedgerMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/gl-account-master/balUpdate/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.AC_NO, acnotype: element.AC_ACNOTYPE };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getDisputeLoanMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/dispute-loan-master/balUpdate/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getCashCreditMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/cash-credit-master/balUpdate/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getAnamatMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/anamat-gsm/balUpdate/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getPigmyAccountMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/pigmy-account-master/balUpdate/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
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
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getPigmyAgentMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/pigmy-agent-master/balUpdate/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

    public getpigmyChartAcno(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/pigmy-agent-master/chart/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    console.log('pigmy chart elemnt', element)
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, id: element.id, bank: element.BANKACNO, glacno: element.DPMaster.S_GLACNO };
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
        return this.http.get<any>(this.url + '/investment/scheme/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }
    public getInvestmentMasterAcListForBalUpdation(schemeid) {
        this.schemeObject = []
        return this.http.get<any>(this.url + '/investment/balUpdate/' + schemeid)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO, value: element.AC_NO, name: element.AC_NAME, bankacno: element.BANKACNO, acnotype: element.AC_ACNOTYPE };
                    this.schemeObject.push(obj)
                });
                return this.schemeObject;
            }));
    }

}