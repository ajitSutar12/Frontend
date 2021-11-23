import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class PrioritySectorMasterDropdownService {

    // // priority-sector-master";
    url = environment.base_url;
    prioritysectorMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getPrioritySectorMasterList() {
        this.prioritysectorMasterObject = []
        return this.http.get<any>(this.url + '/priority-sector-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: `${element.id}`  };
                    this.prioritysectorMasterObject.push(obj)
                });
                return this.prioritysectorMasterObject;
            }));
    }

}