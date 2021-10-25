import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecoveryComponent} from './recovery.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Recovery',
      status: false
    },
    children: [
      {
        path: 'recoveryProcessing',
        loadChildren: () => import('./recovery-processing/recovery-processing.module').then(m => m.RecoveryProcessingModule)
      },
      {
        path: 'recoveryModification',
        loadChildren: () => import('./recovery-modification/recovery-modification.module').then(m => m.RecoveryModificationModule)
      },
      {
        path: 'recoveryPosting',
        loadChildren: () => import('./recovery-posting/recovery-posting.module').then(m => m.RecoveryPostingModule)
      },
      {
        path: 'recoveryDataImportExport',
        loadChildren: () => import('./recovery-data-import-export/recovery-data-import-export.module').then(m => m.RecoveryDataImportExportModule)
      },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoveryRoutingModule { }