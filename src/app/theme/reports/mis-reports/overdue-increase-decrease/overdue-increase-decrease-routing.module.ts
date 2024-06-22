import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverdueIncreaseDecreaseComponent } from './overdue-increase-decrease.component';

const routes: Routes = [
  {
    path: '',
    component: OverdueIncreaseDecreaseComponent ,
    data: {
      title: 'Overdue Increase Decrease Report ',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverdueIncreaseDecreaseRoutingModule { }
