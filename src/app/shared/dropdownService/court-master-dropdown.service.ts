import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class CourtMasterDropdownService {

    // // court-master";
    url = environment.base_url;
    courtMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getCourtMasterList() {
        this.courtMasterObject = []
        return this.http.get<any>(this.url + '/court-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.courtMasterObject.push(obj)
                });
                return this.courtMasterObject;
            }));
    }

}