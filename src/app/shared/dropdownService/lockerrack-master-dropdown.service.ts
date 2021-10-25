import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class LockerRMasterDropDownService {
    lockerRObject = new Array();
    url = "http://localhost:4000/locker-rack-master";

    constructor(private http: HttpClient) { }
    public getLockerRMasterList() {
        this.lockerRObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.RACK_NO, value: element.id };
                    this.lockerRObject.push(obj)
                });
                return this.lockerRObject;
            }));
    }
}
