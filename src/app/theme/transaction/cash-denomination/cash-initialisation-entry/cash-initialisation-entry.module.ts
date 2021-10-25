import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CashInitialisationEntryComponent } from './cash-initialisation-entry.component';
import { CashInitialisationEntryRoutingModule } from './cash-initialisation-entry-routing.module';
import {DataTablesModule} from 'angular-datatables';



@NgModule({
  imports: [
    CommonModule,
    CashInitialisationEntryRoutingModule,
    DataTablesModule
  
  ],
  declarations: [CashInitialisationEntryComponent]
})
export class CashInitialisationEntryModule { }