// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import {map, retry} from 'rxjs/operators';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// @Injectable()
// export class Demo1Service {
//   httpData: any;
//   url:string;
//   url1 = "http://localhost:4000/gl-statement-code";
//   constructor(private _http: HttpClient) {

//   }


//     //load data for student forms
//     loadData(): Observable<any> {

//       return this._http.get(this.url1).pipe(

//         map((res) => res)

//       )

//     }
//     private extractData(res: Response) {
//       console.log(res)
//       let body = res;
//       return body;
//     }

// getData():Observable<any>{
//   let httpHeaders = new HttpHeaders({
//     'Content-Type' : 'application/json'
//   })
//   let result = this.httpClient.get(this.url+'/user',{headers:httpHeaders});
//   console.log(result);
//   return result;
// }

// deleteStudent(id,database):Observable<any>{
//   let httpHeaders = new HttpHeaders({
//     'Content-Type' : 'application/json'
//   })
//   let result = this.httpClient.delete(this.url+'/user/'+id,{headers:httpHeaders});
//   return result;
// }

// submitData(data):Observable<any>{
//   let httpHeaders = new HttpHeaders({
//     'Content-Type' : 'application/json'
//   })
//   let result = this.httpClient.post(this.url+'/user',data,{headers:httpHeaders});
//   console.log(result);
//   return result;
// }

// getStudentData(id,database):Observable<any>{
//   let httpHeaders = new HttpHeaders({
//     'Content-Type' : 'application/json'
//   })
//   let result = this.httpClient.get(this.url+'/user/'+id,{headers:httpHeaders});
//   return result;
// }

// updateData(data):Observable<any>{
//   let httpHeaders = new HttpHeaders({
//     'Content-Type' : 'application/json'
//   })
//   let result = this.httpClient.put(this.url+'/user',data,{headers:httpHeaders});
//   console.log(result);
//   return result;
// }

// getMasterData():Observable<any>{
//   let httpHeaders = new HttpHeaders({
//     'Content-Type' : 'application/json'
//   })
//   let result = this.httpClient.get(this.url+'/master',{headers:httpHeaders});
//   return result;
// }
// }



import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';

export class Demo1Service {
  getBooks(): TreeviewItem[] {

    const masterMenu = new TreeviewItem({
      text: 'Master', value: 1, children: [
        {
          text: 'General Ledger', value: 11, children: [
            { text: 'GL Statement Code', value: 111 },
            { text: 'GL Account Master', value: 112 },
            { text: 'GL Report Master', value: 113 },
            { text: 'GL Report Linking', value: 114 },
            { text: 'Budget Master', value: 115 },
          ]
        },
        {
          text: 'Customer', value: 11, children: [
            { text: 'GL Statement Code', value: 111 },
            { text: 'GL Account Master', value: 112 },
            { text: 'GL Report Master', value: 113 },
            { text: 'GL Report Linking', value: 114 },
            { text: 'Budget Master', value: 115 },
          ]
        }
      ]
    });


    return [masterMenu];
  }
}
