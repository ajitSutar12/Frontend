import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReconciliationOTERoutingModule } from './reconciliation-ote-routing.module';
import { ReconciliationOTEComponent } from './reconciliation-ote.component';

@NgModule({
  imports: [
    CommonModule,
    ReconciliationOTERoutingModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [ReconciliationOTEComponent, ReconciliationOTEComponent]
})
export class ReconciliationOTEModule { }
