import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberanddividendreportsRoutingModule } from './memberanddividendreports-routing.module';
import { MemberanddividendreportsComponent } from './memberanddividendreports.component';
import { SalarydivwisedivpaidlistComponent } from './salarydivwisedivpaidlist/salarydivwisedivpaidlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';
import { SchemeTypeService } from 'src/app/shared/elements/scheme-type.service';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { SubSalaryDMasterdropdownService } from 'src/app/shared/dropdownService/subsalary-division-master-dropdown.service';


@NgModule({
  declarations: [MemberanddividendreportsComponent, SalarydivwisedivpaidlistComponent],
  providers:[OwnbranchMasterService,
    SchemeCodeDropdownService,
    SchemeTypeDropdownService,
    SchemeTypeService,
    SalaryDMasterdropdownService,
    SubSalaryDMasterdropdownService],
  imports: [
    CommonModule,
    MemberanddividendreportsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ]
})
export class MemberanddividendreportsModule { }
