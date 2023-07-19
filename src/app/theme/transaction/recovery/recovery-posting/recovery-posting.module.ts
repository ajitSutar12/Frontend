import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

import { RecoveryPostingRoutingModule } from './recovery-posting-routing.module';

import {DataTablesModule} from 'angular-datatables';
import { RecoveryPostingComponent } from './recovery-posting.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SubSalaryDMasterdropdownService } from 'src/app/shared/dropdownService/subsalary-division-master-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';


@NgModule({
  imports: [
    CommonModule,
    RecoveryPostingRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  declarations: [RecoveryPostingComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SchemeCodeDropdownService,
  SalaryDMasterdropdownService,
  SubSalaryDMasterdropdownService,
  SchemeAccountNoService
]
})
export class RecoveryPostingModule { }
