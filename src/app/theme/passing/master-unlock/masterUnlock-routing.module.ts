import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterUnlockComponent } from './master-unlock.component';

const routes: Routes = [
  {
    path: '',
    component: MasterUnlockComponent,
    data: {
      title: 'Unapprove',
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
export class MasterUnlockRoutingModule { }
