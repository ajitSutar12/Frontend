import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

import { CommonModule } from '@angular/common';
import { MasterCashCreditComponent } from './master-cash-credit.component';
import { DataTablesModule } from 'angular-datatables';
import { CashCreditMasterModule } from '../../../master/customer/cash-credit-master/cash-credit-master.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [MasterCashCreditComponent],
  exports: [MasterCashCreditComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    CashCreditMasterModule,
    PerfectScrollbarModule,
    NgbModule,
    SharedModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ]
})
export class MasterCashCreditModule { }
