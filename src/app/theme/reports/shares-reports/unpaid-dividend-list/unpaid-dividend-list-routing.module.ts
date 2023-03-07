import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnpaidDividendListComponent } from './unpaid-dividend-list.component';

const routes: Routes = [
  {
    path: '',
    component:  UnpaidDividendListComponent,
    data: {
      title: 'Unpaid Dividend List',
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
export class UnpaidDividendListRoutingModule { } 
