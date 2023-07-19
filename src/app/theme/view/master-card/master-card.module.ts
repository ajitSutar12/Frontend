import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

import { MasterCardComponent } from './master-card.component';
//import { GeneralLedgerComponent } from './general-ledger.component';
import { MasterCardRoutingModule } from './master-card-routing.module'
import {SharedModule} from '../../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { Iframe5Module } from '../../reports/pigmy-report/iframe5/iframe5.module';



@NgModule({
  imports: [
    CommonModule,
    MasterCardRoutingModule,
    SharedModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  declarations: [MasterCardComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SchemeCodeDropdownService,
  SchemeAccountNoService,
]
})
export class MasterCardModule { }
