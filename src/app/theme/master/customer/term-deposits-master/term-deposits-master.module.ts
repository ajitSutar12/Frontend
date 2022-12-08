import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { TermDepositsMasterRoutingModule } from './term-deposits-master-routing.module';
import { TermDepositsMasterComponent } from './term-deposits-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { CustomerIdModule } from '../customer-id/customer-id.module';
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { CustomerIdService } from '../customer-id/customer-id.service';
import { categoryMasterService } from '../../../../shared/dropdownService/category-master-dropdown.service';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service'
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service'
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service'
import { OperationMasterDropdownService } from '../../../../shared/dropdownService/operation-master-dropdown.service';
import { IntrestCategoryMasterDropdownService } from '../../../../shared/dropdownService/interest-category-master-dropdown.service';
import { TitleService } from '../../../../shared/elements/title.service';
import { AccountcodeService } from '../../../../shared/elements/accountcode.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TermDepositMasterService } from './term-deposits-master.service'
import { SystemMasterParametersService } from '../../../utility/scheme-parameters/system-master-parameters/system-master-parameters.service'
import { TermDepositSchemeService } from '../../../utility/scheme-parameters/term-deposit-scheme/term-deposit-scheme.service'
import { DatePipe } from '@angular/common';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service'
import { InterestInstructionModule } from '../../instruction/interest-instruction/interest-instruction.module'
import { InterestInstructionService } from '../../instruction/interest-instruction/interest-instruction.service'
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ThemeModule } from 'src/app/theme/theme.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    TermDepositsMasterRoutingModule,
    NgbModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule,
    SharedModule, CustomerIdModule, PerfectScrollbarModule,
    InterestInstructionModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),

    ThemeModule

  ],
  declarations: [TermDepositsMasterComponent],
  exports: [TermDepositsMasterComponent],
  providers: [
    SchemeCodeService, OwnbranchMasterService,
    , CustomerIdService, CustomerIDMasterDropdownService,
    cityMasterService,
    SchemeCodeDropdownService,
    OperationMasterDropdownService, categoryMasterService,
    IntrestCategoryMasterDropdownService, AccountcodeService,
    TitleService,
    TermDepositSchemeService,
    InterestInstructionService,
    {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
    TermDepositMasterService,
    SystemMasterParametersService,
    DatePipe,
    SchemeAccountNoService
  ]
})
export class TermDepositsMasterModule { }