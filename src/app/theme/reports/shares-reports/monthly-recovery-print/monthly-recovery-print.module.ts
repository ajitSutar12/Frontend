import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

import { MonthlyRecoveryPrintRoutingModule } from './monthly-recovery-print-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {MonthlyRecoveryPrintComponent} from './monthly-recovery-print.component'

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';



@NgModule({
  imports: [
    CommonModule,
    MonthlyRecoveryPrintRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  declarations: [MonthlyRecoveryPrintComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SalaryDMasterdropdownService,
  SchemeAccountNoService
]
  
})
export class MonthlyRecoveryPrintModule { }
