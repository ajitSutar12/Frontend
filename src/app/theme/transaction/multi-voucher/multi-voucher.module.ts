import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MultiVoucherComponent } from './multi-voucher.component';
import { MultiVoucherRoutingModule } from './multi-voucher-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service'
import { MultiVoucherService } from './multi-voucher.service'
import { SchemeAccountNoService } from '../../../shared/dropdownService/schemeAccountNo.service'
import { TransactionCashModeService } from 'src/app/shared/elements/transaction-cash-mode.service';
import { TransactionTransferModeService } from 'src/app/shared/elements/transaction-transfer-mode.service';
import { SchemeTypeService } from 'src/app/shared/elements/scheme-type.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import { CustomerIdService } from '../../master/customer/customer-id/customer-id.service';
import { VoucherEntryService } from '../voucher-entry/voucher-entry.service'
import { BankMasterService } from '../../../shared/dropdownService/bank-Master-dropdown.service'
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { ThemeModule } from '../../theme.module'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    MultiVoucherRoutingModule,
    SharedModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ThemeModule,
    TranslateModule.forRoot({
      loader:{
       provide:TranslateLoader,
       useFactory:HttpLoaderFactory,
       deps:[HttpClient]
     }
    })
  ],
  declarations: [MultiVoucherComponent],
  exports: [MultiVoucherComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, SystemMasterParametersService, BankMasterService, VoucherEntryService, CustomerIdService, OwnbranchMasterService, MultiVoucherService, SchemeAccountNoService, TransactionCashModeService, TransactionTransferModeService, SchemeTypeService, SchemeCodeDropdownService, SavingMasterService, ACMasterDropdownService]
})
export class MultiVoucherModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
