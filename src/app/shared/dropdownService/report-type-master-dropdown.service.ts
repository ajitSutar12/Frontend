import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class ReportTMasterDropdownService {
    reportObject = new Array();
    // // document-master";
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getReportTMasterList() {
        this.reportObject = []
        return this.http.get<any>(this.url + '/document-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.reportObject.push(obj)
                });
                return this.reportObject;
            }));
    }
}
