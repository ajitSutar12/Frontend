import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UnapprovalMultivoucherComponent } from './unapproval-multivoucher.component';
import { UnapprovalMultivoucherrRoutingModule} from './unapproval-multivoucher-routing.module'
import {DataTablesModule} from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    UnapprovalMultivoucherrRoutingModule,
    DataTablesModule,
    NgbModule
  ],
  declarations: [UnapprovalMultivoucherComponent]
})
export class UnapprovalMultivoucherrModule { }
