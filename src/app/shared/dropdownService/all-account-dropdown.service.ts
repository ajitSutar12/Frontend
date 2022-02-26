import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AllAccountDropdownService {

    // // gl-account-master"; 
    url = environment.base_url;
    acMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getSavingList(BranchCode) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/saving-master/alldata' + BranchCode)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getCurrentList(BranchCode) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/current-account-master/alldata' + BranchCode)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getTermDepositList(BranchCode) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/term-deposits-master/alldata' + BranchCode)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getPigmyAgentList(BranchCode) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/pigmy-agent-master/alldata' + BranchCode)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getPigmyAccountList(BranchCode) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/pigmy-account-master/alldata' + BranchCode)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getTermLoanList(BranchCode) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/term-loan-master/alldata' + BranchCode)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getCashCreditList(BranchCode) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/cash-credit-master/alldata' + BranchCode)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getInvestmentList(BranchCode) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/investment/alldata' + BranchCode)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getAnamatList(BranchCode) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/anamat-gsm/alldata' + BranchCode)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getShareList(BranchCode) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/share-master/alldata' +BranchCode)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }


    public getSavingListAccount(account) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/saving-master/listalldata' + account)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getCurrentListAccount(account) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/current-account-master/listalldata' + account)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getTermDepositListAccount(account) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/term-deposits-master/listalldata' + account)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getPigmyAgentListAccount(account) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/pigmy-agent-master/listalldata' + account)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getPigmyAccountListAccount(account) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/pigmy-account-master/listalldata' + account)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getTermLoanListAccount(account) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/term-loan-master/listalldata' + account)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getCashCreditListAccount(account) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/cash-credit-master/listalldata' + account)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getInvestmentListAccount(account) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/investment/listalldata' + account)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getAnamatListAccount(account) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/anamat-gsm/listalldata' + account)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
    public getShareListAccount(account) {
        this.acMasterObject = [];
        return this.http.get<any>(this.url + '/share-master/listalldata' + account)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME, value: element.AC_NO };
                    this.acMasterObject.push(obj)
                });
                return this.acMasterObject;
            }));
    }
}