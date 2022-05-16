import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FinalReportsComponent} from './final-reports.component';

const routes: Routes = [
  {
    path: '',
    // component: FinalReportsComponent,
    data: {
      title: 'Final Reports',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    },
    children:[
      {
        path: 'BnkTrialBal',
        loadChildren: () => import('./bnk-trial-bal/bnk-trial-bal.module').then(m => m.BnkTrialBalModule)
      },
      {
        path: 'BnkTrialBaldetail',
        loadChildren: () => import('./bnk-trial-baldetail/bnk-trial-baldetail.module').then(m => m.BnkTrialBaldetailModule)
      },
      // {
      //   path: 'BnkGuaranterList',
      //   loadChildren: () => import('./bnk-guaranter-list/bnk-guaranter-list.module').then(m => m.BnkGuaranterListModule)
      // },
      // {
      //   path: 'BnkLienMarkedAcList',
      //   loadChildren: () => import('./bnk-lien-marked-ac-list/bnk-lien-marked-ac-list.module').then(m => m.BnkLienMarkedAcListModule)
      // }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalReportsRoutingModule { }
