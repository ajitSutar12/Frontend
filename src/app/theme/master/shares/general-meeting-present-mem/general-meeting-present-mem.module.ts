import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralMeetingPresentMemRoutingModule } from './general-meeting-present-mem-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralMeetingPresentMemComponent } from './general-meeting-present-mem.component';


@NgModule({
  declarations: [GeneralMeetingPresentMemComponent],
  imports: [
    CommonModule,
    GeneralMeetingPresentMemRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule,
    // BrowserModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    
  ],

  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SchemeCodeDropdownService,
  SchemeAccountNoService
]



})
export class GeneralMeetingPresentMemModule { }
