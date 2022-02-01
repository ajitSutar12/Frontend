import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ItemCategoryMasterComponent } from 'src/app/theme/master/policy-settings/information/item-category-master/item-category-master.component';
@Injectable()
export class TermemeDepositeSchMasterDropdownService {
    TermDepositschemeMasterObject = new Array();
    // url = "http://localhost:4000/scheme-parameters";
    url = environment.base_url;
    constructor(private http: HttpClient) { }


    // public getTermdepositeschemeMasterList() {
    //     this.TermDepositschemeMasterObject = []
    //     return this.http.get<any>(this.url + '/term-deposit-scheme')
    //         .pipe(map(ele => {
    //             ele.forEach(element => {
    //                 if(element.INTEREST_RULE == true){

    //                     let obj = { label: element.S_APPL, value: element.id};
    //                     this.TermDepositschemeMasterObject.push(obj)
    //                 }


    //             });
    //             return this.TermDepositschemeMasterObject;
    //         }));
    // } 

    public getTermdepositeschemeMasterList() {
        this.TermDepositschemeMasterObject = []
        return this.http.get<any>(this.url + '/term-deposit-scheme')
            .pipe(map(ele => {
                ele.forEach(element => {
                    
                    console.log(element)
                    //  if (element.INTEREST_RULE == ){
                    if (element.INTEREST_RULE== "Compounding") {
                        let obj = { label: element.S_ACNOTYPE + ' ' + element.S_APPL, value: element.id };
                        this.TermDepositschemeMasterObject.push(obj)
                        // }
                    }

                });
                console.log(this.TermDepositschemeMasterObject)
                return this.TermDepositschemeMasterObject;
            }));
    }
}