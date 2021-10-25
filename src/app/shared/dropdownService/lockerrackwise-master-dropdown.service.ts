import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class LockerRWMasterDropDownService {
    lockerRWObject = new Array();
    url = "http://localhost:4000/locker-rackwise-master";

    constructor(private http: HttpClient) { }
    public getLockerRWMasterList() {
        this.lockerRWObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.RACK_NO, value: element.id };
                    this.lockerRWObject.push(obj)
                });
                return this.lockerRWObject;
            }));
    }
}
