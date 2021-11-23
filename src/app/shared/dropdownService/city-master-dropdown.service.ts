import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';
import { map } from 'rxjs/operators';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class cityMasterService {
    cityMasterObject = new Array();
    // API 
    //// city-master"; 
    url = environment.base_url;
    constructor(private http: HttpClient) { }

    public getcityList() {
        this.cityMasterObject = [];
        return this.http.get<any>(this.url + '/city-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.CITY_NAME, value: `${element.id}` };
                    this.cityMasterObject.push(obj)
                });
                return this.cityMasterObject;
            }));
    }
}