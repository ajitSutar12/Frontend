import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermDepositAccountClosingComponent } from './term-deposit-account-closing.component';
import { TermDepositAccountClosingRoutingModule } from './term-deposit-account-closing-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgSelectModule } from '@ng-select/ng-select';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeCodeService } from '../../../shared/elements/scheme-code.service';
import { AcountnoService } from '../../../shared/elements/acountno.service';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { MultiVoucherService } from '../multi-voucher/multi-voucher.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { TransactionCashModeService } from 'src/app/shared/elements/transaction-cash-mode.service';
import { TransactionTransferModeService } from 'src/app/shared/elements/transaction-transfer-mode.service';
import { SchemeTypeService } from 'src/app/shared/elements/scheme-type.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SavingMasterService } from '../../master/customer/saving-master/saving-master.service';
import { TermDepositAccountClosingService } from './term-deposit-account-closing.service'
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CustomerIdService } from '../../master/customer/customer-id/customer-id.service';
// import { DepositClosingVoucherComponent} from '../../passing/centralised-passing/deposit-closing-voucher/deposit-closing-voucher.component';
import { ThemeModule } from '../../theme.module'
import { BankMasterService } from 'src/app/shared/dropdownService/bank-Master-dropdown.service';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { TermDepositInterestRateService } from '../../master/policy-settings/definations/term-deposit-ir/term-deposit-ir.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    TermDepositAccountClosingRoutingModule,
    SharedModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule,
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
  declarations: [TermDepositAccountClosingComponent],
  exports: [TermDepositAccountClosingComponent],
  providers: [SchemeCodeService, AcountnoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    }, TermDepositAccountClosingService, SystemMasterParametersService, OwnbranchMasterService, MultiVoucherService, 
    CustomerIdService, SchemeAccountNoService, TransactionCashModeService, TransactionTransferModeService, 
    SchemeTypeService, SchemeCodeDropdownService, SavingMasterService,BankMasterService,ACMasterDropdownService,TermDepositInterestRateService]
})
export class TermDepositAccountClosingModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}




