import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class AlternetCodeDropdownService {

    alternetCodeObject = new Array();
    // url = 'http://localhost:4000/gl-statement-code';
     url = environment.base_url;

    constructor(private http: HttpClient) { }
    public getAlternetCodeList() {
        return this.http.get<any>(this.url + '/gl-statement-code')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.A_BALCODE + ' ' + element.A_ACHEAD + ' , ' + element.A_ACTYPE , value: element.id };
                    this.alternetCodeObject.push(obj)
                });
                return this.alternetCodeObject;
            }));
    }


}