import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DepriciationCatDropdownMasterService {
    depriciationObject = new Array();
    url = "http://localhost:4000/depriciation-category-master";

    constructor(private http: HttpClient) { }
    public getDepriciationMasterList() {
        this.depriciationObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.depriciationObject.push(obj)
                });
                return this.depriciationObject;
            }));
    }
}
