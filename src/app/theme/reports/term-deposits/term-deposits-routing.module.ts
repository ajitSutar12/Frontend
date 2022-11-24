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
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermDepositsRoutingModule { }
