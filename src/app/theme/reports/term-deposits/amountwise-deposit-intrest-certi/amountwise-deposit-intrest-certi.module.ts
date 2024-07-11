import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmountwiseDepositIntrestCertiRoutingModule } from './amountwise-deposit-intrest-certi-routing.module';
import { AmountwiseDepositIntrestCertiComponent } from './amountwise-deposit-intrest-certi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { IframeModule } from '../../balance-book/iframe/iframe.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SavingMasterService } from 'src/app/theme/master/customer/saving-master/saving-master.service';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { Iframe1Module } from '../../daily-reports/iframe1/iframe1.module';


@NgModule({
  declarations: [AmountwiseDepositIntrestCertiComponent],
  exports: [AmountwiseDepositIntrestCertiComponent],
  providers: [OwnbranchMasterService, SchemeCodeDropdownService,
    SchemeAccountNoService,
    SchemeTypeDropdownService,
    SavingMasterService,
    SchemeTypeDropdownService,
    ACMasterDropdownService,],
  imports: [
    CommonModule,
    AmountwiseDepositIntrestCertiRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module 
  ]
})
export class AmountwiseDepositIntrestCertiModule { }
