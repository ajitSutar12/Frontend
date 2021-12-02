import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class ShareMasterDropdownService {
    sharecodeObject = new Array();
    // url = "http://localhost:4000/share-master";
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getGLAccountMasterList() {
        this.sharecodeObject = []
        return this.http.get<any>(this.url + '/share-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NO + ' ' + element.AC_NAME + ' ', value: `${element.id}` , name: element.AC_NAME};
                    this.sharecodeObject.push(obj)
                });
                return this.sharecodeObject;
            }));
    }
    public getGLAccountMasterNameList() {
        this.sharecodeObject = []
        return this.http.get<any>(this.url + '/share-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.AC_NAME + ' ' + element.AC_NAME + ' ', value: `${element.AC_NAME}` , name: element.AC_NAME};
                    this.sharecodeObject.push(obj)
                });
                return this.sharecodeObject;
            }));
    }
}