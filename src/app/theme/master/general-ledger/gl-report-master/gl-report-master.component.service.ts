import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../../environments/environment";
import { Observable, throwError } from "rxjs";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class ReportService {
  url = environment.base_url;
  handleError:any;

  constructor(private http: HttpClient) {}
  //Insertion Operation
  postData(data: any): Observable<any> {
    console.log(data);
    return this.http.post(this.url + "/abc", data).pipe(
      map((res) => res),
      catchError((error) => {
        Swal.fire("Please Input Proper Data !");
        return throwError(error);
      })
    );
  }
   // For append data
   getFormData(id: any): Observable<any> {
    return this.http.get(this.url + '/xyz' + id).pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {
    return this.http.put(this.url + '/pqr', data);
  }
    //Deletion Operation
    deleteData(id: any): Observable<any> {
      console.log("deleted");
      return this.http.delete(this.url + '/xyz' + id).pipe(catchError(this.handleError));
    }
}
