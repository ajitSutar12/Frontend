import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PigmyAgentMasterRoutingModule } from './pigmy-agent-master-routing.module';
import { PigmyAgentMasterComponent } from './pigmy-agent-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignTypeDropdownService } from '../../../../shared/dropdownService/sign-type-dropdown.service'
import { SharedModule } from '../../../../shared/shared.module';
import { CustomerIdModule } from '../customer-id/customer-id.module';
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { CustomerIdService } from '../customer-id/customer-id.service';
import { categoryMasterService } from '../../../../shared/dropdownService/category-master-dropdown.service';
import { MembershipTypeDropdownService } from '../../../../shared/dropdownService/membership-type-dropdown.service';
import { DirectorMasterDropdownService } from '../../../../shared/dropdownService/director-master-dropdown.service'
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
import { SubSalaryDMasterdropdownService } from '../../../../shared/dropdownService/subsalary-division-master-dropdown.service'
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { DatePipe } from '@angular/common';
import { PigmyAgentMasterService } from './pigmy-agent-master.service'
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    PigmyAgentMasterRoutingModule,
    DataTablesModule,
    CustomerIdModule,
    NgbModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
    PerfectScrollbarModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()

  ],
  declarations: [PigmyAgentMasterComponent],
  providers: [OwnbranchMasterService,
    SignTypeDropdownService, CustomerIdService,
    , {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
    CustomerIDMasterDropdownService,
    categoryMasterService,
    MembershipTypeDropdownService,
    DirectorMasterDropdownService,
    SubSalaryDMasterdropdownService,
    cityMasterService, SystemMasterParametersService, SchemeAccountNoService,
    SchemeCodeDropdownService,
    PigmyAgentMasterService,
    DatePipe]
})
export class PigmyAgentMasterModule { }