import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoanInstallmentEditAndCloseDateUpdationComponent } from './loan-installment-edit-and-close-date-updation.component';

const routes: Routes = [
  {
    path: '',
    component: LoanInstallmentEditAndCloseDateUpdationComponent,
    data: {
      title: 'Recntion Ope Transt Ent',
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
export class LoanInstallmentEditAndCloseDateUpdationRoutingModule { }
