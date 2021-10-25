import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OperationMasterDropdownService {

    url = "http://localhost:4000/operation-master";

    operationMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getOperationMasterList() {
        this.operationMasterObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.operationMasterObject.push(obj)
                });
                return this.operationMasterObject;
            }));
    }

}