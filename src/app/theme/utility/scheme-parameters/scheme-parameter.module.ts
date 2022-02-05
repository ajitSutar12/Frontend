import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchemeParametersComponent } from './scheme-parameters.component';
import { SchemeParametersRoutingModule } from './scheme-parameter-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { SystemMasterParametersComponent } from './system-master-parameters/system-master-parameters.component';
import { RecoverySequenceComponent } from './recovery-sequence/recovery-sequence.component';
import { SchemeTypeSettingComponent } from './scheme-type-setting/scheme-type-setting.component';
import { TransactionInputGlHeadSettingComponent } from './transaction-input-gl-head-setting/transaction-input-gl-head-setting.component';
import { ChequeCollectionInputHeadComponent } from './cheque-collection-input-head/cheque-collection-input-head.component';
import { OtherBanksDepositSchemeComponent } from './other-banks-deposit-scheme/other-banks-deposit-scheme.component';
import { LockersSchemeComponent } from './lockers-scheme/lockers-scheme.component';
import { GeneralLedgerSchemeComponent } from './general-ledger-scheme/general-ledger-scheme.component';
import { GeneralSubAcSchemeComponent } from './general-sub-ac-scheme/general-sub-ac-scheme.component';
import { SharesSchemeComponent } from './shares-scheme/shares-scheme.component';
import { SavingSchemeComponent } from './saving-scheme/saving-scheme.component';
import { CurrentSchemeComponent } from './current-scheme/current-scheme.component';
import { TermDepositSchemeComponent } from './term-deposit-scheme/term-deposit-scheme.component';
import { CashCreditSchemeComponent } from './cash-credit-scheme/cash-credit-scheme.component';
import { TermLoanSchemeComponent } from './term-loan-scheme/term-loan-scheme.component';
import { DisputLoanSchemeComponent } from './disput-loan-scheme/disput-loan-scheme.component';
import { PigmyAcSchemeComponent } from './pigmy-ac-scheme/pigmy-ac-scheme.component';
import { PigmyAgentSchemeComponent } from './pigmy-agent-scheme/pigmy-agent-scheme.component';
import { PayrollSettingsComponent } from './payroll-settings/payroll-settings.component';
import { SmsSettingsComponent } from './sms-settings/sms-settings.component';
import { DataTablesModule } from 'angular-datatables';
import { SelectOptionService } from '../../../shared/elements/select-option.service'
import { SelectModule } from 'ng-select';
import { GeneralSubAcSchemeService } from './general-sub-ac-scheme/general-sub-ac-scheme.service';
import { TermLoanSchemeService } from './term-loan-scheme/term-loan-scheme.service';
import { DisputLoanSchemeService } from './disput-loan-scheme/disput-loan-scheme.service';
import { InstallmentMethodService } from '../../../shared/dropdownService/installment-method.service';
import { S1Service } from '../../../shared/elements/s1.service';
import { OtherBanksDepositSchemeService } from './other-banks-deposit-scheme/other-banks-deposit-scheme.service';
import { CurrentSchemeService } from './current-scheme/current-scheme.service'
import { PigmyAcSchemeService } from './pigmy-ac-scheme/pigmy-ac-scheme.service'
import { GeneralLedgerSchemeService } from './general-ledger-scheme/general-ledger-scheme.service'
import { CompoundInterestService } from '../../../shared/dropdownService/compound-interest.service';
import { InstallmentBaseService } from '../../../shared/dropdownService/installment-base.service';
import { UnitOfTDPeriodService } from '../../../shared/dropdownService/unit-of-td-period.service';
import { InterestApplicableTypeService } from '../../../shared/elements/interest-applicable-type.service';
import { LockersSchemeService } from './lockers-scheme/lockers-scheme.service';
import { SharesSchemeService } from './shares-scheme/shares-scheme.service';
import { TermDepositSchemeService } from './term-deposit-scheme/term-deposit-scheme.service';
import { PigmyagentService } from './pigmy-agent-scheme/pigmy-agent-scheme.service';
import { SchemetypeService } from './scheme-type-setting/scheme-type-setting.service';
import { SavingschemeService } from './saving-scheme/saving-scheme.service';
import { CashcreditService } from './cash-credit-scheme/cash-credit-scheme.service';
import { StatementTypeService } from '../../../shared/elements/statement-type.service';
import { DaysService } from '../../../shared/dropdownService/days.service';
import { SchemeTypeDropdownService } from '../../../shared/dropdownService/scheme-type-dropdown.service';
import { OverdraftInterestPostService } from '../../../shared/dropdownService/overdraft-interest-post.service';

import { SystemMasterParametersService } from '../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
// import {OwnbranchMasterService} from '../../../shared/dropdownService/own-branch-master-dropdown.service';
// import {WeeklyHolidayService} from '../../../shared/dropdownService/weekly-holiday.service';
// import {IntrestCalculationMethodService} from '../../../shared/dropdownService/intrest-calculation-method-dropdown.service';

//dropdown service
import { ACMasterDropdownService } from '../../../shared/dropdownService/ac-master-dropdown.service'
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service';
import { WeeklyHolidayService } from '../../../shared/dropdownService/weekly-holiday.service';
import { IntrestCalculationMethodService } from '../../../shared/dropdownService/intrest-calculation-method-dropdown.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { TransactionInputGlHeadSettingModule } from './transaction-input-gl-head-setting/transaction-input-gl-head-setting.module'
@NgModule({
  imports: [
    CommonModule,
    SchemeParametersRoutingModule,
    SharedModule,
    DataTablesModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    TransactionInputGlHeadSettingModule
  ],
  providers: [SelectOptionService,
    OwnbranchMasterService,
    IntrestCalculationMethodService,
    WeeklyHolidayService,
    GeneralSubAcSchemeService,
    InstallmentMethodService,
    TermLoanSchemeService,
    DisputLoanSchemeService,
    SelectOptionService,
    S1Service,
    OtherBanksDepositSchemeService,
    CurrentSchemeService,
    PigmyAcSchemeService,
    GeneralLedgerSchemeService,
    CompoundInterestService,
    InstallmentBaseService,
    UnitOfTDPeriodService,
    InterestApplicableTypeService,
    LockersSchemeService,
    SharesSchemeService,
    TermDepositSchemeService,
    PigmyagentService,
    SchemetypeService,
    SavingschemeService,
    CashcreditService,
    StatementTypeService,
    DaysService,
    SchemeTypeDropdownService,
    OverdraftInterestPostService,
    ACMasterDropdownService,
    SystemMasterParametersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ],
  declarations: [
    // TransactionInputGlHeadSettingComponent,
    SchemeParametersComponent, SystemMasterParametersComponent, RecoverySequenceComponent, SchemeTypeSettingComponent, ChequeCollectionInputHeadComponent, OtherBanksDepositSchemeComponent, LockersSchemeComponent, GeneralLedgerSchemeComponent, GeneralSubAcSchemeComponent, SharesSchemeComponent, SavingSchemeComponent, CurrentSchemeComponent, TermDepositSchemeComponent, CashCreditSchemeComponent, TermLoanSchemeComponent, DisputLoanSchemeComponent, PigmyAcSchemeComponent, PigmyAgentSchemeComponent, PayrollSettingsComponent, SmsSettingsComponent]
})
export class SchemeParametersModule { }
