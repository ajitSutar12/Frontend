import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import Swal from "sweetalert2";
import {environment} from '../../../../../../environments/environment'

@Injectable({
  providedIn: "root",
})
export class EditInterestCalculationService {
  // Variable for handleError
  [x: string]: any;
  url = environment.base_url;

  constructor(private http: HttpClient) { }
  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + "/edit-interest-calculation/insert", data).pipe(
      map((res) => res),
      catchError((error) => {
        Swal.fire("Please Input Proper Data !");
        return throwError(error);``
      })
    );
  }
  // For append data
  getFormData(id: any): Observable<any> {
    return this.http
      .get(this.url + "/edit-interest-calculation/" + id)
      .pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + "/edit-interest-calculation/update", data);
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http
      .delete(this.url + "/edit-interest-calculation/delete/" + id)
      .pipe(catchError(this.handleError));
  }

  //get interest date data
  interestDate():Observable<any>{
    return this.http.post(this.url+'/voucher/IntrestDate','').pipe(catchError(this.handleError));
  }

  //get Intrest tran data
  interestTranData(data): Observable<any>{
    return this.http.post(this.url+"/voucher/InterestTranData",data)
  }

  //submit tran data
  submitAlterData(data): Observable<any>{
    return this.http.post(this.url+"/voucher/EditInterestTran",data);
  }

  //get Interst tran data scheme wise
  getDataForPassing(data): Observable<any>{
    return this.http.post(this.url+"/voucher/getIntTranDataForPassing",data);
  }

  createVoucher(data):Observable<any>{
    return this.http.post(this.url+'/voucher/createVoucherPassingInterest',data);
  }
}