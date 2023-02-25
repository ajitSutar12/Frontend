import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanOverdueReportRoutingModule } from './loan-overdue-report-routing.module';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
// import { SharedModule } from 'src/app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoanOverdueReportRoutingModule,
    PerfectScrollbarModule,
    FormsModule, ReactiveFormsModule,
    NgSelectModule,
    // SharedModule,

  ],
  // providers:[
  //   {
  //     provide: PERFECT_SCROLLBAR_CONFIG,
  //     useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

  //   }, {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: UserAuthInterceptor,
  //     multi: true
  //   },
  // ]
})
export class LoanOverdueReportModule { }
