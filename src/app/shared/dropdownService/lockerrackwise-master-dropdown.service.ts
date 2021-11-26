import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class LockerRWMasterDropDownService {
    lockerRWObject = new Array();
    // // locker-rackwise-master";
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getLockerRWMasterList() {
        this.lockerRWObject = []
        return this.http.get<any>(this.url + '/locker-rackwise-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.RACK_NO, value: `${element.id }`};
                    this.lockerRWObject.push(obj)
                });
                return this.lockerRWObject;
            }));
    }
}
