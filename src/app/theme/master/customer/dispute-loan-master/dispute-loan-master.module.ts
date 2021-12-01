import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisputeLoanMasterRoutingModule } from './dispute-loan-master-routing.module';
import { DisputeLoanMasterComponent } from './dispute-loan-master.component';
import { TitleService } from '../../../../shared/elements/title.service';
import { RepayModeService } from '../../../../shared/elements/repay-mode.service';
import { SelectModule } from 'ng-select';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { StatementTypeService } from '../../../../shared/elements/statment-type.service';
import { SchemeCodeService } from '../../../../shared/elements/scheme-code.service';
import { DisputeLoanMasterService} from './dispute-loan-master.service';
import { CustomerIdModule } from '../customer-id/customer-id.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../../../shared/shared.module';
// dynamic dropdown
import { CustomerIDMasterDropdownService } from '../../../../shared/dropdownService/customer-id-master-dropdown.service';
import { TermLoanMasterDropdownService } from '../../../../shared/dropdownService/term-loan-master-dropdown.service';
import { CastMasterService } from '../../../../shared/dropdownService/cast-master-dropdown.service';
import { IntrestCategoryMasterDropdownService } from '../../../../shared/dropdownService/interest-category-master-dropdown.service';
import { OccupationMasterService } from '../../../../shared/dropdownService/occupation-master-dropdown.service';
import { HealthMasterDropdownService } from '../../../../shared/dropdownService/health-master-dropdown.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import {AuthorityMasterDropdownService} from '../../../../shared/dropdownService/authority-master-dropdown.service'
import {PrioritySectorMasterDropdownService} from '../../../../shared/dropdownService/priority-sector-master-dropdown.service';
import {PurposeMasterDropdownService} from '../../../../shared/dropdownService/purpose-master-dropdown.service';
import {IndustryMasterDropdownService} from '../../../../shared/dropdownService/industry-master-dropdown.service';
import {WeakerMasterDropdownService} from '../../../../shared/dropdownService/weaker-master-dropdown.service';
import {AdvocateMasterDropdownService } from '../../../../shared/dropdownService/advocate-master-dropdown.service';
import { DirectorMasterDropdownService} from '../../../../shared/dropdownService/director-master-dropdown.service';
import {LoanStageMasterDropdownService} from '../../../../shared/dropdownService/loan-stage-master-dropdown.service'
import {CourtMasterDropdownService} from '../../../../shared/dropdownService/court-master-dropdown.service';
import { InstallmentMethodService } from '../../../../shared/dropdownService/installment-method.service';
import { cityMasterService } from '../../../../shared/dropdownService/city-master-dropdown.service';
import { CustomeridService } from '../../../../shared/elements/customerid.service'

import {TermLoanService} from '../term-loan-master/term-loan-master.service'
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    DisputeLoanMasterRoutingModule,
    DataTablesModule,
    NgbModule,
    SelectModule,
    FormsModule,ReactiveFormsModule,
    PerfectScrollbarModule,
    CustomerIdModule,
    SharedModule
  ],
  declarations: [DisputeLoanMasterComponent],
  providers: [
     TitleService,
     RepayModeService,
     StatementTypeService,
     SchemeCodeService,
     DisputeLoanMasterService,
     CustomerIDMasterDropdownService,
     TermLoanMasterDropdownService,
     CastMasterService,
     IntrestCategoryMasterDropdownService,
     OccupationMasterService,
     HealthMasterDropdownService,
     SchemeCodeDropdownService,
     TermLoanService,
     AuthorityMasterDropdownService,
     PrioritySectorMasterDropdownService,
     PurposeMasterDropdownService,
     IndustryMasterDropdownService,
     WeakerMasterDropdownService,
     AdvocateMasterDropdownService,
     DirectorMasterDropdownService,
     LoanStageMasterDropdownService,
     CourtMasterDropdownService,
     InstallmentMethodService,
     cityMasterService,
     CustomeridService,

     {

      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    },
    ]
})
export class DisputeLoanMasterModule { }