import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharesNomineeListRoutingModule } from './shares-nominee-list-routing.module';
import { SharesNomineeListComponent } from './shares-nominee-list.component';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';


@NgModule({
  declarations: [SharesNomineeListComponent],
  providers:[OwnbranchMasterService,SchemeCodeDropdownService],
  imports: [
    CommonModule,
    SharesNomineeListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PerfectScrollbarModule, 
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ]
})
export class SharesNomineeListModule { }
