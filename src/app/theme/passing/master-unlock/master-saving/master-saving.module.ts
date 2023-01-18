import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

import { CommonModule } from '@angular/common';
import { MasterSavingComponent } from './master-saving.component';
import { DataTablesModule } from 'angular-datatables';
import { SavingMasterModule } from '../../../master/customer/saving-master/saving-master.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [MasterSavingComponent],
  exports: [MasterSavingComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    SavingMasterModule,
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
export class MasterSavingModule { }
