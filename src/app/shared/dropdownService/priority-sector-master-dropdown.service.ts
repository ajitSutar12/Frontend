import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PrioritySectorMasterDropdownService {

    url = "http://localhost:4000/priority-sector-master";

    prioritysectorMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getPrioritySectorMasterList() {
        this.prioritysectorMasterObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.prioritysectorMasterObject.push(obj)
                });
                return this.prioritysectorMasterObject;
            }));
    }

}