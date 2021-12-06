import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CashCreditMasterRoutingModule } from './cash-credit-master-routing.module';
import { CashCreditMasterComponent } from './cash-credit-master.component';
import { CashCreditService } from './cash-credit-master.service';
import { SelectModule } from 'ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
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
import { PrioritySectorMasterService } from '../../policy-settings/information/priority-sector-master/priority-sector-master.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { DirectorMasterService } from '../../policy-settings/information/director-master/director-master.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    CashCreditMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule, ReactiveFormsModule,
    SharedModule,
    CustomerIdModule,
    PerfectScrollbarModule,
    SharedModule,
 
  ],
  declarations: [CashCreditMasterComponent],
  providers: [CashCreditService,
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
    SystemMasterParametersService,
    DirectorMasterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },]
})
export class CashCreditMasterModule { }