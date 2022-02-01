import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

import { CommonModule } from '@angular/common';
import { MasterLoanComponent } from './master-loan.component';
import { DataTablesModule } from 'angular-datatables';
import { TermLoanMasterModule } from '../../../master/customer/term-loan-master/term-loan-master.module'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    TermLoanMasterModule,
    PerfectScrollbarModule,
    NgbModule,
    SharedModule
  ],
  exports: [MasterLoanComponent],
  declarations: [MasterLoanComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ]
})
export class MasterLoanModule { }
