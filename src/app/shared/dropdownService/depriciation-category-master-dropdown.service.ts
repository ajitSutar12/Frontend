import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
@Injectable()
export class DepriciationCatDropdownMasterService {
  url = environment.base_url;
  depriciationCat = new Array();

  constructor(private http: HttpClient) {}

  public getDepriciationCatasterList() {
    this.depriciationCat = [];
    return this.http.get<any>(this.url + "/depriciation-category-master").pipe(
      map((ele) => {
        ele.forEach((element) => {
          let obj = { label: element.NAME, value: element.id };
          this.depriciationCat.push(obj);
        });
        return this.depriciationCat;
      })
    );
  }
}
