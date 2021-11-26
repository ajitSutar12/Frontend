import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class DocumentMasterDropdownService {
    documentObject = new Array();
    // // document-master";
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getDocumentMasterList() {
        this.documentObject = []
        return this.http.get<any>(this.url + '/document-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: `${element.id }`};
                    this.documentObject.push(obj)
                });
                return this.documentObject;
            }));
    }
}
