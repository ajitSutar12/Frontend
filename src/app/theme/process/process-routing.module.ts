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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
