import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';


import { DividendPaidMarkSDRoutingModule } from './dividend-paid-mark-sd-routing.module';


import { DividendPaidMarkSDComponent } from './dividend-paid-mark-sd.component';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SalaryDMasterdropdownService } from 'src/app/shared/dropdownService/salary-division-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';


@NgModule({
  imports: [
    CommonModule,
    DividendPaidMarkSDRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  declarations: [DividendPaidMarkSDComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SalaryDMasterdropdownService,
  SchemeCodeDropdownService,
  SchemeAccountNoService
]
})
export class  DividendPaidMarkSDModule { }