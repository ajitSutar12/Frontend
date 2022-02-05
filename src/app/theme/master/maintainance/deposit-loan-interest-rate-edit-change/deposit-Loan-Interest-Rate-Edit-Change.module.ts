import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositLoanInterestRateEditChangeComponent } from './deposit-loan-interest-rate-edit-change.component';
import { DepositLoanInterestRateEditChangeRoutingModule } from './deposit-Loan-Interest-Rate-Edit-Change-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { SchemeAccountNoService } from '../../../../shared/dropdownService/schemeAccountNo.service';
import { DepositLoanInterestRateEditChangeService } from './deposit-loan-interest-rate-edit-change.service'
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service';
@NgModule({
  imports: [
    CommonModule,
    DepositLoanInterestRateEditChangeRoutingModule,
    DataTablesModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  }, SchemeCodeDropdownService,
    OwnbranchMasterService, SchemeAccountNoService, DepositLoanInterestRateEditChangeService],
  declarations: [DepositLoanInterestRateEditChangeComponent]
})
export class DepositLoanInterestRateEditChangeModule { }
