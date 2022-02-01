import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PigmyAccountMasterRoutingModule } from './pigmy-account-master-routing.module';

import { PigmyAccountMasterComponent } from './pigmy-account-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
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
import { OperationMasterDropdownService } from '../../../../shared/dropdownService/operation-master-dropdown.service';
import { IntrestCategoryMasterDropdownService } from '../../../../shared/dropdownService/interest-category-master-dropdown.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { DatePipe } from '@angular/common';
import { PigmyAccountMasterService } from './pigmy-account-master.service'
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  imports: [
    CommonModule,
    PigmyAccountMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule, ReactiveFormsModule,
    CustomerIdModule,
    PerfectScrollbarModule,
    SharedModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  declarations: [PigmyAccountMasterComponent],
  exports:[PigmyAccountMasterComponent],
  providers: [
    SchemeCodeService, OwnbranchMasterService,
    , CustomerIdService, CustomerIDMasterDropdownService,
    cityMasterService,
    SchemeCodeDropdownService,
    OperationMasterDropdownService, categoryMasterService,
    IntrestCategoryMasterDropdownService, SystemMasterParametersService, SchemeAccountNoService,
    PigmyAccountMasterService,
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
    DatePipe
  ]
})
export class PigmyAccountMasterModule { }