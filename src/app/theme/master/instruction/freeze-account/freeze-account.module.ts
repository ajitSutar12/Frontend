import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreezeAccountRoutingModule } from './freeze-account-routing.module'
import { freezeAccountService } from '../../../../shared/dropdownService/freeze-account.service'
import { SelectModule } from 'ng-select';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DPMasterACNODropdownService } from '../../../../shared/dropdownService/dpmasterACNo-dropdown.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service'
import { FreezeAccountService } from './freeze-account.service';
@NgModule({
  imports: [
    CommonModule,
    SelectModule,
    DataTablesModule,
    FreezeAccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers: [freezeAccountService, SchemeCodeDropdownService, DPMasterACNODropdownService, FreezeAccountService,CustomerIDMasterDropdownService]
})
export class FreezeAccountModule { }
