import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class OperationMasterDropdownService {
    // // operation-master";
    url = environment.base_url;
    operationMasterObject = new Array();
    constructor(private http: HttpClient) { }
    public getOperationMasterList() {
        this.operationMasterObject = []
        return this.http.get<any>(this.url + '/operation-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.operationMasterObject.push(obj)
                });
                return this.operationMasterObject;
            }));
    }
}