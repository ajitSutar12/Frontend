import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IOption } from 'ng-select';
import { map } from 'rxjs/operators';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'



@Injectable()
export class CastMasterService {
  getCharacters(): IOption[] {
    throw new Error('Method not implemented.');
  }
  castMasterObject = new Array();
  // API 
  //// cast-master"; 
  url = environment.base_url;
  constructor(private http: HttpClient) { }

  public getcastList() {
    this.castMasterObject = []
    return this.http.get<any>(this.url + '/cast-master')
      .pipe(map(ele => {
        ele.forEach(element => {
          let obj = { label: element.NAME, value: element.id };
          this.castMasterObject.push(obj)
        });
        return this.castMasterObject;
      }));
  }

}
