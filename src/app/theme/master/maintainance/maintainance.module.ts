import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintainanceComponent } from './maintainance.component';
import { MaintainanceRoutingModule } from './maintainance-routing.module'
import {SharedModule} from '../../../shared/shared.module';
// import { NotingChargesComponent } from './noting-charges/noting-charges.component';
// import { AccountwiseDocumentAcceptanceCodepositmponent } from './accountwise-document-acceptance/accountwise-document-acceptance.component';
// import { InterestPostingFlagUpdationComponent } from './interest-posting-flag-updation/interest-posting-flag-updation.component';
// import { NpaOpeningDetailsEntryComponent } from './npa-opening-details-entry/npa-opening-details-entry.component';
// import { DepositLoanInterestRateEditChangeComponent } from './deposit-loan-interest-rate-edit-change/deposit-loan-interest-rate-edit-change.component';
// import { LoanAndCCInterestRateChangesComponent } from './loan-and-ccinterest-rate-changes/loan-and-ccinterest-rate-changes.component';
// import { SecurityDetailsComponent } from './security-details/security-details.component';
import {SelectOptionService} from '../../../shared/elements/select-option.service'
import {SelectModule} from 'ng-select';
// import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserAuthInterceptor } from 'src/app/user-auth.interceptor';
// import { RecoveryFlagUpdationComponent } from './recovery-flag-updation/recovery-flag-updation.component';


// import { MoratoriumperiodmasterComponent } from './moratoriumperiodmaster/moratoriumperiodmaster.component';
// import { TDSFormSubmissionComponent } from './tds-form-submission/tds-form-submission.component';


@NgModule({
  imports: [
    CommonModule,
    MaintainanceRoutingModule,
    SharedModule,
    SelectModule,
    
    // FormsModule,
    // ReactiveFormsModule
  ],
  declarations: [MaintainanceComponent,],
  providers: [SelectOptionService,{
    provide: HTTP_INTERCEPTORS,
    useClass: UserAuthInterceptor,
    multi: true
  },]
})
export class MaintainanceModule { }
