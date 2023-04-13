import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OtherReportsComponent} from './other-reports.component';

const routes: Routes = [
  {
    path: '',
    // component: OtherReportsComponent,
    data: {
      title: 'Other Reports',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    },
    children:[
      {
        path: 'BnkMinorsList',
        loadChildren: () => import('./bnk-minors-list/bnk-minors-list.module').then(m => m.BnkMinorsListModule)
      },
      {
        path: 'BnkNomineeList',
        loadChildren: () => import('./bnk-nominee-list/bnk-nominee-list.module').then(m => m.BnkNomineeListModule)
      },
      {
        path: 'BnkGuaranterList',
        loadChildren: () => import('./bnk-guaranter-list/bnk-guaranter-list.module').then(m => m.BnkGuaranterListModule)
      },
      {
        path: 'BnkLienMarkedAcList',
        loadChildren: () => import('./bnk-lien-marked-ac-list/bnk-lien-marked-ac-list.module').then(m => m.BnkLienMarkedAcListModule)
      },
      {
        path: 'BnkDormantAcList',
        loadChildren: () => import('./bnk-dormant-ac-list/bnk-dormant-ac-list.module').then(m => m.BnkDormantAcListModule)
      },
      {
        path: 'BnkAmountMovement',
        loadChildren: () => import('./bnk-amount-movement/bnk-amount-movement.module').then(m => m.BnkAmountMovementModule)
      },
      {
        path: 'BnkDepAmountMovementDetail',
        loadChildren: () => import('./bnk-dep-amount-movement-detail/bnk-dep-amount-movement-detail.module').then(m => m.BnkDepAmountMovementDetailModule)
      },
      {
        path: 'BnkLNAmountMovementDetail',
        loadChildren: () => import('./bnk-lnamount-movement-detail/bnk-lnamount-movement-detail.module').then(m => m.BnkLNAmountMovementDetailModule)
      },
      {
        path: 'BnkGurDetailsList',
        loadChildren: () => import('./bnk-gur-details-list/bnk-gur-details-list.module').then(m => m.BnkGurDetailsListModule)
      },
      {
        path: 'BnkNonGuaranteerView',
        loadChildren: () => import('./bnk-non-guaranteer-view/bnk-non-guaranteer-view.module').then(m => m.BnkNonGuaranteerViewModule)
      },
      {
        path: 'custidIntroducerList',
        loadChildren: () => import('./custidwise-introducer-list/custidwise-introducer-list.module').then(m => m.CustidwiseIntroducerListModule)
      },
      {
        path: 'serviceChargeList',
        loadChildren: () => import('./service-charges-list/service-charges-list.module').then(m => m.ServiceChargesListModule)
      },
      {
        path: 'minorToMajorlist',
        loadChildren: () => import('./minor-to-major-list/minor-to-major-list.module').then(m => m.MinorToMajorListModule)
      },
      {
        path: 'tranLessAclist',
        loadChildren: () => import('./transactionless-account-list/transactionless-account-list.module').then(m => m.TransactionlessAccountListModule)
      },
      {
        path: 'dormantAccountList',
        loadChildren: () => import('./dormant-account/dormant-account.module').then(m => m.DormantAccountModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherReportsRoutingModule { }
 