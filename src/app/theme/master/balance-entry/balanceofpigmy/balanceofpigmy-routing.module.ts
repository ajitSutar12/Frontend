import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BalanceofpigmyComponent } from './balanceofpigmy.component';

const routes: Routes = [
  {
    path: '',
    component: BalanceofpigmyComponent,
    data: {
      title: 'Balance Of Pigmy',
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
export class BalanceofpigmyRoutingModule { }
