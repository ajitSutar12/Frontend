import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInsuranceComponent } from './customer-insurance.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerInsuranceComponent,
    data: {
      title: 'General Insurance',
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
export class CustomerInsuranceRoutingModule { }
