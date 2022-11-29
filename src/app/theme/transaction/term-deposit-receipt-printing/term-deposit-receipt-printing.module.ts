import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermDepositReceiptPrintingComponent } from './term-deposit-receipt-printing.component';
import { TermDepositReceiptPrintingRoutingModule } from './/term-deposit-receipt-printing-routing.module';
import {SharedModule} from '../../../shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ColorPickerModule} from 'ngx-color-picker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { VoucherEntryService } from '../voucher-entry/voucher-entry.service';



@NgModule({
  imports: [
    CommonModule,
    TermDepositReceiptPrintingRoutingModule,
    SharedModule,
    NgbModule,
    NgSelectModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),

    
    
  ],
  declarations: [TermDepositReceiptPrintingComponent],
  providers:[  SchemeCodeDropdownService,SchemeAccountNoService,OwnbranchMasterService,VoucherEntryService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
   
    multi: true
  },]
})
export class TermDepositReceiptPrintingModule { }