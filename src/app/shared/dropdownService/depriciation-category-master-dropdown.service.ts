import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
@Injectable()
export class DepriciationCatDropdownMasterService {
    depriciationObject = new Array();
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getDepriciationMasterList() {
        this.depriciationObject = []
        return this.http.get<any>(this.url + '/depriciation-category-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.depriciationObject.push(obj)
                });
                return this.depriciationObject;
            }));
    }
}
