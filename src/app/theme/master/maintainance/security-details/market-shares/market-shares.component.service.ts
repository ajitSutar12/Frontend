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
export class marketsharesomponentservice {
  // Variable for handleError
  [x: string]: any;
  // API
  url = environment.base_url;

  constructor(private http: HttpClient) {}
  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + "/market-shares/insert", data).pipe(
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
<<<<<<< Updated upstream
      .get(this.url + "/xyz/" + id)
=======
      .get(this.url + "/market-shares/" + id)
>>>>>>> Stashed changes
      .pipe(catchError(this.handleError));
  }
  //Updation Operation
  updateData(data): Observable<any> {
<<<<<<< Updated upstream
    return this.http.put(this.url + "/pqr/update", data);
=======
    return this.http.put(this.url + "/market-shares/update", data);
>>>>>>> Stashed changes
  }
  //Deletion Operation
  deleteData(id: any): Observable<any> {
    return this.http
<<<<<<< Updated upstream
      .delete(this.url + "/efg/delete/" + id)
=======
      .delete(this.url + "/market-shares/delete/" + id)
>>>>>>> Stashed changes
      .pipe(catchError(this.handleError));
  }
}
