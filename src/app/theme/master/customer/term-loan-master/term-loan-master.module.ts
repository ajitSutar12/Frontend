import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
import { TermLoanMasterRoutingModule } from './term-loan-master-routing.module';
import { TermLoanMasterComponent } from './term-loan-master.component';
// import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermLoanService } from './term-loan-master.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { CustomerIdService } from '../customer-id/customer-id.service';
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { IntrestCategoryMasterDropdownService } from '../../../../shared/dropdownService/interest-category-master-dropdown.service';
import { RepayModeService } from '../../../../shared/dropdownService/repay-mode.service';
import { InstallmentMethodService } from '../../../../shared/dropdownService/installment-method.service';
import { AuthorityMasterDropdownService } from '../../../../shared/dropdownService/authority-master-dropdown.service';
import { DirectorMasterDropdownService } from '../../../../shared/dropdownService/director-master-dropdown.service';
import { RecoveryClearkMasterDropdownService } from '../../../../shared/dropdownService/recovery-cleark-master-dropdown.service';
import { PrioritySectorMasterDropdownService } from '../../../../shared/dropdownService/priority-sector-master-dropdown.service';
import { WeakerMasterDropdownService } from '../../../../shared/dropdownService/weaker-master-dropdown.service';
import { PurposeMasterDropdownService } from '../../../../shared/dropdownService/purpose-master-dropdown.service';
import { IndustryMasterDropdownService } from '../../../../shared/dropdownService/industry-master-dropdown.service';
import { HealthMasterDropdownService } from '../../../../shared/dropdownService/health-master-dropdown.service';
import { AccountTypeService } from '../../../../shared/dropdownService/account-type.service';
import { SecurityMasterdropdownService } from '../../../../shared/dropdownService/security-master-dropdown.service';
import { InterestRateForLoanandCCService } from '../../policy-settings/definations/interest-rate-for-lacc/interest-rate-for-lacc.service';
import { CustomerIdModule } from '../customer-id/customer-id.module';
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service';
import { SecurityCodeService } from '../../policy-settings/definations/security-code/security-code.service';
import { PrioritySectorMasterService } from '../../policy-settings/information/priority-sector-master/priority-sector-master.service';
import { DatePipe } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { TermLoanSchemeService } from '../../../utility/scheme-parameters/term-loan-scheme/term-loan-scheme.service';
import { SecurityDetailsModule } from '../../maintainance/security-details/securityDetails.module';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    TermLoanMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    // SelectModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerIdModule,
    PerfectScrollbarModule,
    SharedModule,
    SecurityDetailsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  declarations: [TermLoanMasterComponent],
  exports: [TermLoanMasterComponent],

  providers: [
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
    TermLoanService,
    SchemeCodeDropdownService,
    CustomerIdService,
    CustomerIDMasterDropdownService,
    IntrestCategoryMasterDropdownService,
    RepayModeService,
    InstallmentMethodService,
    AuthorityMasterDropdownService,
    DirectorMasterDropdownService,
    RecoveryClearkMasterDropdownService,
    PrioritySectorMasterDropdownService,
    WeakerMasterDropdownService,
    PurposeMasterDropdownService,
    IndustryMasterDropdownService,
    HealthMasterDropdownService,
    AccountTypeService,
    SecurityMasterdropdownService,
    InterestRateForLoanandCCService,
    PrioritySectorMasterService,
    cityMasterService,
    SystemMasterParametersService,
    TermLoanSchemeService,
    DatePipe,
    SecurityCodeService
  ]
})
export class TermLoanMasterModule { }