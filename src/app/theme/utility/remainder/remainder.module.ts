import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemainderRoutingModule } from './remainder-routing.module';
import { RemainderComponent } from './remainder.component';
import { SystemMasterParametersService } from '../scheme-parameters/system-master-parameters/system-master-parameters.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../reports/pigmy-report/iframe5/iframe5.module';
import { UserDefinationService } from '../user-defination/user-defination.service';
import { UserDefinationRoutingModule } from '../user-defination/user-defination-routing.module';
import { UserdefinationServiceD } from 'src/app/shared/dropdownService/user-defination-dropdown.service';


@NgModule({
  declarations: [RemainderComponent],
  exports:[RemainderComponent],
  providers:[SystemMasterParametersService,OwnbranchMasterService,UserDefinationService,UserdefinationServiceD],
  imports: [
    CommonModule,
    RemainderRoutingModule,
    FormsModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    NgSelectModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module,UserDefinationRoutingModule
  ]
})
export class RemainderModule { }
