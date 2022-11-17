import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherViewComponent } from './other-view.component';
import { OtherViewRoutingModule } from './other-view-routing.module'
import { SharedModule } from '../../../shared/shared.module';
import { InterestPaidHistoryComponent } from './interest-paid-history/interest-paid-history.component';
import { InterestPaidHistoryModule } from './interest-paid-history/interest-paid-history.module';
import { ChequeBookDetailsComponent } from './cheque-book-details/cheque-book-details.component';
import { UnclearChequeComponent } from './unclear-cheque/unclear-cheque.component';
import { LoanProjectionComponent } from './loan-projection/loan-projection.component';
import { LoanInstallmentInquiryComponent } from './loan-installment-inquiry/loan-installment-inquiry.component';
import { DepositInterestProjectionComponent } from './deposit-interest-projection/deposit-interest-projection.component';
import { RatioAnalysisComponent } from './ratio-analysis/ratio-analysis.component';
import { DepositLoanAnalysisComponent } from './deposit-loan-analysis/deposit-loan-analysis.component';
import { BudgetViewComponent } from './budget-view/budget-view.component';
import { MemberGuarantorViewComponent } from './member-guarantor-view/member-guarantor-view.component';
import { LockerViewComponent } from './locker-view/locker-view.component';
import { GraphLoanDepositPositionComponent } from './graph-loan-deposit-position/graph-loan-deposit-position.component';
import { ComparitiveGraphLoanDepositPositionComponent } from './comparitive-graph-loan-deposit-position/comparitive-graph-loan-deposit-position.component';
import { CdRationAnalysisComponent } from './cd-ration-analysis/cd-ration-analysis.component';
import { DataTablesModule } from 'angular-datatables';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SchemeAccountNoService } from '../../../shared/dropdownService/schemeAccountNo.service';
import { SchemeCodeDropdownService } from '../../../shared/dropdownService/scheme-code-dropdown.service';
import { OwnbranchMasterService } from '../../../shared/dropdownService/own-branch-master-dropdown.service';
import { RepayModeService } from 'src/app/shared/dropdownService/repay-mode.service';
import { InstallmentMethodService } from 'src/app/shared/dropdownService/installment-method.service';
@NgModule({
  imports: [
    CommonModule,
    OtherViewRoutingModule,
    SharedModule,
    DataTablesModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    NgSelectModule,
    InterestPaidHistoryModule
  ],
  providers: [
    SchemeAccountNoService, SchemeCodeDropdownService, OwnbranchMasterService,RepayModeService,InstallmentMethodService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },],
  declarations: [OtherViewComponent,
    //  InterestPaidHistoryComponent,
    BudgetViewComponent, DepositLoanAnalysisComponent, RatioAnalysisComponent, ChequeBookDetailsComponent, DepositInterestProjectionComponent, UnclearChequeComponent, LoanProjectionComponent, LoanInstallmentInquiryComponent, MemberGuarantorViewComponent, LockerViewComponent, GraphLoanDepositPositionComponent, ComparitiveGraphLoanDepositPositionComponent, CdRationAnalysisComponent
  ],
  // exports: [InterestPaidHistoryComponent]
})
export class OtherViewModule { }