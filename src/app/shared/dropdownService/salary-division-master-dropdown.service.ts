import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SalaryDMasterdropdownService {
    salaryObject = new Array();
    url = "http://localhost:4000/salary-division-master";

    constructor(private http: HttpClient) { }
    public getSalaryDMasterList() {
        this.salaryObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.salaryObject.push(obj)
                });
                return this.salaryObject;
            }));
    }
}
