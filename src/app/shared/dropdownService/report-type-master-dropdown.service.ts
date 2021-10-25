import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ReportTMasterDropdownService {
    reportObject = new Array();
    url = "http://localhost:4000/document-master";

    constructor(private http: HttpClient) { }
    public getReportTMasterList() {
        this.reportObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.reportObject.push(obj)
                });
                return this.reportObject;
            }));
    }
}
