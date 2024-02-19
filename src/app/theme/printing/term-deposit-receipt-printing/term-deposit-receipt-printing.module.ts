import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermDepositReceiptPrintingComponent } from './term-deposit-receipt-printing.component';
import { TermDepositReceiptPrintingRoutingModule } from './/term-deposit-receipt-printing-routing.module';
import {SharedModule} from '../../../shared/shared.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ColorPickerModule} from 'ngx-color-picker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { VoucherEntryService } from '../../transaction/voucher-entry/voucher-entry.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Iframe5Module } from '../../reports/pigmy-report/iframe5/iframe5.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
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
    Iframe5Module,
       TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
    
    
  ],
  declarations: [TermDepositReceiptPrintingComponent],
  exports:[TermDepositReceiptPrintingComponent],

  providers:[  SchemeCodeDropdownService,SchemeAccountNoService,
    OwnbranchMasterService,VoucherEntryService,SavingMasterService,
    SystemMasterParametersService,
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
]
})
export class TermDepositReceiptPrintingModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}