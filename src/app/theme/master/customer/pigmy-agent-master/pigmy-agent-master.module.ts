import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PigmyAgentMasterRoutingModule } from './pigmy-agent-master-routing.module';
import { PigmyAgentMasterComponent } from './pigmy-agent-master.component';
import { TitleService } from '../../../../shared/elements/title.service';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { CustomeridService } from '../../../../shared/elements/customerid.service';
import { CitycodeService } from '../../../../shared/elements/citycode.service';
import { SchemeTypeService } from '../../../../shared/elements/scheme-type.service';
import { BranchService } from '../../../../shared/elements/branch.service';
import { CastService } from '../../../../shared/elements/cast.service';
import { SelectModule } from 'ng-select';
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
import { PigmyAgentMasterService } from './pigmy-agent-master.service'
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    PigmyAgentMasterRoutingModule,
    DataTablesModule,
    CustomerIdModule,
    NgbModule,
    SelectModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
    PerfectScrollbarModule,

  ],
  declarations: [PigmyAgentMasterComponent],
  providers: [TitleService,
    SchemeCodeService, OwnbranchMasterService,
    SignTypeDropdownService, CustomerIdService, CustomeridService,
    CitycodeService, SchemeTypeService, BranchService,
    CastService
    , {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
    CustomerIDMasterDropdownService,
    categoryMasterService,
    MembershipTypeDropdownService,
    DirectorMasterDropdownService,
    SubSalaryDMasterdropdownService,
    cityMasterService,
    SchemeCodeDropdownService,
    PigmyAgentMasterService]
})
export class PigmyAgentMasterModule { }