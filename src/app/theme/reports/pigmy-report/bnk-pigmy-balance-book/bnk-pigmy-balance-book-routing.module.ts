import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkPigmyBalanceBookComponent } from './bnk-pigmy-balance-book.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkPigmyBalanceBookComponent,
    data: {
      title: 'Pigmy Balance Book',
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
export class  BnkPigmyBalanceBookRoutingModule { }