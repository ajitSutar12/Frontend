import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonMemberListRoutingModule } from './non-member-list-routing.module';
import { NonMemberListComponent } from './non-member-list.component';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';


@NgModule({
  declarations: [NonMemberListComponent],
  providers:[OwnbranchMasterService,
    SchemeCodeDropdownService,
    SalaryDMasterdropdownService,
  ],
  imports: [
    CommonModule,
    NonMemberListRoutingModule,
   
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ]
})
export class NonMemberListModule { }
