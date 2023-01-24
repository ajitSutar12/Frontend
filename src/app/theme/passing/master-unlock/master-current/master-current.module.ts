import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

import { CommonModule } from '@angular/common';
import { MasterCurrentComponent } from './master-current.component';
import { DataTablesModule } from 'angular-datatables';
import { CurrentAccountMasterModule } from '../../../master/customer/current-account-master/current-account-master.module';
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
    CurrentAccountMasterModule,
    PerfectScrollbarModule,
    NgbModule,
    SharedModule
  ],
  exports: [MasterCurrentComponent],
  declarations: [MasterCurrentComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ]
})
export class MasterCurrentModule { }
