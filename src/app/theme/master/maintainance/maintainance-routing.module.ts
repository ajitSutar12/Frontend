import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MaintainanceComponent} from './maintainance.component';

const routes: Routes = [
  {
    path: '',
    // component: MaintainanceComponent,
    data: {
      title: 'Maintainance',
      status: true
    },
    children:[
    {
      path:'securityDetails',
      loadChildren: () => import('./security-details/securityDetails.module').then(m => m.SecurityDetailsModule )
    },
    {
      path:'loanAndCCInterestRateChanges',
      loadChildren: () => import('./loan-and-ccinterest-rate-changes/loan-And-CC-Interest-Rate-Changes.module').then(m => m.LoanAndCCInterestRateChangesModule )
    },
    {
      path:'depositLoanInterestRateEditChange',
      loadChildren: () => import('./deposit-loan-interest-rate-edit-change/deposit-Loan-Interest-Rate-Edit-Change.module').then(m => m.DepositLoanInterestRateEditChangeModule )
    },
    {
      path:'npaOpeningDetailsEntry',
      loadChildren: () => import('./npa-opening-details-entry/npa-opening-details-entry.module').then(m => m.NpaOpeningDetailsEntryModule )
    },
    {
      path:'interestPostingFlagUpdation',
      loadChildren: () => import('./interest-posting-flag-updation/interest-posting-flag-updation.module').then(m => m.InterestPostingFlagUpdationModule )
    },
    {
      path:'accountwiseDocumentAcceptance',
      loadChildren: () => import('./accountwise-document-acceptance/accountwise-document-acceptance.module').then(m => m.AccountwiseDocumentAcceptanceModule )
    },
    {
      path:'notingCharges',
      loadChildren: () => import('./noting-charges/notingCharges.module').then(m => m.NotingChargesModule )
    },
    {
      path:'tdsformsubmission',
      loadChildren: () => import('./tds-form-submission/tdsformsubmission.module').then(m=>m.TDSFormSubmissionModule)
    },
    {
      path:'moratoriumperiodmaster',
      loadChildren: () => import('./moratoriumperiodmaster/moratoriumperiodmaster.module').then(m=>m.MoratoriumPeriodMasterModule)
    },
   
    {
      path:'pigmyagentchange',
      loadChildren: () => import('./pigmyagentchange/pigmyagentchange.module').then(m=>m.PigmyagentchangeModule)
    },
   
    {
      path:'recoveryFlag',
      loadChildren: () => import('./recovery-flag-updation/recovery-flag-updation.module').then(m=>m.RecoveryFlagUpdationModule)
    }
   
   
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintainanceRoutingModule { }
