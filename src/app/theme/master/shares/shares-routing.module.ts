import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {SharesComponent} from './shares.component';

const routes: Routes = [
  {
    path: '',
    // component: SharesComponent,
    data: {
      title: 'Shares',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    },
    children: [
      {
        path: 'dividendCalculation',
        loadChildren: () => import('./dividend-calculation/dividend-calculation.module').then(m => m.DividendCalculationModule)
      },
      {
        path: 'dividendPosting',
        loadChildren: () => import('./dividend-posting/dividend-posting.module').then(m => m.DividendPostingModule)
      },
      {
        path: 'dividendTransferEntry',
        loadChildren: () => import('./dividend-transfer-entry/dividend-transfer-entry.module').then(m => m.DividendTransferEntryModule)
      },
      {
        path: 'dividendTransferPosting',
        loadChildren: () => import('./dividend-transfer-posting/dividend-transfer-posting.module').then(m => m.DividendTransferPostingModule)
      },
      {
        path: 'unpaidDividendEntry',
        loadChildren: () => import('./unpaid-dividend-entry/unpaid-dividend-entry.module').then(m => m.UnpaidDividendEntryModule)
      },
      {
        path: 'yearWiseUnpaidDividendEntry',
        loadChildren: () => import('./year-wise-unpaid-dividend-entry/year-wise-unpaid-dividend-entry.module').then(m => m.YearWiseUnpaidDividendEntryModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharesRoutingModule { }
