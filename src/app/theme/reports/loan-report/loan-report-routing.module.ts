import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Loan Report ',
  icon: 'icon-home',
  caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
  status: true
},
children:[
  {
    path: 'loancashcreditac',
    loadChildren: () => import('./loancashcreditac-opensanctiondatewise/loancashcreditac-opensanctiondatewise.module').then(m => m.LoancashcreditacOpensanctiondatewiseModule)
  },
  {
    path: 'Drecb-monthly-list',
    loadChildren: () => import('./drecb-monthly-list/drecb-monthly-list.module').then(m => m.DRecbMonthlyListModule)
  },
  {
    path: 'lcd-expiry-list',
    loadChildren: () => import('./lcd-expiry-list/lcd-expiry-list.module').then(m => m.LcdExpiryListModule)
  },
  {
    path: 'lcd-expiry-list',
    loadChildren: () => import('./lcd-expiry-list/lcd-expiry-list.module').then(m => m.LcdExpiryListModule)
  },
  {
    path: 'DDRelative-Report',
    loadChildren: () => import('./ddrelative-report/ddrelative-report.module').then(m => m.DDRelativeReportModule)
  },
  {
    path: 'DDRelative-Report-performa1',
    loadChildren: () => import('./dd-relative-proform/dd-relative-proform.module').then(m => m.DdRelativeProformModule)
  },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanReportRoutingModule { }
