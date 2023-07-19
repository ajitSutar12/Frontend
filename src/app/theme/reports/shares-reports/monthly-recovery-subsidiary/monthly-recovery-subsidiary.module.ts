import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

import { MonthlyRecoverySubsidiaryRoutingModule } from './monthly-recovery-subsidiary-routing.module';
import {DataTablesModule} from 'angular-datatables';
import {MonthlyRecoverySubsidiaryComponent} from './monthly-recovery-subsidiary.component'

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';


@NgModule({
  imports: [
    CommonModule,
    MonthlyRecoverySubsidiaryRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  declarations: [MonthlyRecoverySubsidiaryComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SalaryDMasterdropdownService
]
  
})
export class MonthlyRecoverySubsidiaryModule { }
