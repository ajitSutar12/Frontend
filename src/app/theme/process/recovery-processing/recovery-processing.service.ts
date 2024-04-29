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
export class RecoveryProcessingService {

  [x: string]: any;
  url = environment.base_url;

  constructor(private http: HttpClient) { }

//get narration data
getNarrationMaster(): Observable<any> {
  return this.http.get(this.url + '/narration')
}

getSchemeCodeList(): Observable<any> {
  return this.http.get(this.url + '/scheme-parameters')
}


}
