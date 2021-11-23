import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';
import { map } from 'rxjs/operators';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class NarrationMasterService {
    NarrationMasterObject = new Array();
    // API 
    //// narration"; 
    url = environment.base_url;
    constructor(private http: HttpClient) { }

    public getNarrationList() {
        this.NarrationMasterObject = []
        return this.http.get<any>(this.url + '/narration')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.NarrationMasterObject.push(obj)
                });
                return this.NarrationMasterObject;
            }));
    }

}