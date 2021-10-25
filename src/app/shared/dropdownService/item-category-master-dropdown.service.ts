import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ItemCatMasterDropdownService {
    itemObject: any;
    url = "http://localhost:4000/item-category-master";

    constructor(private http: HttpClient) { }
    public getItemMasterList() {
        this.itemObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.itemObject.push(obj)
                });
                return this.itemObject;
            }));
    }
}
