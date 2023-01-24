import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

import { CommonModule } from '@angular/common';
import { MasterDepositsComponent } from './master-deposits.component';
import { DataTablesModule } from 'angular-datatables';
import { TermDepositsMasterModule } from '../../../master/customer/term-deposits-master/term-deposits-master.module';
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
    TermDepositsMasterModule,
    PerfectScrollbarModule,
    NgbModule,
    SharedModule
  ],
  exports: [MasterDepositsComponent],
  declarations: [MasterDepositsComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ]
})
export class MasterDepositsModule { }
