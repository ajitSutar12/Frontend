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
import { SelectModule } from 'ng-select';
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
import { SchemeTypeDropdownService } from '../../../../shared/dropdownService/scheme-type-dropdown.service';
import { DereciationService } from './depreciation-rate-master/depreciation-rate-master.service';
import { DepriciationCatDropdownMasterService } from '../../../../shared/dropdownService/depriciation-category-master-dropdown.service';
import { SchemeTypeChargesService } from './scheme-type-charges-d/scheme-type-cherges-d.service';
import { ChargesTypeService } from '../../../../shared/dropdownService/charges-type.service';


import{SizeSlabWiseService} from './size-slab-wise-ar/size-slab-wise-ar.service';

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
    SelectModule,
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
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
    ChargesTypeService,
  ],
  declarations: [DefinationsComponent, SchemeTypeChargesDComponent, TermDepositIRComponent, InterestRateForSAPDComponent, InterestRateForLACCComponent, TermDepositPatSchemeComponent, SecurityCodeComponent, ManagerViewGLPComponent, SchemeLinkingWithDComponent, DepreciationRateMasterComponent, PrematurePigmyLessIRComponent, TdsInterestRateComponent, SizeSlabWiseARComponent,]
})
export class DefinationsModule { }