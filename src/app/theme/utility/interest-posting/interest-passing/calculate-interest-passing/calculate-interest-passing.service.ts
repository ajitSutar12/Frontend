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
export class CalculateInterestPassingService {
  // Variable for handleError
  [x: string]: any;
  // API
  url = environment.base_url;


  constructor(private http: HttpClient) { }
  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + "/calculate-interest-passing/insert", data).pipe(
      map((res) => res),
      catchError((error) => {
        Swal.fire("Please Input Proper Data !");
        return throwError(error);
      })
    );
  }
  // For append data
  getFormData(id: any): Observable<any> {
    return this.http
      .get(this.url + "/calculate-interest-passing/" + id)
      .pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + "/calculate-interest-passing/update", data);
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http
      .delete(this.url + "/calculate-interest-passing/delete/" + id)
      .pipe(catchError(this.handleError));
  }

  //Interest Calculation Passing
  interestCalculationPassing(data){
    return this.http.post(this.url + "/voucher/createVoucherPassingInterest",data);
  }
}