import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesAccountLabelPrintRoutingModule } from './shares-account-label-print-routing.module';
import { SharesAccountLabelPrintComponent } from './shares-account-label-print.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { HttpClient } from '@angular/common/http';
import { DepositLoanInterestRateEditChangeService } from 'src/app/theme/master/maintainance/deposit-loan-interest-rate-edit-change/deposit-loan-interest-rate-edit-change.service';


@NgModule({
  declarations: [SharesAccountLabelPrintComponent],
  providers:[OwnbranchMasterService,SchemeCodeDropdownService,SchemeAccountNoService,HttpClient,DepositLoanInterestRateEditChangeService,SchemeAccountNoService],
  imports: [
    CommonModule,
    SharesAccountLabelPrintRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    PerfectScrollbarModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ]
})
export class SharesAccountLabelPrintModule { }
