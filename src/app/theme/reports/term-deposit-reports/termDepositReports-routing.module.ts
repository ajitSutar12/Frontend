import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TermDepositReportsComponent} from './term-deposit-reports.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: TermDepositReportsComponent,
  //   data: {
  //     title: 'Term Deposit Reports',
  //   icon: 'icon-home',
  //   caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
  //     status: false
  //   },
  //   children:[
  //     {
  //       path: 'bnkmaturedbutnotpaid',
  //       loadChildren: () => import('./maturedbut-notpaid/maturedbut-notpaid.module').then(m => m.MaturedbutNotpaidModule)
  //     },
  //     {
  //       path: 'maturebutnotpaid',
  //       loadChildren: () => import('./maturebut-notpaid/maturebut-notpaid.module').then(m => m.MaturebutNotpaidModule)
  //     },
  //   ]
  // }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermDepositReportsRoutingModule { }
