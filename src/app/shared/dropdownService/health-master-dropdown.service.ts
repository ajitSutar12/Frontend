import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HealthMasterDropdownService {
    healthMasterObject = new Array();
    url = 'http://localhost:4000/health-master';

    constructor(private http: HttpClient) { }
    public getHealthMasterList() {
        this.healthMasterObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.healthMasterObject.push(obj)
                });
                return this.healthMasterObject;
            }));
    }


}