import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class InsuranceMasterDropdownService {

    // // insurance-master";
    url = environment.base_url;
    insuranceMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getInsuranceMasterList() {
        this.insuranceMasterObject = []
        return this.http.get<any>(this.url + '/insurance-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: `${element.id }`};
                    this.insuranceMasterObject.push(obj)
                });
                return this.insuranceMasterObject;
            }));
    }

}