import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrentAccountMasterRoutingModule } from './current-account-master-routing.module';
import { CurrentAccountMasterComponent } from './current-account-master.component';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { CustomerIdModule } from '../customer-id/customer-id.module';
import { CurrentAccountMasterService } from './current-account-master.service'
//Service file of dropdown
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { CustomerIdService } from '../customer-id/customer-id.service';
import { categoryMasterService } from '../../../../shared/dropdownService/category-master-dropdown.service';
import { DirectorMasterDropdownService } from '../../../../shared/dropdownService/director-master-dropdown.service'
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { OperationMasterDropdownService } from '../../../../shared/dropdownService/operation-master-dropdown.service'
import { IntrestCategoryMasterDropdownService } from '../../../../shared/dropdownService/interest-category-master-dropdown.service'
import { MinimumBalanceMasterDropdownService } from '../../../../shared/dropdownService/minimum-balance-master-dropdown.service'
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'


@NgModule({
  imports: [
    CommonModule,
    CurrentAccountMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule, ReactiveFormsModule,
    SharedModule,
    CustomerIdModule
  ],
  declarations: [CurrentAccountMasterComponent],
  providers: [CurrentAccountMasterService, CustomerIDMasterDropdownService, CustomerIdService,
    categoryMasterService, DirectorMasterDropdownService, OwnbranchMasterService, cityMasterService,
    SchemeCodeDropdownService, OperationMasterDropdownService, IntrestCategoryMasterDropdownService,
    MinimumBalanceMasterDropdownService, SystemMasterParametersService, SchemeAccountNoService]
})
export class CurrentAccountMasterModule { }