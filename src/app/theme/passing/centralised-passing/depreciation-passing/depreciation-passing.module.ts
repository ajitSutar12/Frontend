import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepreciationPassingRoutingModule } from './depreciation-passing-routing.module';
// import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepreciationPassingComponent } from './depreciation-passing.component';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service';
import { SharedModule } from '../../../../shared/shared.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    DepreciationPassingRoutingModule,
    SharedModule,
    NgSelectModule,
    PerfectScrollbarModule,
    // SelectModule
    FormsModule, ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [SystemMasterParametersService, OwnbranchMasterService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  },],
  declarations: [DepreciationPassingComponent],
  exports: [DepreciationPassingComponent],
})
export class DepreciationPassingModule { }
