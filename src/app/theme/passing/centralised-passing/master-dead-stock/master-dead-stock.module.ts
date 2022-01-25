import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDeadStockComponent} from './master-dead-stock.component';
// Handling datatable data
class DataTableResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

// For fetching values from backend
interface deadstockinterface {
  //id:number
  ITEM_TYPE: string;
  ITEM_CODE: String;
  ITEM_NAME: string;
  PURCHASE_DATE: number;
  DEPR_CATEGORY: number;
  OP_BAL_DATE: string;
  SUPPLIER_NAME: string;
  OP_BALANCE: string;
  OP_QUANTITY: number;
  PURCHASE_OP_QUANTITY: string;
  PURCHASE_RATE: string;
  PURCHASE_QUANTITY: string;
  PURCHASE_VALUE: string;
  LAST_DEPR_DATE: Date;
  GL_ACNO: string;
}

@NgModule({
  declarations: [MasterDeadStockComponent],
  imports: [
    CommonModule
  ],
  exports:[MasterDeadStockComponent]
})
export class MasterDeadStockModule { }
