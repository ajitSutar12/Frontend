import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SchemeCodeService} from '../../../../shared/elements/scheme-code.service';
import {StartingacnoService} from '../../../../shared/elements/startingacno.service';
import {EndingacnoService} from '../../../../shared/elements/endingacno.service';
import { SelectModule } from 'ng-select';
import { DepositReceiptPrintComponent } from './deposit-receipt-print.component';
import { DepositReceiptPrintRoutingModule } from './deposit-receipt-print-routing.module';
import {DataTablesModule} from 'angular-datatables';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DepositReceiptPrintRoutingModule,
    DataTablesModule,
    FormsModule,ReactiveFormsModule,
    SelectModule
  ],
  declarations: [DepositReceiptPrintComponent],
  providers: [SchemeCodeService,StartingacnoService,EndingacnoService]
})
export class DepositReceiptPrintModule { }
