import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryReportsRoutingModule } from './recovery-reports-routing.module';
import {RecoveryReportsComponent} from './recovery-reports.component';

@NgModule({
  declarations: [RecoveryReportsComponent],
  imports: [
    CommonModule,
    RecoveryReportsRoutingModule
  ]
})
export class RecoveryReportsModule { }
