import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermDepositReceiptPrintingComponent } from './term-deposit-receipt-printing.component';
import { TermDepositReceiptPrintingRoutingModule } from './/term-deposit-receipt-printing-routing.module';
import {SharedModule} from '../../../shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SelectModule} from 'ng-select';
import {ColorPickerModule} from 'ngx-color-picker';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';



@NgModule({
  imports: [
    CommonModule,
    TermDepositReceiptPrintingRoutingModule,
    SharedModule,
    NgbModule,
    SelectModule,
    ColorPickerModule,
    FormsModule,
    DataTablesModule
    
    
  ],
  declarations: [TermDepositReceiptPrintingComponent],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class TermDepositReceiptPrintingModule { }