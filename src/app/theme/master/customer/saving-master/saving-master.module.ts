import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SavingMasterRoutingModule } from './saving-master-routing.module';
import { SavingMasterComponent } from './saving-master.component';
// import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';

import { SignTypeDropdownService } from '../../../../shared/dropdownService/sign-type-dropdown.service'
import { CustomerIdModule } from '../customer-id/customer-id.module';
import { SavingMasterService } from './saving-master.service'
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { CustomerIdService } from '../customer-id/customer-id.service';
import { categoryMasterService } from '../../../../shared/dropdownService/category-master-dropdown.service';
import { MembershipTypeDropdownService } from '../../../../shared/dropdownService/membership-type-dropdown.service';
import { DirectorMasterDropdownService } from '../../../../shared/dropdownService/director-master-dropdown.service'
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
import { SubSalaryDMasterdropdownService } from '../../../../shared/dropdownService/subsalary-division-master-dropdown.service'
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { OperationMasterDropdownService } from '../../../../shared/dropdownService/operation-master-dropdown.service'
import { IntrestCategoryMasterDropdownService } from '../../../../shared/dropdownService/interest-category-master-dropdown.service'
import { MinimumBalanceMasterDropdownService } from '../../../../shared/dropdownService/minimum-balance-master-dropdown.service'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'

@NgModule({
  imports: [
    CommonModule,
    SavingMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    // SelectModule,
    FormsModule, ReactiveFormsModule,
    CustomerIdModule,
    PerfectScrollbarModule,
    SharedModule, //modal
    NgSelectModule
  ],
  declarations: [SavingMasterComponent],
  providers: [
    SavingMasterService,
    MembershipTypeDropdownService,
    CustomerIDMasterDropdownService,
    categoryMasterService,
    CustomerIdService,
    DirectorMasterDropdownService,
    OwnbranchMasterService,
    cityMasterService,
    SubSalaryDMasterdropdownService,
    SchemeCodeDropdownService,
    SignTypeDropdownService,
    OperationMasterDropdownService,
    IntrestCategoryMasterDropdownService,
    MinimumBalanceMasterDropdownService,
 
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },

    SystemMasterParametersService,
    SchemeAccountNoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ]
})
export class SavingMasterModule { }