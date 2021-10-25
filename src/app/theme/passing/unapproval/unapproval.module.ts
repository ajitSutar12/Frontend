import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnapprovalComponent } from './unapproval.component';
import {UnapprovalRoutingModule} from './unapproval-routing.module';
import {SharedModule} from '../../../shared/shared.module';
//import { UnapprovalDepositPostingComponent } from './unapproval-deposit-posting/unapproval-deposit-posting.component';
//import { UnapprovalDepositClosingComponent } from './unapproval-deposit-closing/unapproval-deposit-closing.component';
//import { UnapprovalVoucherComponent } from './unapproval-voucher/unapproval-voucher.component';
//import { UnapprovalMultivoucherComponent } from './unapproval-multivoucher/unapproval-multivoucher.component';
// import {ChartModule} from 'angular2-chartjs';
import {DataTablesModule} from 'angular-datatables';
import {SelectOptionService} from '../../../shared/elements/select-option.service';
import {SelectModule} from 'ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    UnapprovalRoutingModule,
    SharedModule,
    DataTablesModule,
    SelectModule,
    NgbModule
  ],
  declarations: [UnapprovalComponent],
  providers: [SelectOptionService]
})
export class UnapprovalModule { }
