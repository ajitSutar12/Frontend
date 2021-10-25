import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReconciliationEntryComponent } from './reconciliation-entry.component';
import { ReconciliationEntryRoutingModule } from './reconciliation-entry-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    ReconciliationEntryRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [ReconciliationEntryComponent]
})
export class ReconciliationEntryModule { }