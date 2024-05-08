import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanOverdueListRoutingModule } from './loan-overdue-list-routing.module';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { ThemeModule } from 'src/app/theme/theme.module';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5-routing.module';
import { SystemMasterParametersService } from 'src/app/theme/utility/scheme-parameters/system-master-parameters/system-master-parameters.service';
import { OwnbranchMasterService } from 'src/app/shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from 'src/app/shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from 'src/app/shared/dropdownService/schemeAccountNo.service';
import { SchemeTypeDropdownService } from 'src/app/shared/dropdownService/scheme-type-dropdown.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanOverdueReportComponent } from './loan-overdue-report/loan-overdue-report.component';
import { LoanOverdueListComponent } from './loan-overdue-list.component';
import { AcwiseLoanoverdueListComponent }from './acwise-loanoverdue-list/acwise-loanoverdue-list.component';
import { RecommendedDirectorwiseComponent }from './recommended-directorwise/recommended-directorwise.component';
import { DepositLoanInterestRateEditChangeService } from 'src/app/theme/master/maintainance/deposit-loan-interest-rate-edit-change/deposit-loan-interest-rate-edit-change.service';
import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import {InstwiseLoanoverdueListComponent} from './instwise-loanoverdue-list/instwise-loanoverdue-list.component';
// import { Iframe5Module } from '../../pigmy-report/iframe5/iframe5.module';
import {LoanDueListBtdComponent} from './loan-due-list-btd/loan-due-list-btd.component';
import {LoanDueListBtodComponent} from './loan-due-list-btod/loan-due-list-btod.component';
import { DirectorMasterDropdownService } from 'src/app/shared/dropdownService/director-master-dropdown.service';
import{RecoveryClerkwiseOverdueListComponent } from './recovery-clerkwise-overdue-list/recovery-clerkwise-overdue-list.component';

import{SchemeLoanoverdueIncreDecreComponent } from './scheme-loanoverdue-incre-decre/scheme-loanoverdue-incre-decre.component';
import{LoanPeriodwiseAmountWiseListComponent } from './loan-periodwise-amount-wise-list/loan-periodwise-amount-wise-list.component';
import{DuebalancesummaryComponent } from './duebalancesummary/duebalancesummary.component';
import{OverduePercentSummaryComponent } from './overdue-percent-summary/overdue-percent-summary.component';
// import{CitywiseLoanoverdueComponent } from './citywise-loanoverdue/citywise-loanoverdue.component';
import{OtherRecInstallWiseLoanOverdueComponent } from './other-rec-install-wise-loan-overdue/other-rec-install-wise-loan-overdue.component';
import{SummaryperiodwiseloanoverduelistComponent } from './summaryperiodwiseloanoverduelist/summaryperiodwiseloanoverduelist.component';
import{DirectorAndDirectorsRelativesOverduePerformComponent } from './director-and-directors-relatives-overdue-perform/director-and-directors-relatives-overdue-perform.component';
import { CitywiseLoanoverdueComponent } from './citywise-loanoverdue/citywise-loanoverdue.component';
import { cityMasterService } from 'src/app/shared/dropdownService/city-master-dropdown.service';
// import { CitywiseLoanoverdueComponent } from './citywise-loanoverdue/citywise-loanoverdue.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [LoanOverdueReportComponent,InstwiseLoanoverdueListComponent,LoanDueListBtdComponent,LoanDueListBtodComponent,LoanOverdueListComponent,AcwiseLoanoverdueListComponent,RecommendedDirectorwiseComponent,RecoveryClerkwiseOverdueListComponent,
    SchemeLoanoverdueIncreDecreComponent, LoanPeriodwiseAmountWiseListComponent,DuebalancesummaryComponent,OverduePercentSummaryComponent,SummaryperiodwiseloanoverduelistComponent,
    OtherRecInstallWiseLoanOverdueComponent,DirectorAndDirectorsRelativesOverduePerformComponent, CitywiseLoanoverdueComponent],
  imports: [
    CommonModule,
    LoanOverdueListRoutingModule,
    PerfectScrollbarModule,
    FormsModule, ReactiveFormsModule,
    NgSelectModule,
    
    SharedModule,
    // BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    Iframe5Module,
   
  ],
  providers:[
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
    SystemMasterParametersService,
    OwnbranchMasterService,
    SchemeCodeDropdownService,
    SchemeAccountNoService,
    SchemeTypeDropdownService,
    DepositLoanInterestRateEditChangeService,
    DirectorMasterDropdownService,
    cityMasterService
    
   
  ],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
})
export class LoanOverdueListModule { }
