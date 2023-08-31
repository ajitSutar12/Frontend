import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DividendPaidSDComponent } from './dividend-paid-sd.component';
const routes: Routes = [
  {
    path: '',
    component: DividendPaidSDComponent,
    data: {
      title: 'Dividend Paid SD',
     
      status: false
    },
   
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DividendPaidSDRoutingModule { }