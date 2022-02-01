import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class ShareSchemeDropdownService {
    ShareSchemeObject = new Array();
    // url = "http://localhost:4000/shares-scheme";
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getShareschemelist() {
        this.ShareSchemeObject = []
        return this.http.get<any>(this.url + '/shares-scheme')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.S_APPL + ' ' + element.S_APPL + ' ', value: element.id };
                    this.ShareSchemeObject.push(obj)
                });
                return this.ShareSchemeObject;
            }));
    }
}