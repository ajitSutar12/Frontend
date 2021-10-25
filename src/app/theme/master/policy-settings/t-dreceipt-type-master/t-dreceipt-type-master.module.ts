import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TDReceiptTypeMasterComponent } from './t-dreceipt-type-master.component';
import { TDReceiptTypeMasterRoutingModule } from './t-dreceipt-type-master-routing.module';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

import {DataTablesModule} from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TDReceiptTypeMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule,ReactiveFormsModule
   
  ],
  declarations: [TDReceiptTypeMasterComponent]
})
export class TDReceiptTypeMasterModule { }
