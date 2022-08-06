import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnDepositsComponent } from './own-deposits.component';

const routes: Routes = [
  {
    path: '',
    component: OwnDepositsComponent,
    data: {
      title: 'Own Deposits',
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
export class OwnDepositsRoutingModule { }
