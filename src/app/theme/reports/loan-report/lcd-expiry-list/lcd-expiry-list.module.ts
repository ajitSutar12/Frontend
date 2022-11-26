import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LcdExpiryListRoutingModule } from './lcd-expiry-list-routing.module';
import { LcdExpiryListComponent } from './lcd-expiry-list.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from "../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service";
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from 'src/app/theme/reports/pigmy-report/iframe5/iframe5.module';


@NgModule({
  declarations: [LcdExpiryListComponent],
  imports: [
    CommonModule,
    LcdExpiryListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  providers: [
    SchemeCodeDropdownService, 
    // SchemeAccountNoService,
    OwnbranchMasterService,
    // SchemeTypeDropdownService,
   
    SystemMasterParametersService,
   
  ],
})
export class LcdExpiryListModule { }
