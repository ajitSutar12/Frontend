import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositLoanInterestRateEditChangeComponent } from './deposit-loan-interest-rate-edit-change.component';
import { DepositLoanInterestRateEditChangeRoutingModule } from './deposit-Loan-Interest-Rate-Edit-Change-routing.module'
import { DataTablesModule } from 'angular-datatables';
import { SelectModule } from 'ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { S4Service } from '../../../../shared/elements/s4.service';
import { Ac4Service } from '../../../../shared/elements/ac4.service';
import { S15Service } from '../../../../shared/elements/s15.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    DepositLoanInterestRateEditChangeRoutingModule,
    DataTablesModule,
    SelectModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [S4Service, Ac4Service, S15Service,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },],
  declarations: [DepositLoanInterestRateEditChangeComponent]
})
export class DepositLoanInterestRateEditChangeModule { }
