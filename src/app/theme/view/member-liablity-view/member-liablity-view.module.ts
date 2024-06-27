import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

import {DataTablesModule} from 'angular-datatables';

import { MemberLiablityViewComponent } from './member-liablity-view.component';
import { MemberLiablityViewRoutingModule } from './member-liablity-view-routing.module'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { Iframe5Module } from '../../reports/pigmy-report/iframe5/iframe5.module';




@NgModule({
  imports: [
    CommonModule,
    MemberLiablityViewRoutingModule,    
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module,HttpClientModule

  ],
  declarations: [MemberLiablityViewComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SchemeCodeDropdownService,
  SchemeAccountNoService
]
})
export class MemberLiablityViewModule { }