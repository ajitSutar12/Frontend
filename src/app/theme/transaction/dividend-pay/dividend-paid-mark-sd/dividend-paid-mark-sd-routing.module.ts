import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DividendPaidMarkSDComponent} from './dividend-paid-mark-sd.component';

const routes: Routes = [
  {
    path: '',
    component:  DividendPaidMarkSDComponent,
    data: {
      title: 'Dividend Paid MSD',
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
export class  DividendPaidMarkSDRoutingModule { }