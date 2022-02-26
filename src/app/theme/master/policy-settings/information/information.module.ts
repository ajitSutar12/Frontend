import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationComponent } from './information.component';
import { InformationRoutingModule } from './information-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { BankMasterComponent } from './bank-master/bank-master.component';
import { ClearingBranchMasterComponent } from './clearing-branch-master/clearing-branch-master.component';
import { OwnBranchMasterComponent } from './own-branch-master/own-branch-master.component';
import { CategoryMasterComponent } from './category-master/category-master.component';
import { CourtMasterComponent } from './court-master/court-master.component';
import { AdvocateMasterComponent } from './advocate-master/advocate-master.component';
import { IndustryMasterComponent } from './industry-master/industry-master.component';
import { WeakerSectionMasterComponent } from './weaker-section-master/weaker-section-master.component';
import { LoanStageMasterComponent } from './loan-stage-master/loan-stage-master.component';
import { CityMasterComponent } from './city-master/city-master.component';
import { CastMasterComponent } from './cast-master/cast-master.component';
import { OccupationMasterComponent } from './occupation-master/occupation-master.component';
import { DirectorMasterComponent } from './director-master/director-master.component';
import { AuthorityMasterComponent } from './authority-master/authority-master.component';
import { RecoveryClearkMasterComponent } from './recovery-cleark-master/recovery-cleark-master.component';
import { InsuranceMasterComponent } from './insurance-master/insurance-master.component';
import { OperationMasterComponent } from './operation-master/operation-master.component';
import { PurposeMasterComponent } from './purpose-master/purpose-master.component';
import { PrioritySectorMasterComponent } from './priority-sector-master/priority-sector-master.component';
import { LockerSizeMasterComponent } from './locker-size-master/locker-size-master.component';
import { LockerRackMasterComponent } from './locker-rack-master/locker-rack-master.component';
import { LockerRackWiseMasterComponent } from './locker-rack-wise-master/locker-rack-wise-master.component';
import { CompanyGroupMasterComponent } from './company-group-master/company-group-master.component';
import { CompanyGroupLinkMasterComponent } from './company-group-link-master/company-group-link-master.component';
import { NarrationComponent } from './narration/narration.component';
import { InterestCategoryMasterComponent } from './interest-category-master/interest-category-master.component';
import { HealthMasterComponent } from './health-master/health-master.component';
import { PrefixMasterComponent } from './prefix-master/prefix-master.component';
import { MinimumBalanceMasterComponent } from './minimum-balance-master/minimum-balance-master.component';
import { DocumentMasterComponent } from './document-master/document-master.component';
import { DepriciationCatagoryMasterComponent } from './Depriciation-catagory-master/depriciation-catagory-master.component';
import { TdReciptSeriesMasterComponent } from './td-recipt-series-master/td-recipt-series-master.component';
import { SalaryDivisionMasterComponent } from './salary-division-master/salary-division-master.component';
import { SubSalaryDivisionMasterComponent } from './sub-salary-division-master/sub-salary-division-master.component';
import { ItemCategoryMasterComponent } from './item-category-master/item-category-master.component';
import { RiskCatagoryComponent } from './risk-catagory/risk-catagory.component';
// import { SelectModule } from 'ng-select';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { DataTablesModule } from 'angular-datatables';
import { ReportTypeMasterComponent } from './report-type-master/report-type-master.component';
import { NarrationService } from './narration/narration.service';
import { BankService } from './bank-master/bank-master.service';
import { OwnBranchService } from './own-branch-master/own-branch-master.service';
import { ClearingBranchService } from './clearing-branch-master/clearing-branch-master.service';
import { AdvocateService } from './advocate-master/advocate-master.service';
import { IndustryService } from './industry-master/industry-master.service';
import { WeakerService } from './weaker-section-master/weaker-section-master.service';
import { LoanStageService } from './loan-stage-master/loan-stage-master.service';
import { DepriciationService } from './Depriciation-catagory-master/depriciation-category-master.service';
import { SalaryDivisionService } from './salary-division-master/salary-division-master.service';
import { SubSalaryService } from './sub-salary-division-master/sub-salary-division-master.service';
//Imported service files 
import { DirectorMasterService } from './director-master/director-master.service';
import { AuthorityMasterService } from './authority-master/authority-master.service';
import { RecoveryClearkMasterService } from './recovery-cleark-master/recovery-cleark-master.service';
import { InsuranceMasterService } from './insurance-master/insurance-master.service';
import { InterestCategoryMasterService } from './interest-category-master/interest-category-master.service';
import { PrefixMasterService } from './prefix-master/prefix-master.service';
import { HealthMasterService } from './health-master/health-master.service';
import { MinimumBalanceMasterService } from './minimum-balance-master/minimum-balance-master.service';
import { DocumentMasterService } from './document-master/document-master.service';
import { LockerRackMasterService } from './locker-rack-master/locker-rack-master.service';
import { LockerSizeMasterService } from './locker-size-master/locker-size-master.service';
import { LockerRackWiseMasterService } from './locker-rack-wise-master/locker-rack-wise-master.service';
import { CastMasterService } from './cast-master/cast-master.service';
import { CategoryMasterService } from './category-master/category-master.service';
import { OccupationMasterService } from './occupation-master/occupation-master.service'
import { CitytMasterService } from './city-master/city-master.service';
import { OperationService } from './operation-master/operation-master.service';
import { PurposeMasterService } from './purpose-master/purpose-master.service';
import { CourtMasterService } from './court-master/court-master.service';
import { PrioritySectorMasterService } from './priority-sector-master/priority-sector-master.service';
import { ReportTypeMasterService } from './report-type-master/report-type-master.service';
import { ItemCategoryMasterService } from './item-category-master/item-category-master.service';
import { CompanyGroupLinkMasterService } from './company-group-link-master/company-group-link-master.service'
import { CompanyGroupMasterService } from './company-group-master/company-group-master.service';
import { LockerSMasterDropDownService } from '../../../../shared/dropdownService/lockersize-master-dropdown.service';
import { SchemeTypeDropdownService } from '../../../../shared/dropdownService/scheme-type-dropdown.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { CompanyGroupMasterDropdownService } from '../../../../shared/dropdownService/company-group-master-dropdown.service';
import { RiskCategoryDropdownService } from '../../../../shared/dropdownService/risk-category-dropdown.service';
import { RiskCatMasterService } from './risk-catagory/risk-category.service';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
import { SalaryDMasterdropdownService } from '../../../../shared/dropdownService/salary-division-master-dropdown.service'
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { ACMasterDropdownService } from 'src/app/shared/dropdownService/ac-master-dropdown.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { cityMasterService } from 'src/app/shared/dropdownService/city-master-dropdown.service';
import { VoucherEntryService } from 'src/app/theme/transaction/voucher-entry/voucher-entry.service';
import { BankDetails } from './bank-other-details/bank-other-details.service';
import { AllAccountDropdownService } from '../../../../shared/dropdownService/all-account-dropdown.service';
// import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';

