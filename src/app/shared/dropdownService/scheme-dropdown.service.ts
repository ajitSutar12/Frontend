import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';
import { map } from 'rxjs/operators';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class schemedropdownService {
    OwnbranchMasterObject = new Array();
    // API 
    //url = "http://localhost:4000/own-branch-master"; 
    url = environment.base_url;

    constructor(private http: HttpClient) { }

    public getschemelsit(data:any) {
        this.OwnbranchMasterObject = []
        return this.http.get<any>(this.url + '/own-branch-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: `${element.id }`};
                    this.OwnbranchMasterObject.push(obj)
                });
                return this.OwnbranchMasterObject;
            }));
    }

}