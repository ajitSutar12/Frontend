import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterestRatewiseClassificationOfLoanRoutingModule } from './interest-ratewise-classification-of-loan-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterestRatewiseClassificationOfLoanComponent } from './interest-ratewise-classification-of-loan.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { DirectorMasterDropdownService } from 'src/app/shared/dropdownService/director-master-dropdown.service';


@NgModule({
  declarations: [InterestRatewiseClassificationOfLoanComponent],
  providers:[OwnbranchMasterService,
    SchemeCodeDropdownService,
    SchemeAccountNoService,
    SchemeTypeDropdownService,
    SystemMasterParametersService,
    DirectorMasterDropdownService
  ],
  imports: [
    CommonModule,
    InterestRatewiseClassificationOfLoanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ]
})
export class InterestRatewiseClassificationOfLoanModule { }
