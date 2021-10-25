import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedgerViewRoutingModule } from './ledger-view-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import { LedgerViewComponent } from './ledger-view.component';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  imports: [
    CommonModule,
    LedgerViewRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  declarations: [LedgerViewComponent]
})
export class LedgerViewModule { }
