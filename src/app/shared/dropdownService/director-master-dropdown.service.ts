import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class DirectorMasterDropdownService {

    //  // director-master";
    url = environment.base_url;
    directorMasterObject = new Array();
    directorObject = new Array();

    constructor(private http: HttpClient) { }

    public getDirectorMasterList() {
        this.directorMasterObject = []
        return this.http.get<any>(this.url + '/director-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.NAME, value: `${element.id}`, name:element.IS_CURRENT_BODY_MEMBER };
                    this.directorMasterObject.push(obj)
                });
                return this.directorMasterObject;
            }));
    }

    public getDirectorMastertrueList() {
        this.directorObject = []
        return this.http.get<any>(this.url + '/director-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                
                    if(element.IS_CURRENT_BODY_MEMBER == true){
                        let obj = { label: element.NAME, value: `${element.id}`};
                        this.directorObject.push(obj)
                    }
                   
                });
                return this.directorObject;
            }));

    }

}