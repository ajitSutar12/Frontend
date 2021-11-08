import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class SubSalaryDMasterdropdownService {
    subSalaryObject = new Array();
    // url = "http://localhost:4000/salary-division-master";
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getSubSalaryDMasterList() {
        this.subSalaryObject = []
        return this.http.get<any>(this.url + '/salary-division-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.subSalaryObject.push(obj)
                });
                return this.subSalaryObject;
            }));
    }
}
