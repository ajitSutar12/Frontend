import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountOpeningComponent } from './account-opening.component';
import { AccountOpeningRoutingModule } from './account-opening-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng-select';
import { Scheme1Service } from '../../../../shared/elements/scheme1.service';
import { A1Service } from '../../../../shared/elements/a1.service';
import { BranchService } from '../../../../shared/elements/branch.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankMasterService } from '../../../../shared/dropdownService/bank-Master-dropdown.service';
import { OwnbranchMasterService } from '../../../../shared/dropdownService/own-branch-master-dropdown.service';
import { SchemeCodeDropdownService } from '../../../../shared/dropdownService/scheme-code-dropdown.service';
import { BankService } from '../../policy-settings/information/bank-master/bank-master.service';
import { InvestmentService } from './account-opening.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    AccountOpeningRoutingModule,
    NgbModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AccountOpeningComponent],
  providers: [Scheme1Service, A1Service, BranchService,
    BankMasterService,
    OwnbranchMasterService,
    SchemeCodeDropdownService,
    BankService,
    InvestmentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserAuthInterceptor,
      multi: true
    },
  ]
})
export class AccountOpeningModule { }
