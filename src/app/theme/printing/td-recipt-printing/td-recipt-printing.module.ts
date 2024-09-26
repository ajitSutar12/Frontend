import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdReciptPrintingRoutingModule } from './td-recipt-printing-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { ColorPickerModule } from 'ngx-color-picker';
import { SharedModule } from 'src/app/shared/shared.module';
import { Iframe5Module } from '../../reports/pigmy-report/iframe5/iframe5.module';
import { TdReciptPrintingComponent } from './td-recipt-printing.component';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import { VoucherEntryService } from '../../transaction/voucher-entry/voucher-entry.service';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [TdReciptPrintingComponent],
  imports: [
    CommonModule,
    TdReciptPrintingRoutingModule,
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
    //Translation
 TranslateModule.forRoot({
  loader:{
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps:[HttpClient]
  }
})
  ],
  exports:[TdReciptPrintingComponent],
  providers:[  SchemeCodeDropdownService,SchemeAccountNoService,
    OwnbranchMasterService,VoucherEntryService,SavingMasterService,
    SystemMasterParametersService,
   
]
})
export class TdReciptPrintingModule { }
//Translation
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
