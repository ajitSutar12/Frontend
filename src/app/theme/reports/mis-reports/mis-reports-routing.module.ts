import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  data: {
    title: 'MIS Reports ',
  icon: 'icon-home',
  caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
  status: true
},
children:[
{
    path: 'excessCashBalance',
    loadChildren: () => import('./excess-cash-balance/excess-cash-balance.module').then(m => m.ExcessCashBalanceModule)
  },
]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisReportsRoutingModule { }
