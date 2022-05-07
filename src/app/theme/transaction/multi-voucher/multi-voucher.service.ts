import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment';
@Injectable({
    providedIn: 'root'
})
export class MultiVoucherService {
    // Variable for handleError
    [x: string]: any;
    // API 
    url = environment.base_url;
    constructor(private http: HttpClient) { }


    getSchemeCodeList(): Observable<any> {
        return this.http.get(this.url + '/scheme-parameters')
    }

    //get narration data
    getNarrationMaster(): Observable<any> {
        return this.http.get(this.url + '/narration')
    }

    //get syspara 
    getSysParaData(): Observable<any> {
        return this.http.get(this.url + '/system-master-parameters');
    }

    //insert voucher entyr
    insertVoucher(data): Observable<any> {
        return this.http.post(this.url + '/voucher/insertMultiVoucher', data);
    }

    //Get Head details using head
    getHeadDetails(data): Observable<any> {
        return this.http.post(this.url + '/voucher/intrestHead', data);
    }

    //get voucher pass and unpass data
    getVoucherPassAndUnpassData(data): Observable<any> {
        return this.http.post(this.url + '/voucher/PassUnpassData', data);
    }

    //check customer account close or not
    checkAccountCloseOrNot(data): Observable<any> {
        return this.http.post(this.url + '/voucher/checkAccountCloseDetails', data);
    }
    // For append data
    getFormData(id): Observable<any> {
        console.log(id,'id')
        // return this.http.post(this.url + '/voucher/editMulti', id);
        return this.http.get(this.url + "/voucher/editMulti/" + id).pipe(catchError(this.handleError));

    }
}
