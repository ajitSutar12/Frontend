import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeReportRoutingModule } from './notice-report-routing.module';
import { NoticeReportComponent } from './notice-report.component';
import { NotticeRoutingModule } from '../nottice-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


@NgModule({
  declarations: [NoticeReportComponent],
  imports: [
    CommonModule,
    NoticeReportRoutingModule,
    CommonModule,
     SharedModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PerfectScrollbarModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ], providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class NoticeReportModule { }
