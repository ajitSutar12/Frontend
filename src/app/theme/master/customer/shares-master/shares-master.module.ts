import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { SharesMasterRoutingModule } from './shares-master-routing.module';
import { SharesMasterComponent } from './shares-master.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignTypeDropdownService } from '../../../../shared/dropdownService/sign-type-dropdown.service'
import { ShareMasterService } from './shares-master.service'
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
import { SalaryDMasterdropdownService } from '../../../../shared/dropdownService/salary-division-master-dropdown.service'
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SharesSchemeService } from '../../../utility/scheme-parameters/shares-scheme/shares-scheme.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    SharesMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule, ReactiveFormsModule,
    SharedModule, //modal
    CustomerIdModule,
    PerfectScrollbarModule,
  ],
  providers: [
    MembershipTypeDropdownService,
    SignTypeDropdownService,
    ShareMasterService,
    CustomerIDMasterDropdownService,
    categoryMasterService,
    CustomerIdService,
    DirectorMasterDropdownService,
    OwnbranchMasterService,
    cityMasterService,
    SubSalaryDMasterdropdownService,
    SchemeCodeDropdownService,
    SalaryDMasterdropdownService,
    SystemMasterParametersService,
    SharesSchemeService,
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
  ],
  declarations: [SharesMasterComponent],
  bootstrap: [SharesMasterComponent]
})
export class SharesMasterModule { }