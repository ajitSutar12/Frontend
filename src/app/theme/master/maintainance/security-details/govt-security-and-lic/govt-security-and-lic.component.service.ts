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
export class governmentsecuritycomponentservice {
  // Variable for handleError
  [x: string]: any;
  // API
  url = environment.base_url;

  constructor(private http: HttpClient) {
    console.log(this.url);
  }
  
  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http
      .post(this.url + "/govt-security-and-lic/insert", data)
      .pipe(
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
      .get(this.url + "/govt-security-and-lic/" + id)
      .pipe(catchError(this.handleError));
  }

  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + "/govt-security-and-lic/update", data);
  }

  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http
      .delete(this.url + "/govt-security-and-lic/delete/" + id)
      .pipe(catchError(this.handleError));
  }
}
