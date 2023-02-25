import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {
  path: '',
  data: {
    title: 'Term Report ',
  icon: 'icon-home',
  caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
  status: false
},
children:[
  {
    path: 'maturedbutnotpaid',
    loadChildren: () => import('./matured-notpaid/matured-notpaid.module').then(m => m.MaturedNotpaidModule)
  },
  {
    path: 'maturedbutnotclosed',
    loadChildren: () => import('./matured-notclosed/matured-notclosed.module').then(m => m.MaturedNotclosedModule)
  },
  {
    path: 'depositpaidlist',
    loadChildren: () => import('./deposit-paidlist/deposit-paidlist.module').then(m => m.DepositPaidlistModule)
  },
  {
    path: 'intratewisebalancelist',
    loadChildren: () => import('./intratewise-balancelist/intratewise-balancelist.module').then(m => m.IntratewiseBalancelistModule)
  },
  {
    path: 'custidwiseintpaidlist',
    loadChildren: () => import('./custidwise-intpaidlist/custidwise-intpaidlist.module').then(m => m.CustidwiseIntpaidlistModule)
  },
  {
    path: 'custidwiseloaninterestCertificate',
    loadChildren: () => import('./custidwise-loanint-certificate/custidwise-loanint-certificate.module').then(m => m.CustidwiseLoanintCertificateModule)
  },
  {
    path: 'IntRatewiseMaturityList',
    loadChildren: () => import('./intratewise-maturity-list/intratewise-maturity-list.module').then(m => m.IntratewiseMaturityListModule)
  },
  {
    path: 'custidwisedepositlist',
    loadChildren: () => import('./custidwise-deposit-list/custidwise-deposit-list.module').then(m => m.CustidwiseDepositListModule)
  },
  {
    path: 'tddetailrecurroverdue',
    loadChildren: () => import('./tddetail-recurr-overdue/tddetail-recurr-overdue.module').then(m => m.TddetailRecurrOverdueModule)
  },
  {
    path: 'prematuredAcCloselist',
    loadChildren: () => import('./prematured-ac-close/prematured-ac-close.module').then(m => m.PrematuredAcCloseModule)
  },
  {
    path: 'renewalDepositList',
    loadChildren: () => import('./renewal-deposit-list/renewal-deposit-list.module').then(m => m.RenewalDepositListModule)
  },
  {
    path: 'directorwiseDepositlist',
    loadChildren: () => import('./directorwise-deposit-list/directorwise-deposit-list.module').then(m => m.DirectorwiseDepositListModule)
  },
  {
    path: 'custidwiseInterestList',
    loadChildren: () => import('./custidwise-interest-list/custidwise-interest-list.module').then(m => m.CustidwiseInterestListModule)
  },
  {
    path: 'custidwiseMaturedList',
    loadChildren: () => import('./custidwise-matured-deposit-list/custidwise-matured-deposit-list.module').then(m => m.CustidwiseMaturedDepositListModule)
  },
  {
    path: 'abtypeDepositList',
    loadChildren: () => import('./abtypedeposit-list/abtypedeposit-list.module').then(m => m.AbtypedepositListModule)
  },
 
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermDepositsRoutingModule { }
