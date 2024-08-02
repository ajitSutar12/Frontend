import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MrutunjayRegisterRoutingModule } from './mrutunjay-register-routing.module';
import { MrutunjayRegisterComponent } from './mrutunjay-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';


@NgModule({
  declarations: [MrutunjayRegisterComponent],
  providers:[OwnbranchMasterService,SchemeCodeDropdownService],
  imports: [
    CommonModule,
    MrutunjayRegisterRoutingModule,
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
export class MrutunjayRegisterModule { }
