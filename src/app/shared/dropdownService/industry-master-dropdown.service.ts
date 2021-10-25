import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IndustryMasterDropdownService {
    industryMasterObject = new Array();
    url = 'http://localhost:4000/industry-master';

    constructor(private http: HttpClient) { }
    public getIndustaryMasterList() {
        this.industryMasterObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.industryMasterObject.push(obj)
                });
                return this.industryMasterObject;
            }));
    }


}