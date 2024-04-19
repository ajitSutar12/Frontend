import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryProcessingComponent } from './recovery-processing.component';
import { RecoveryProcessingRoutingModule } from './recovery-processing-routing.module';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';

import {DataTablesModule} from 'angular-datatables';
import { SharedModule } from '../../../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonthlyRecPostingComponent } from './monthly-rec-posting/monthly-rec-posting.component';
import { MonthlyRecProcessComponent } from './monthly-rec-process/monthly-rec-process.component';
import { EditMonthlyProcessComponent } from './edit-monthly-process/edit-monthly-process.component';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { RecoveryProcessingService } from './recovery-processing.service'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    RecoveryProcessingRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgSelectModule,
    NgbModule,
    SharedModule

  ],
  declarations: [RecoveryProcessingComponent, MonthlyRecPostingComponent, MonthlyRecProcessComponent, EditMonthlyProcessComponent],
  providers:[
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },SchemeCodeDropdownService,RecoveryProcessingService],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class RecoveryProcessingModule { }
