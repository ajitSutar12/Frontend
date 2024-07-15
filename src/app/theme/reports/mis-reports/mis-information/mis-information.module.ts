import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisInformationRoutingModule } from './mis-information-routing.module';
import { MisInformationComponent } from './mis-information.component';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { Iframe1Module } from '../../daily-reports/iframe1/iframe1.module';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';


@NgModule({
  declarations: [MisInformationComponent],
  imports: [
    CommonModule,
    MisInformationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PerfectScrollbarModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe1Module,
    Iframe5Module
  ],
  exports:[MisInformationComponent],
  providers:[ SystemMasterParametersService,
    OwnbranchMasterService,]
})
export class MisInformationModule { }
