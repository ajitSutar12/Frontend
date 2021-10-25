import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryModificationComponent } from './recovery-modification.component';
import { RecoveryModificationRoutingModule } from './recovery-modification-routing.module';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    RecoveryModificationRoutingModule,
    DataTablesModule
  ],
  declarations: [RecoveryModificationComponent]
})
export class RecoveryModificationModule { }
