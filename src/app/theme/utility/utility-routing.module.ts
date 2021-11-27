import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Utility',
      status: false
    },
    children: [
      {
        path: 'dayBegin',
        loadChildren: () => import('./day-begin/day-begin.module').then(m => m.DayBeginModule)
      },
      {
        path: 'dayEnd',
        loadChildren: () => import('./day-end/day-end.module').then(m => m.DayEndModule)
      },
      {
        path: 'backDatedDO',
        loadChildren: () => import('./back-dated-do/back-dated-do.module').then(m => m.BackDatedDOModule)
      },
      {
        path: 'receiptPrintingD',
        loadChildren: () => import('./receipt-printing-d/receipt-printing-d.module').then(m => m.ReceiptPrintingDModule)
      },
      {
        path: 'holiday',
        loadChildren: () => import('./holiday/holiday.module').then(m => m.HolidayModule)
      },
      {
        path: 'interestPosting',
        loadChildren: () => import('./interest-posting/interest-posting.module').then(m => m.InterestPostingModule)
      },
      {
        path: 'processACM',
        loadChildren: () => import('./process-acm/process-acm.module').then(m => m.ProcessACMModule)
      },
      {
        path: 'deadStockP',
        loadChildren: () => import('./dead-stock-p/dead-stock-p.module').then(m => m.DeadStockPModule)
      },
      {
        path: 'dividend',
        loadChildren: () => import('./dividend/dividend.module').then(m => m.DividendModule)
      },
      {
        path: 'statementHeadInsert',
        loadChildren: () => import('./statement-head-insert/statement-head-insert.module').then(m => m.StatementHeadInsertModule)
      },
      {
        path: 'changePassword',
        loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule)
      },
      {
        path: 'roleDefination',
        loadChildren: () => import('./role-defination/role-defination.module').then(m => m.RoleDefinationModule)
      },
      {
        path: 'roleMaster',
        loadChildren: () => import('./role-master/role-master.module').then(m => m.RoleMasterModule)
      },
      {
        path: 'userDefination',
        loadChildren: () => import('./user-defination/user-defination.module').then(m => m.UserDefinationModule)
      },
      {
        path: 'cashierUM',
        loadChildren: () => import('./cashier-um/cashier-um.module').then(m => m.CashierUMModule)
      },
      {
        path: 'sharesCCTS',
        loadChildren: () => import('./shares-ccts/shares-ccts.module').then(m => m.SharesCCTSModule)
      },
      {
        path: 'silverJACTS',
        loadChildren: () => import('./silver-jacts/silver-jacts.module').then(m => m.SilverJACTSModule)
      },
      {
        path: 'masikBDW',
        loadChildren: () => import('./masik-bdw/masik-bdw.module').then(m => m.MasikBDWModule)
      },
      {
        path: 'schemeATE',
        loadChildren: () => import('./scheme-ate/scheme-ate.module').then(m => m.SchemeATEModule)
      },
      {
        path: 'schemeParameters',
        loadChildren: () => import('./scheme-parameters/scheme-parameter.module').then(m => m.SchemeParametersModule)
      },
      {
        path: 'calculator',
        loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorModule)
      },
      {
        path: 'remindMe',
        loadChildren: () => import('./remind-me/remind-me.module').then(m => m.RemindMeModule)
      },
      {
        path: 'dataBackup',
        loadChildren: () => import('./data-backup/data-backup.module').then(m => m.DataBackupModule)
      },
      {
        path: 'pataSevaSupportR',
        loadChildren: () => import('./pata-seva-support-r/pata-seva-support-r.module').then(m => m.PataSevaSupportRModule)
      },
      {
        path: 'sharesDataEI',
        loadChildren: () => import('./shares-data-ei/shares-data-ei.module').then(m => m.SharesDataEIModule)
      },
      {
        path: 'dayBookIE',
        loadChildren: () => import('./day-book-ie/day-book-ie.module').then(m => m.DayBookIEModule)
      },
      {
        path: 'demandDraftDEI',
        loadChildren: () => import('./demand-draft-dei/demand-draft-dei.module').then(m => m.DemandDraftDEIModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilityRoutingModule { }
