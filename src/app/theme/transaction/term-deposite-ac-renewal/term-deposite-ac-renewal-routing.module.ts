import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TermDepositeAcRenewalComponent } from './term-deposite-ac-renewal.component';
const routes: Routes = [
  {
    path: '',
    component: TermDepositeAcRenewalComponent,
    data: {
      title: 'T-Depo Acc Renewal',
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
export class TermDepositeAcRenewalRoutingModule { }