import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerIdWiseTDSreportRoutingModule } from './customer-id-wise-tdsreport-routing.module';
import { CustomerIdWiseTDSreportComponent } from './customer-id-wise-tdsreport.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { IframeModule } from '../../balance-book/iframe/iframe.module';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { DepositLoanInterestRateEditChangeService } from 'src/app/theme/master/maintainance/deposit-loan-interest-rate-edit-change/deposit-loan-interest-rate-edit-change.service';


@NgModule({
  declarations: [CustomerIdWiseTDSreportComponent,],
  providers: [OwnbranchMasterService,],
  imports: [
    CommonModule,
    CustomerIdWiseTDSreportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    IframeModule
  ]
})
export class CustomerIdWiseTDSreportModule { }
