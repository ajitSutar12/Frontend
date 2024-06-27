import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

import { SchemeATEComponent } from './scheme-ate.component';
import { SchemeATERoutingModule } from './scheme-ate-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';


@NgModule({
  imports: [
    CommonModule,
    SchemeATERoutingModule,
    SharedModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    HttpClientModule,
//     TranslateModule.forRoot({
//   loader:{
//     provide:TranslateLoader,
//     useFactory:HttpLoaderFactory,
//     deps:[HttpClient]
//   }
// })
  ],
  declarations: [SchemeATEComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SchemeCodeDropdownService,
  SchemeAccountNoService,
]
})
export class SchemeATEModule { }
// export function HttpLoaderFactory(http:HttpClient){
//   return new TranslateHttpLoader(http);
// }
