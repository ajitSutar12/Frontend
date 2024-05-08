import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisputeDetailRoutingModule } from './dispute-detail-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisputeDetailComponent } from './dispute-detail.component';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { HttpClientModule } from '@angular/common/http';
import { DepositLoanInterestRateEditChangeService } from '../deposit-loan-interest-rate-edit-change/deposit-loan-interest-rate-edit-change.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@NgModule({
  declarations: [DisputeDetailComponent],
  providers: [NgSelectConfig,
     OwnbranchMasterService,
     DepositLoanInterestRateEditChangeService,
     SchemeAccountNoService,
     SystemMasterParametersService,
     SchemeCodeDropdownService,

    ],
  imports: [
    CommonModule,
    DisputeDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    
    
  ],
  exports:[DisputeDetailComponent]
})
export class DisputeDetailModule { }
