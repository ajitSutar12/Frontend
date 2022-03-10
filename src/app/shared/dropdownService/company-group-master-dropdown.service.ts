import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable()
export class CompanyGroupMasterDropdownService {
    companyGroupObject = new Array();
    // // company-group-master";
    url = environment.base_url;
    constructor(private http: HttpClient) { }
    public getCompanyGroupMasterList() {
        this.companyGroupObject = []
        return this.http.get<any>(this.url + '/company-group-master')
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.COMP_CODE, value: element.id, name: element.NAME };
                    this.companyGroupObject.push(obj)
                });
                return this.companyGroupObject;
            }));
    }

    public getCompanyGroupMasterBranchList(branch) {
        this.companyGroupObject = []
        return this.http.get<any>(this.url + '/company-group-master/getBranch/' + branch)
            .pipe(map(ele => {
                ele.forEach(element => {
                    let obj = { label: element.COMP_CODE, value: element.id, name: element.NAME };
                    this.companyGroupObject.push(obj)
                });
                return this.companyGroupObject;
            }));
    }

    public getCompanyData(id):Observable<any>{
        let obj = {'id':id}
        return this.http.post(this.url+'/company-group-master/companyData/',obj);
    }

    public getCompanyGridData(id):Observable<any>{
        let data = {'id':id};
        return this.http.post(this.url+'/company-group-link-master/gridDataIdWise/',data);
      }
}
