import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Passing',
      status: false
    },
    children: [
      {
        path: 'centralisedPassing',
        loadChildren: () => import('./centralised-passing/centralisedPassing.module').then(m => m.CentralisedPassingModule)
      },
      {
        path: 'unapprove',
        loadChildren: () => import('./master-unlock/masterUnlock.module').then(m => m.MasterUnlockModule)
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassingRoutingModule { }

