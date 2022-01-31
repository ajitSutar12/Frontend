import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDeadStockComponent} from './master-dead-stock.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [MasterDeadStockComponent],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports:[MasterDeadStockComponent]
})
export class MasterDeadStockModule { }
