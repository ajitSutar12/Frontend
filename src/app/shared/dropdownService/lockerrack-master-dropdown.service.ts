import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class LockerRMasterDropDownService {
    lockerRObject = new Array();
    // // locker-rack-master";
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getLockerRMasterList() {
        this.lockerRObject = []
        return this.http.get<any>(this.url + '/locker-rack-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.RACK_NO + ' ' + element.RACK_DESC, value: element.id, branch: element.BRANCH_CODE };
                    this.lockerRObject.push(obj)
                });
                return this.lockerRObject;
            }));
    }
}
