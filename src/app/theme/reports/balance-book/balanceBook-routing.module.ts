import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BalanceBookComponent} from './balance-book.component';

const routes: Routes = [
  {
    path: '',
    component: BalanceBookComponent,
    data: {
      title: 'Balance Book',
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
export class BalanceBookRoutingModule { }
