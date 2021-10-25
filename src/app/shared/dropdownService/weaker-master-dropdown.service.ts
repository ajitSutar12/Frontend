import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeakerMasterDropdownService {
    weakerMasterObject = new Array();
    url = 'http://localhost:4000/weaker-master';

    constructor(private http: HttpClient) { }
    public getWeakerMasterList() {
        this.weakerMasterObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.weakerMasterObject.push(obj)
                });
                return this.weakerMasterObject;
            }));
    }


}