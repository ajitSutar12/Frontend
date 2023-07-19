import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

import { AmtTransferTransactionRoutingModule } from './amt-transfer-transaction-routing.module';
import {DataTablesModule} from 'angular-datatables';

import { AmtTransferTransactionComponent } from './amt-transfer-transaction.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { Iframe5Module } from '../../reports/pigmy-report/iframe5/iframe5.module';


@NgModule({
  imports: [
    CommonModule,
    AmtTransferTransactionRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module
  ],
  declarations: [AmtTransferTransactionComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },
  SchemeCodeDropdownService
]
  
})
export class AmtTransferTransactionModule { }
