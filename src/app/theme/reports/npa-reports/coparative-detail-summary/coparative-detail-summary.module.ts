import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoparativeDetailSummaryRoutingModule } from './coparative-detail-summary-routing.module';
import { CoparativeDetailSummaryComponent } from './coparative-detail-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';


@NgModule({
  declarations: [CoparativeDetailSummaryComponent],
  providers:[OwnbranchMasterService,SchemeCodeDropdownService],
  imports: [
    CommonModule,
    CoparativeDetailSummaryRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ]
})
export class CoparativeDetailSummaryModule { }
