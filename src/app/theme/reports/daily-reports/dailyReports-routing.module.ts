import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DailyReportsComponent} from './daily-reports.component';

const routes: Routes = [
  {
    path: '',
    // component: DailyReportsComponent,
    data: {
      title: 'Daily Reports',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    },
    children:[
      {
        path: 'BnkDayBookSummary',
        loadChildren: () => import('./bnk-day-book-summary/bnk-day-book-summary.module').then(m => m.BnkDayBookSummaryModule)
      },
       {
         path: 'BnkSubsidaryDetail',
         loadChildren: () => import('./bnk-subsidary-detail/bnk-subsidary-detail.module').then(m => m.BnkSubsidaryDetailModule)
       },
       {
         path: 'BnkScrollDetailBoth',
         loadChildren: () => import('./bnk-scroll-detail-both/bnk-scroll-detail-both.module').then(m => m.BnkScrollDetailBothModule)
       },
       {
         path: 'IntInstructionExecutionFailure',
         loadChildren: () => import('./bnk-instructions-interest-debit/bnk-instructions-interest-debit.module').then(m => m.BnkInstructionsInterestDebitModule)
       },
       {
         path: 'StandingInstExecutionFailure',
         loadChildren: () => import('./bnk-instructions-standing-debit/bnk-instructions-standing-debit.module').then(m => m.BnkInstructionsStandingDebitModule)
       },
       {
         path: 'StandingInstExecutionCredit',
         loadChildren: () => import('./bnk-expect-standing-inst-credit/bnk-expect-standing-inst-credit.module').then(m => m.BnkExpectStandingInstCreditModule)
       },
       {
        path: 'StandingInstExecutionDebit',
        loadChildren: () => import('./bnk-expect-stand-instruction/bnk-expect-stand-instruction.module').then(m => m.BnkExpectStandInstructionModule)
      },
      {
        path: 'IntInstructExecutionCredit',
        loadChildren: () => import('./bnk-expect-int-instruct-credit/bnk-expect-int-instruct-credit.module').then(m => m.BnkExpectIntInstructCreditModule)
      },
      {
        path: 'IntInstructExecutionDebit',
        loadChildren: () => import('./bnk-expect-int-instruct/bnk-expect-int-instruct.module').then(m => m.BnkExpectIntInstructModule)
      },
      {
        path: 'iframe1',
        loadChildren: () => import('./iframe1/iframe1.module').then(m => m.Iframe1Module)
      },
      {
        path: 'TFormDayBookComponent',
        loadChildren: () => import('./t-form-day-book/t-form-day-book.module').then(m => m.TFormDayBookModule)
      },
    
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyReportsRoutingModule { }
