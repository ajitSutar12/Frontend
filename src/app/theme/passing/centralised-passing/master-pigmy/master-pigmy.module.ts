import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

import { CommonModule } from '@angular/common';
import { MasterPigmyComponent } from './master-pigmy.component';
import { DataTablesModule } from 'angular-datatables';
import { PigmyAccountMasterModule } from '../../../master/customer/pigmy-account-master/pigmy-account-master.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [MasterPigmyComponent],
  exports: [MasterPigmyComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    PigmyAccountMasterModule,
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
export class MasterPigmyModule { }
