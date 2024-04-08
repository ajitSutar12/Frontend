import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LockerViewComponent } from './locker-view.component';

const routes: Routes = [
  {
    path: '',
    component: LockerViewComponent,
    data: {
      title: 'Locker View',
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
export class LockerViewRoutingModule { }
