import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountWiseLawadLoanComponent } from './count-wise-lawad-loan.component';

const routes: Routes = [
  {
    path: '',
    component: CountWiseLawadLoanComponent,
    data: {
      title: 'Deposits Amount Classfication',
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
export class CountWiseLawadLoanRoutingModule { }
