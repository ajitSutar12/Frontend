import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisputeLoandetailsRoutingModule } from './dispute-loandetails-routing.module';
import { DisputeLoandetailsComponent } from './dispute-loandetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';


@NgModule({
  declarations: [DisputeLoandetailsComponent],
  exports:[DisputeLoandetailsComponent],
  imports: [
    CommonModule,
    DisputeLoandetailsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PerfectScrollbarModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module,
  ],
  providers: [
    SchemeCodeDropdownService, 
    SchemeAccountNoService,
    OwnbranchMasterService,
    SystemMasterParametersService,SchemeCodeDropdownService
  ]
})
export class DisputeLoandetailsModule { }
