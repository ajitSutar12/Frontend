import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import Swal from "sweetalert2";
import { environment } from "../../../../../../environments/environment";
@Injectable({
  providedIn: "root",
})
export class customerinsuranceService {
  // Variable for handleError
  [x: string]: any;
  // API
  url = environment.base_url;

  constructor(private http: HttpClient) { }
  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + "/customer-insurance/insert", data).pipe(
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
      .get(this.url + "/customer-insurance/" + id)
      .pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + "/customer-insurance/update", data);
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http
      .delete(this.url + "/customer-insurance/delete/" + id)
      .pipe(catchError(this.handleError));
  }

  getdatatable(data): Observable<any> {
    return this.http.post(this.url + "/customer-insurance/getdatatable", data);
  }
}
