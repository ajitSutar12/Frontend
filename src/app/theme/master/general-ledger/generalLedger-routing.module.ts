import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GeneralLedgerComponent} from './general-ledger.component';


const routes: Routes = [
  {
    path: '',
  data: {
    title: 'General Ledger',
    status: false
  },
  children: [
    {
      path: 'gl-statement-code',
      loadChildren: () => import('./gl-statement-code/gl-statement-code.module').then(m => m.GlStatementCodeModule)
    },
    {
      path: 'gl-accounts-master',
      loadChildren: () => import('./gl-accounts-master/gl-account-master.module').then(m => m.GlAccountsMasterModule)
    },
    {
      path: 'gl-report-master',
      loadChildren: () => import('./gl-report-master/gl-report-master.module').then(m => m.GlReportMasterModule)
    },
    {
      path: 'gl-report-linking',
      loadChildren: () => import('./gl-report-linking/gl-report-linking.module').then(m => m.GlReportLinkingModule)
    },
    {
      path: 'budget-master',
      loadChildren: () => import('./budget-master/budgest-master.module').then(m => m.BudgetMasterModule)
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralLedgerRoutingModule { }
