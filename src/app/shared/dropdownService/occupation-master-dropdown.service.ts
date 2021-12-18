import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';
import { map } from 'rxjs/operators';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class OccupationMasterService {
    occupationMasterObject = new Array();
    // API 
    // // occupation-master"; 
    url = environment.base_url;
    constructor(private http: HttpClient) { }

    public getoccupationList() {
        this.occupationMasterObject = []
        return this.http.get<any>(this.url + '/occupation-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: `${element.NAME }`};
                    this.occupationMasterObject.push(obj)
                });
                return this.occupationMasterObject;
            }));
    }

}