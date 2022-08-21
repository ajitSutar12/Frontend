import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PigmyReportComponent} from './pigmy-report.component';

const routes: Routes = [
  {
    path: '',
    // component: PigmyReportComponent,
    data: {
      title: 'Pigmy Report ',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: false
},
children:[
  {
    path: 'BnkPigmyCollectionChart',
    loadChildren: () => import('./bnk-pigmy-collection-chart/bnk-pigmy-collection-chart.module').then(m => m.BnkPigmyCollectionChartModule)
  },
  {
    path: 'BnkPigmyBalanceList',
    loadChildren: () => import('./bnk-pigmy-balance-list/bnk-pigmy-balance-list.module').then(m => m.BnkPigmyBalanceListModule)
  },
  {
    path: 'BnkPigmyBalanceBook',
    loadChildren: () => import('./bnk-pigmy-balance-book/bnk-pigmy-balance-book.module').then(m => m.BnkPigmyBalanceBookModule)
  },
  {
    path: 'BnkPigmyBlankChart',
    loadChildren: () => import('./bnk-pigmy-blank-chart/bnk-pigmy-blank-chart.module').then(m => m.BnkPigmyBlankChartModule)
  },
   {
     path: 'BnkPigmyCommissionRepo',
     loadChildren: () => import('./bnk-pigmy-commission-repo/bnk-pigmy-commission-repo.module').then(m => m.BnkPigmyCommissionRepoModule)
   },
  


]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PigmyReportRoutingModule { }
