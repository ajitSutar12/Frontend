import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountOpeningComponent } from './account-opening.component';
import { AccountOpeningRoutingModule } from './account-opening-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { A1Service } from '../../../../shared/elements/a1.service';
import { BranchService } from '../../../../shared/elements/branch.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankMasterService } from '../../../../shared/dropdownService/bank-Master-dropdown.service';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { BankService } from '../../policy-settings/information/bank-master/bank-master.service';
import { InvestmentService } from './account-opening.service';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { ThemeModule } from 'src/app/theme/theme.module';
import { ClearingbranchMasterService } from 'src/app/shared/dropdownService/clearing-branch-master-dropdown.service';
import { TermDepositSchemeService } from 'src/app/theme/utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    AccountOpeningRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    ThemeModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  declarations: [AccountOpeningComponent],
  exports: [AccountOpeningComponent],
  providers: [Scheme1Service, A1Service, BranchService,
    BankMasterService,
    OwnbranchMasterService,
    SchemeCodeDropdownService,ClearingbranchMasterService,TermDepositSchemeService,
    BankService,
    InvestmentService,
    SystemMasterParametersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ]
})
export class AccountOpeningModule { }
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
