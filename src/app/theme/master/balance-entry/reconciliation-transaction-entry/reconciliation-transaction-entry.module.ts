import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReconciliationTransactionEntryRoutingModule } from './reconciliation-transaction-entry-routing.module';
import { ReconciliationTransactionEntryComponent } from './reconciliation-transaction-entry.component';

@NgModule({
  imports: [
    CommonModule,
    ReconciliationTransactionEntryRoutingModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [ReconciliationTransactionEntryComponent]
})
export class ReconciliationTransactionEntryModule { }
