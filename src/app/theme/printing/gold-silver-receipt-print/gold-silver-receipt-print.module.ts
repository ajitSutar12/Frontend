import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoldSilverReceiptPrintRoutingModule } from './gold-silver-receipt-print-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { Iframe5Module } from '../../reports/pigmy-report/iframe5/iframe5.module';
import { GoldSilverReceiptPrintComponent } from './gold-silver-receipt-print.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { GoldSilverReturnEntryService } from '../../transaction/gold-silver-return-entry/gold-silver-return-entry.service';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';


@NgModule({
   imports: [
    CommonModule,
    GoldSilverReceiptPrintRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module

  ],

  declarations: [GoldSilverReceiptPrintComponent],
  exports:[GoldSilverReceiptPrintComponent],
  providers:[
    SchemeCodeDropdownService, SchemeAccountNoService, OwnbranchMasterService, GoldSilverReturnEntryService,SystemMasterParametersService,    {
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
})
export class GoldSilverReceiptPrintModule { }
