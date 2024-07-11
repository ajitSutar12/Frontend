import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForzenaccountComponent } from './forzenaccount.component';

const routes: Routes = [
  {
    path: '',
    component: ForzenaccountComponent,
    data: {
      title: 'Frozen Account',
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
export class ForzenaccountRoutingModule { }
