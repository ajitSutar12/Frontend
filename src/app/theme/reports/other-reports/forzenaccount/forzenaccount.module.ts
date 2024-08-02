import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForzenaccountRoutingModule } from './forzenaccount-routing.module';
import { ForzenaccountComponent } from './forzenaccount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';


@NgModule({
  declarations: [ForzenaccountComponent],
  exports:[ForzenaccountComponent],
  imports: [
    CommonModule,
    ForzenaccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  providers:[SchemeCodeDropdownService,OwnbranchMasterService,SchemeAccountNoService]

})
export class ForzenaccountModule { }
