import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DefinationsComponent } from './definations.component';
import { DefinationsRoutingModule } from './definations-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';

import { SharedModule } from '../../../../shared/shared.module';
import { TermDepositIRComponent } from './term-deposit-ir/term-deposit-ir.component';
import { TermDepositPatSchemeComponent } from './term-deposit-pat-scheme/term-deposit-pat-scheme.component';
import { InterestRateForSAPDComponent } from './interest-rate-for-sapd/interest-rate-for-sapd.component';
import { SecurityCodeComponent } from './security-code/security-code.component';
import { ManagerViewGLPComponent } from './manager-view-glp/manager-view-glp.component';

import { SchemeLinkingWithDComponent } from './scheme-linking-with-d/scheme-linking-with-d.component';
import { SchemeTypeChargesDComponent } from './scheme-type-charges-d/scheme-type-charges-d.component';
import { DepreciationRateMasterComponent } from './depreciation-rate-master/depreciation-rate-master.component';
import { PrematurePigmyLessIRComponent } from './premature-pigmy-less-ir/premature-pigmy-less-ir.component';
import { TdsInterestRateComponent } from './tds-interest-rate/tds-interest-rate.component';
import { InterestRateForLACCComponent } from './interest-rate-for-lacc/interest-rate-for-lacc.component';
import { SizeSlabWiseARComponent } from './size-slab-wise-ar/size-slab-wise-ar.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
//import { SelectModule } from 'ng-select';
import { NgSelectModule } from '@ng-select/ng-select';
import { ChargesTypeService } from '../../../../shared/dropdownService/charges-type.service';
import { DepreciationService } from '../../../../shared/elements/depreciation.service';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { Int1Service } from '../../../../shared/elements/int1.service';

import { Scheme2Service } from '../../../../shared/elements/scheme2.service';
import { Int2Service } from '../../../../shared/elements/int2.service';
import { Scheme3Service } from '../../../../shared/elements/scheme3.service';
import { Scheme4Service } from '../../../../shared/elements/scheme4.service';
import { Scheme5Service } from '../../../../shared/elements/scheme5.service';
import { Scheme6Service } from '../../../../shared/elements/scheme6.service';
import { Int6Service } from '../../../../shared/elements/int6.service';
import { Scheme7Service } from '../../../../shared/elements/scheme7.service';
import { Int7Service } from '../../../../shared/elements/int7.service';
import { Scheme8Service } from '../../../../shared/elements/scheme8.service';
import { Int8Service } from '../../../../shared/elements/int8.service';
import { TdsInterestRateService } from './tds-interest-rate/tds-interest-rate.service';
import { PrematurePigmyService } from './premature-pigmy-less-ir/premature-pigmy-less-ir.service';
import { DereciationService } from './depreciation-rate-master/depreciation-rate-master.service';
import { DepriciationCatDropdownMasterService } from '../../../../shared/dropdownService/depriciation-category-master-dropdown.service';
import { SchemeTypeChargesService } from './scheme-type-charges-d/scheme-type-cherges-d.service';
import { ACMasterDropdownService } from '../../../../shared/dropdownService/ac-master-dropdown.service';



// import { SchemeTypeDropdownService } from '../../../../shared/dropdownService/scheme-type-dropdown.service'
// import { IntrestCategoryMasterDropdownService } from '../../../../shared/dropdownService/interest-category-master-dropdown.service'
import { TermDepositInterestRateService } from '../definations/term-deposit-ir/term-deposit-ir.service'
import { TermDepositPatSchemeService } from '../definations/term-deposit-pat-scheme/term-deposit-pat-scheme.service'
import { InterestRateForLoanandCCService } from '../definations/interest-rate-for-lacc/interest-rate-for-lacc.service'
import { SavingandPigmyInterestRatesService } from '../definations/interest-rate-for-sapd/interest-rate-for-sapd.service'
// import { SizeSlabWiseService } from '../definations/size-slab-wise-ar/size-slab-wise-ar.service'


import { SecurityCodeService } from './security-code/security-code.service';
import { ManagerViewGlpService } from './manager-view-glp/manager-view-glp.service';
import { SizeSlabWiseService } from './size-slab-wise-ar/size-slab-wise-ar.service';
import { SchemeLinkingWithDService } from './scheme-linking-with-d/scheme-linking-with-d.service';
import { DocumentMasterService } from '../information/document-master/document-master.service';
import { SchemeTypeDropdownService } from '../../../../shared/dropdownService/scheme-type-dropdown.service';
import { IntrestCategoryMasterDropdownService } from '../../../../shared/dropdownService/interest-category-master-dropdown.service';
import { StatementCodeDropdownService } from '../../../../shared/dropdownService/statement-code-dropdown.service';
import { PercentageToWCapitalService } from '../../../../shared/dropdownService/percentage-to-W-Capital.service';
import { DisplayToViewService } from '../../../../shared/dropdownService/display-to-view.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import {TermemeDepositeSchMasterDropdownService} from 'src/app//shared/dropdownService/term_deposit_scheme-dropdown.service'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    DefinationsRoutingModule,
    DataTablesModule,
    SharedModule,
    NgbModule,
    ColorPickerModule,
    DataTablesModule,
    NgbModule,
    //SelectModule,
    NgSelectModule,
    PerfectScrollbarModule,
    FormsModule, ReactiveFormsModule
  ],

  providers: [DepreciationService,
    Scheme1Service,
    Int1Service,
    Scheme2Service,
    Int2Service,
    Scheme3Service,
    Scheme4Service,
    Scheme5Service,
    Scheme6Service,
    Int6Service,
    Scheme7Service,
    Int7Service,
    Scheme8Service,
    Int8Service,
    TdsInterestRateService,
    PrematurePigmyService,
    SchemeTypeDropdownService,
    DereciationService,
    DepriciationCatDropdownMasterService,
    SchemeTypeChargesService,
    ChargesTypeService,
    SizeSlabWiseService,
    TermDepositInterestRateService,
    IntrestCategoryMasterDropdownService,
    ACMasterDropdownService,
    IntrestCategoryMasterDropdownService,
    TermDepositInterestRateService,
    TermDepositPatSchemeService,
    SavingandPigmyInterestRatesService,
    InterestRateForLoanandCCService,
    SizeSlabWiseService,
    SecurityCodeService,
    ManagerViewGlpService,
    SchemeLinkingWithDService,
    DocumentMasterService,
    StatementCodeDropdownService,
    PercentageToWCapitalService,
    DisplayToViewService,
    SystemMasterParametersService,
    SchemeCodeDropdownService,
    TermemeDepositeSchMasterDropdownService,

    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    ChargesTypeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ],
  declarations: [DefinationsComponent, SchemeTypeChargesDComponent, TermDepositIRComponent, InterestRateForSAPDComponent, InterestRateForLACCComponent, TermDepositPatSchemeComponent, SecurityCodeComponent, ManagerViewGLPComponent, SchemeLinkingWithDComponent, DepreciationRateMasterComponent, PrematurePigmyLessIRComponent, TdsInterestRateComponent, SizeSlabWiseARComponent,]
})
export class DefinationsModule { }