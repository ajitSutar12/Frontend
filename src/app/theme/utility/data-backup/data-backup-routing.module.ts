import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DataBackupComponent } from './data-backup.component';

const routes: Routes = [
  {
    path: '',
    component: DataBackupComponent,
    data: {
      title: 'Data Backup',
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
export class DataBackupRoutingModule { }
