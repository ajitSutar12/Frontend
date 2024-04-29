import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YearEndBranchwiseRoutingModule } from './year-end-branchwise-routing.module';
import { YearEndBranchwiseComponent } from './year-end-branchwise.component';
import { DataTablesModule } from 'angular-datatables';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [YearEndBranchwiseComponent],
  imports: [
    CommonModule,
    YearEndBranchwiseRoutingModule,
    SharedModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    NgbModule,
    PerfectScrollbarModule, 
    NgSelectModule,
  ],
  providers:[SystemMasterParametersService],
})
export class YearEndBranchwiseModule { }
