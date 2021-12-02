import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class SecurityMasterdropdownService {
    securityObject = new Array();
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getsecurityMasterList() {
        this.securityObject = []
        return this.http.get<any>(this.url + '/security-code')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.SECU_CODE + ' ' +  element.SECU_NAME , value: `${element.id}`, name: element. SECU_NAME, id: element.SECU_CODE};
                    this.securityObject.push(obj)
                });
                return this.securityObject;
            }));
    }
}
