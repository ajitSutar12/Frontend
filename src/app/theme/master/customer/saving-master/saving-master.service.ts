import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../../environments/environment'
@Injectable()
export class SavingMasterService {
    // Variable for handleError
    [x: string]: any;
    // API 
    url = environment.base_url;
    constructor(private http: HttpClient) { }

    //Insertion Operation
    postData(data: any): Observable<any> {
        return this.http.post(this.url + '/saving-master/insert', data).pipe(map((res) => res),
            catchError((error) => {
                Swal.fire('Please Input Proper Data!');
                return throwError(error);
            })
        )
    }
    // For append data
    getFormData(id: any): Observable<any> {
        return this.http.get(this.url + '/saving-master/' + id).pipe(catchError(this.handleError));
    }
    getData(obj): Observable<any> {
        return this.http.get(this.url + '/saving-master/alldata' + obj).pipe(catchError(this.handleError));
    }

    getSchemeCodeList(scheme): Observable<any> {
        return this.http.get(this.url + '/scheme-parameters/' + scheme).pipe(catchError(this.handleError));
    }
    getCustomerIDMasterList(): Observable<any> {
        return this.http.get(this.url + '/customer-id').pipe(catchError(this.handleError));
    }

    getcategoryList(): Observable<any> {
        return this.http.get(this.url + '/category-master').pipe(catchError(this.handleError));
    }

    getOperationMasterList(): Observable<any> {
        return this.http.get(this.url + '/operation-master').pipe(catchError(this.handleError));
    }
    getMinimumBalanceMasterList(): Observable<any> {
        return this.http.get(this.url + '/minimum-balance-master').pipe(catchError(this.handleError));
    }
    getIntrestCategoaryMasterList(): Observable<any> {
        return this.http.get(this.url + '/interest-category-master').pipe(catchError(this.handleError));
    }
    getcityList(): Observable<any> {
        return this.http.get(this.url + '/city-master').pipe(catchError(this.handleError));
    }
    getOwnbranchList(): Observable<any> {
        return this.http.get(this.url + '/own-branch-master').pipe(catchError(this.handleError));
    }
    getAllSchemeList(): Observable<any> {
        return this.http.get(this.url + '/scheme-parameters/').pipe(catchError(this.handleError));
    }
    getSavingSchemeList1(schemeid): Observable<any> {
        return this.http.get(this.url + '/saving-master/scheme/' + schemeid).pipe(catchError(this.handleError));
    }
    getShareSchemeList1(schemeid): Observable<any> {
        return this.http.get(this.url + '/share-master/scheme/' + schemeid).pipe(catchError(this.handleError));
    }
    getCurrentAccountSchemeList1(schemeid): Observable<any> {
        return this.http.get(this.url + '/current-account-master/scheme/' + schemeid).pipe(catchError(this.handleError));
    }
    getTermLoanSchemeList1(schemeid): Observable<any> {
        return this.http.get(this.url + '/term-loan-master/scheme/' + schemeid).pipe(catchError(this.handleError));
    }
    getTermDepositSchemeList1(schemeid): Observable<any> {
        return this.http.get(this.url + '/term-deposits-master/scheme/' + schemeid).pipe(catchError(this.handleError));
    }
    getDisputeLoanSchemeList1(schemeid): Observable<any> {
        return this.http.get(this.url + '/dispute-loan-master/scheme/' + schemeid).pipe(catchError(this.handleError));
    }
    getCashCreditSchemeList1(schemeid): Observable<any> {
        return this.http.get(this.url + '/cash-credit-master/scheme/' + schemeid).pipe(catchError(this.handleError));
    }
    getAnamatSchemeList1(schemeid): Observable<any> {
        return this.http.get(this.url + '/anamat-gsm/scheme/' + schemeid).pipe(catchError(this.handleError));
    }
    getPigmyAccountSchemeList1(schemeid): Observable<any> {
        return this.http.get(this.url + '/pigmy-account-master/scheme/' + schemeid).pipe(catchError(this.handleError));
    }
    getPigmyAgentSchemeList1(schemeid): Observable<any> {
        return this.http.get(this.url + '/pigmy-agent-master/scheme/' + schemeid).pipe(catchError(this.handleError));
    }
    getInvestmentSchemeList1(schemeid): Observable<any> {
        return this.http.get(this.url + '/pigmy-agent-master/scheme/' + schemeid).pipe(catchError(this.handleError));
    }

    //Updation Operation
    updateData(data): Observable<any> {
        return this.http.put(this.url + '/saving-master/update', data);
    }
    //Deletion Operation
    deleteData(id: any): Observable<any> {
        return this.http.delete(this.url + '/saving-master/delete/' + id).pipe(catchError(this.handleError));
    }


    //approve master
    approve(data: any): Observable<any> {
        return this.http.post(this.url + '/saving-master/approve', data).pipe(catchError(this.handleError));
    }


    //reject master
    reject(data: any): Observable<any> {
        return this.http.post(this.url + '/saving-master/reject', data).pipe(catchError(this.handleError));
    }
}

