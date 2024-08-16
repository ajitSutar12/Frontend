import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Process',
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
        path: 'pigmyAppProcess',
        loadChildren: () => import('./pigmy-app-process/pigmy-app-process.module').then(m => m.PigmyAppProcessModule)
      },
      {
        path: 'holiday',
        loadChildren: () => import('./holiday/holiday.module').then(m => m.HolidayModule)
      },
      {
        path: 'dataBackup',
        loadChildren: () => import('./backup-data/backup-data.module').then(m => m.BackupDataModule)
      },
      {
        path: 'deadStockP',
        loadChildren: () => import('./dead-stock-p/dead-stock-p.module').then(m => m.DeadStockPModule)
      },
      {
        path: 'processACM',
        loadChildren: () => import('./process-acm/process-acm.module').then(m => m.ProcessACMModule)
      },
      {
        path: 'monthly recovery process',
        loadChildren: () => import('./recovery-processing/recovery-processing.module').then(m => m.RecoveryProcessingModule)
      },
      {
        path: 'yearEndBranchwise',
        loadChildren: () => import('./year-end-branchwise/year-end-branchwise.module').then(m => m.YearEndBranchwiseModule)
      },
      {
        path: 'cibilScore',
        loadChildren: () => import('./cibil-score/cibil-score.module').then(m => m.CibilScoreModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
