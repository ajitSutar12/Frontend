import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Policy Setting',
      status: false
    },
    children: [
      {
        path: 'information',
        loadChildren: () => import('./information/information.module').then(m => m.InformationModule)
        },
      {
        path: 'definations',
        loadChildren: () => import('./definations/definations.module').then(m => m.DefinationsModule)
      },
      {
        path: 'sizewiseBalanceModification',
        loadChildren: () => import('./sizewise-balance-modification/sizewise-balance-modification.module').then(m => m.SizewiseBalanceModificationModule)
      },
      {
        path: 'tDReceiptTypeMaster',
        loadChildren: () => import('./t-dreceipt-type-master/t-dreceipt-type-master.module').then(m => m.TDReceiptTypeMasterModule)
      },
      {
        path: 'nPAClassificationSlabMaster',
        loadChildren: () => import('./n-paclassification-slab-master/n-paclassification-slab-master.module').then(m => m.NPAClassificationSlabMasterModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicySettingsRoutingModule { }
