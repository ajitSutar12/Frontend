import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable()
export class ItemCatMasterDropdownService {
    itemObject: any;
    // url = "http://localhost:4000/item-category-master";
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getItemMasterList() {
        this.itemObject = []
        return this.http.get<any>(this.url + '/item-category-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.NAME };
                    this.itemObject.push(obj)
                });
                return this.itemObject;
            }));
    }
}
