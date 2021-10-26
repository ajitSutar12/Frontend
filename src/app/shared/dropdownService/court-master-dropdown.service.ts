import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CourtMasterDropdownService {

    url = "http://localhost:4000/court-master";

    courtMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getCourtMasterList() {
        this.courtMasterObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.courtMasterObject.push(obj)
                });
                return this.courtMasterObject;
            }));
    }

}