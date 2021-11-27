import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import { HttpHeaders } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class RoleMasterService {

  url =  environment.base_url;
  constructor(private http:HttpClient) { }

  insertData(data:any): Observable<any>{
    return this.http.post(this.url+'/user-defination/insert_roles',data).pipe();
  }

  getRoleList():Observable<any>{
    return this.http.post(this.url+'/user-defination/roles',{}).pipe();
  }

  updateRoleData(data:any): Observable<any>{
    return this.http.post(this.url+'/user-defination/update_roles',data).pipe();
  }
}
