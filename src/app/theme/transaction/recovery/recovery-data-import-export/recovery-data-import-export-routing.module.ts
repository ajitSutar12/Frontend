import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RecoveryDataImportExportComponent } from './recovery-data-import-export.component';


const routes: Routes = [
  {
    path: '',
    component: RecoveryDataImportExportComponent,
    data: {
      title: 'Recovery Data Import Export',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoveryDataImportExportRoutingModule { }
