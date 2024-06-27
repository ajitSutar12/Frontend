import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourtwiseDisputeLoanlistComponent} from './courtwise-dispute-loanlist.component';
import { CourtwiseDisputeLoanlistRoutingModule } from './courtwise-dispute-loanlist-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@NgModule({
  declarations: [CourtwiseDisputeLoanlistComponent],
  exports:[CourtwiseDisputeLoanlistComponent],
  imports: [
    CommonModule,
    CourtwiseDisputeLoanlistRoutingModule,
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
export class CourtwiseDisputeLoanlistModule { }
