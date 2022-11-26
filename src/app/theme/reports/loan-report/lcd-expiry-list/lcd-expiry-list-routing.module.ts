import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LcdExpiryListComponent } from './lcd-expiry-list.component';

const routes: Routes = [
  {
    path: '',
  component: LcdExpiryListComponent ,
  data: {
    title: 'Loan/Cash Credit Expiry List ',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: false
  }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LcdExpiryListRoutingModule { }
