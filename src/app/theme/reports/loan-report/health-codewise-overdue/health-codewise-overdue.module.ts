import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthCodewiseOverdueRoutingModule } from './health-codewise-overdue-routing.module';
import { HealthCodewiseOverdueComponent } from './health-codewise-overdue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { cityMasterService } from 'src/app/shared/dropdownService/city-master-dropdown.service';
import { DirectorMasterDropdownService } from 'src/app/shared/dropdownService/director-master-dropdown.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepositLoanInterestRateEditChangeService } from 'src/app/theme/master/maintainance/deposit-loan-interest-rate-edit-change/deposit-loan-interest-rate-edit-change.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';


@NgModule({
  declarations: [HealthCodewiseOverdueComponent],
  exports:[HealthCodewiseOverdueComponent],
  imports: [
    CommonModule,
    HealthCodewiseOverdueRoutingModule,
    PerfectScrollbarModule,
    FormsModule, ReactiveFormsModule,
    NgSelectModule,
    
    SharedModule,
    // BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module,
  ],
  providers:[
    SystemMasterParametersService,
    OwnbranchMasterService,
    SchemeCodeDropdownService,
    SchemeAccountNoService,
    SchemeTypeDropdownService,
    DepositLoanInterestRateEditChangeService,
    DirectorMasterDropdownService,
    cityMasterService
    
   
  ],
})
export class HealthCodewiseOverdueModule { }
