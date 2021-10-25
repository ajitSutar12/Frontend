import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InsuranceMasterDropdownService {

    url = "http://localhost:4000/insurance-master";

    insuranceMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getInsuranceMasterList() {
        this.insuranceMasterObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.insuranceMasterObject.push(obj)
                });
                return this.insuranceMasterObject;
            }));
    }

}