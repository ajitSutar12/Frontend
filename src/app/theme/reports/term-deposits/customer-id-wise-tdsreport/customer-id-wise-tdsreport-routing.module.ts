import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerIdWiseTDSreportComponent } from './customer-id-wise-tdsreport.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerIdWiseTDSreportComponent,
    data: {
      title: 'Customer Id Wise TDS report',
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
export class CustomerIdWiseTDSreportRoutingModule { }
