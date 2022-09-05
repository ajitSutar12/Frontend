import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BalanceBookComponent} from './balance-book.component';

const routes: Routes = [
  {
    path: '',
    // component: BalanceBookComponent,
    data: {
      title: 'Balance Book',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    },
    children:[
      {
        path: 'BnkDedskBalList',
        loadChildren: () => import('./bnk-dedsk-bal-list/bnk-dedsk-bal-list.module').then(m => m.BnkDedskBalListModule)
      },
       {
         path: 'BnkLedgerABTypeList',
         loadChildren: () => import('./bnk-ledger-abtype-list/bnk-ledger-abtype-list.module').then(m => m.BnkLedgerABTypeListModule)
       },
       {
         path: 'BnkACBalBook',
         loadChildren: () => import('./bnk-acbal-book/bnk-acbal-book.module').then(m => m.BnkACBalBookModule)
       },
       {
         path: 'BnkCustIDBalList',
         loadChildren: () => import('./bnk-cust-idbal-list/bnk-cust-idbal-list.module').then(m => m.BnkCustIDBalListModule)
       },
       {
         path: 'BnkGLConsistRepo',
         loadChildren: () => import('./bnk-glconsist-repo/bnk-glconsist-repo.module').then(m => m.BnkGLConsistRepoModule)
       },
       {
         path: 'BnkReceiveIntList',
         loadChildren: () => import('./bnk-receive-int-list/bnk-receive-int-list.module').then(m => m.BnkReceiveIntListModule)
       },
      {
        path: 'BnkPayIntList',
        loadChildren: () => import('./bnk-pay-int-list/bnk-pay-int-list.module').then(m => m.BnkPayIntListModule)
      },
      {
        path: 'BnkDedskBalListDepre',
        loadChildren: () => import('./bnk-dedsk-bal-list-depre/bnk-dedsk-bal-list-depre.module').then(m => m.BnkDedskBalListDepreModule)
      },
      {
        path: 'BnkOtherBalList',
        loadChildren: () => import('./bnk-other-bal-list/bnk-other-bal-list.module').then(m => m.BnkOtherBalListModule)
      },
      {
        path: 'iframe',
        loadChildren: () => import('./iframe/iframe.module').then(m => m.IframeModule)
      },
      {
        path: 'BnkACBalList',
        loadChildren: () => import('./bnk-acbal-list/bnk-acbal-list.module').then(m => m.BnkAcbalListModule)
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceBookRoutingModule { }
