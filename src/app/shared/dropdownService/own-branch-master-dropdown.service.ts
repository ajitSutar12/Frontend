import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';
import { map } from 'rxjs/operators';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class OwnbranchMasterService {
    OwnbranchMasterObject = new Array();
    // API 
    //// own-branch-master"; 
    url = environment.base_url;

    constructor(private http: HttpClient) { }

    public getOwnbranchList() {
        this.OwnbranchMasterObject = []
        return this.http.get<any>(this.url + '/own-branch-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.CODE +' '+element.NAME, value: `${element.id}` };
                    this.OwnbranchMasterObject.push(obj)
                });
                return this.OwnbranchMasterObject;
            }));
    }

}