import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharesNomineeListComponent } from './shares-nominee-list.component';

const routes: Routes = [
  {
    path: '',
    component: SharesNomineeListComponent,
    data: {
      title: 'Monthly Recovery Subsidiary',
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
export class SharesNomineeListRoutingModule { }
