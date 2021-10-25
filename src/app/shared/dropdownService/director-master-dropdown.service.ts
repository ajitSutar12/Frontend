import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DirectorMasterDropdownService {

    url = "http://localhost:4000/director-master";

    directorMasterObject = new Array();

    constructor(private http: HttpClient) { }

    public getDirectorMasterList() {
        this.directorMasterObject = []
        return this.http.get<any>(this.url + '/')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: element.id };
                    this.directorMasterObject.push(obj)
                });
                return this.directorMasterObject;
            }));
    }

}