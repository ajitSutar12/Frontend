import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '',
    //component: CustomerComponent,
    data: {
      title: 'Customer',
      // icon: 'icon-home',
      // caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    },
    children: [
      {
        path: 'customerId',
        loadChildren: () => import('./customer-id/customer-id.module').then(m => m.CustomerIdModule)
      },
      {
        path: 'sharesMaster',
        loadChildren: () => import('./shares-master/shares-master.module').then(m => m.SharesMasterModule)
      },
      {
        path: 'anamatGSM',
        loadChildren: () => import('./anamat-gsm/anamat-gsm.module').then(m => m.AnamatGSMModule)
      },
      {
        path: 'savingMaster',
        loadChildren: () => import('./saving-master/saving-master.module').then(m => m.SavingMasterModule)
      },
      {
        path: 'currentAccountMaster',
        loadChildren: () => import('./current-account-master/current-account-master.module').then(m => m.CurrentAccountMasterModule)
      },
      {
        path: 'termDepositsMaster',
        loadChildren: () => import('./term-deposits-master/term-deposits-master.module').then(m => m.TermDepositsMasterModule)
      },
      {
        path: 'cashCreditMaster',
        loadChildren: () => import('./cash-credit-master/cash-credit-master.module').then(m => m.CashCreditMasterModule)
      },
      {
        path: 'termLoanMaster',
        loadChildren: () => import('./term-loan-master/term-loan-master.module').then(m => m.TermLoanMasterModule)
      },
      {
        path: 'disputeLoanMaster',
        loadChildren: () => import('./dispute-loan-master/dispute-loan-master.module').then(m => m.DisputeLoanMasterModule)
      },
      {
        path: 'pigmyAgentMaster',
        loadChildren: () => import('./pigmy-agent-master/pigmy-agent-master.module').then(m => m.PigmyAgentMasterModule)
      },
      {
        path: 'pigmyAccountMaster',
        loadChildren: () => import('./pigmy-account-master/pigmy-account-master.module').then(m => m.PigmyAccountMasterModule)
      },
      {
        path: 'deadStockMaster',
        loadChildren: () => import('./dead-stock-master/dead-stock-master.module').then(m => m.DeadStockMasterModule)
      },
      {
        path: 'deadStockMaster',
        loadChildren: () => import('./dead-stock-master/dead-stock-master.module').then(m => m.DeadStockMasterModule)
      },
      {
        path: 'accountOpening',
        loadChildren: () => import('./account-opening/account-opening.module').then(m => m.AccountOpeningModule)
      },
      {
        path: 'lockerMaster',
        loadChildren: () => import('./locker-master/locker-master.module').then(m => m.LockerMasterModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
