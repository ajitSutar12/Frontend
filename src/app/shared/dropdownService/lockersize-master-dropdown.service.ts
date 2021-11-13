import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class LockerSMasterDropDownService {
    lockerSObject = new Array();
    // url = "http://localhost:4000/locker-size-master";
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getLockerSMasterList() {
        this.lockerSObject = []
        return this.http.get<any>(this.url + '/locker-size-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.SIZE_NAME, value: element.SIZE_NAME };
                    this.lockerSObject.push(obj)
                });
                return this.lockerSObject;
            }));
    }
}
