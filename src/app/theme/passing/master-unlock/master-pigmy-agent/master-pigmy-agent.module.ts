import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

import { CommonModule } from '@angular/common';
import { MasterPigmyAgentComponent } from './master-pigmy-agent.component';
import { DataTablesModule } from 'angular-datatables';
import { PigmyAgentMasterModule } from '../../../master/customer/pigmy-agent-master/pigmy-agent-master.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [MasterPigmyAgentComponent],
  exports: [MasterPigmyAgentComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    PigmyAgentMasterModule,
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
export class MasterPigmyAgentModule { }