import { NgSelectModule } from '@ng-select/ng-select';
import { BankOtherDetailsComponent } from './bank-other-details/bank-other-details.component';

// import { NgSelectModule } from '@ng-select/ng-select';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    InformationRoutingModule,
    SharedModule,
    PerfectScrollbarModule,
    DataTablesModule,
    // SelectModule,
    FormsModule, ReactiveFormsModule,
    NgSelectModule


    // NgSelectModule


  ],
  providers: [
    SchemeAccountNoService,
    NarrationService,
    OwnBranchService,
    ClearingBranchService,
    BankService,
    BankDetails,
    AdvocateService,
    IndustryService,
    WeakerService,
    LoanStageService,
    DepriciationService,
    SalaryDivisionService,
    SubSalaryService,
    DirectorMasterService,
    AuthorityMasterService,
    RecoveryClearkMasterService,
    LockerRackWiseMasterService,
    InsuranceMasterService,
    InterestCategoryMasterService,
    HealthMasterService,
    PrefixMasterService,
    MinimumBalanceMasterService,
    DocumentMasterService,
    LockerRackMasterService,
    LockerSizeMasterService,
    CastMasterService,
    CategoryMasterService,
    OccupationMasterService,
    CitytMasterService,
    OperationService,
    PurposeMasterService,
    CourtMasterService,
    PrioritySectorMasterService,
    ReportTypeMasterService,
    ItemCategoryMasterService,
    CompanyGroupLinkMasterService,
    CompanyGroupMasterService,
    LockerSMasterDropDownService,
    SchemeTypeDropdownService,
    SchemeCodeDropdownService,
    CompanyGroupMasterDropdownService,
    RiskCategoryDropdownService,
    RiskCatMasterService,
    OwnbranchMasterService,
    SalaryDMasterdropdownService,
    ACMasterDropdownService,
    cityMasterService,
    VoucherEntryService,
    AllAccountDropdownService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ],
  declarations: [
    InformationComponent,
    BankMasterComponent,
    ClearingBranchMasterComponent,
    OwnBranchMasterComponent,
    CategoryMasterComponent,
    CourtMasterComponent,
    AdvocateMasterComponent,
    IndustryMasterComponent,
    WeakerSectionMasterComponent,
    LoanStageMasterComponent,
    CityMasterComponent,
    CastMasterComponent,
    OccupationMasterComponent,
    DirectorMasterComponent,
    AuthorityMasterComponent,
    NarrationComponent,
    RecoveryClearkMasterComponent,
    InsuranceMasterComponent,
    OperationMasterComponent,
    PurposeMasterComponent,
    PrioritySectorMasterComponent,
    LockerSizeMasterComponent,
    LockerRackMasterComponent,
    LockerRackWiseMasterComponent,
    CompanyGroupMasterComponent,
    CompanyGroupLinkMasterComponent,
    InterestCategoryMasterComponent,
    HealthMasterComponent,
    PrefixMasterComponent,
    MinimumBalanceMasterComponent,
    DocumentMasterComponent,
    DepriciationCatagoryMasterComponent,
    TdReciptSeriesMasterComponent,
    SalaryDivisionMasterComponent,
    SubSalaryDivisionMasterComponent,
    ItemCategoryMasterComponent,
    ReportTypeMasterComponent,
    RiskCatagoryComponent,
    BankOtherDetailsComponent
  ]
})
export class InformationModule { }