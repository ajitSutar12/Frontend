import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeadStockMasterRoutingModule } from './dead-stock-master-routing.module';
import { DeadStockMasterComponent } from './dead-stock-master.component';

@NgModule({
  imports: [
    CommonModule,
    DeadStockMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [DeadStockMasterComponent]
})
export class DeadStockMasterModule { }