import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoveringVoucherRoutingModule } from './covering-voucher-routing.module';
import { CoveringVoucherComponent } from './covering-voucher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';


@NgModule({
  declarations: [CoveringVoucherComponent],
  providers:[OwnbranchMasterService,SystemMasterParametersService,SchemeCodeDropdownService],
  imports: [
    CommonModule,
    CoveringVoucherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ]
})
export class CoveringVoucherModule { }
