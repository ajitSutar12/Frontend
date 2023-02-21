import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TddetailRecurrOverdueComponent } from './tddetail-recurr-overdue.component'

const routes: Routes = [
  {
  path: '',
  component:TddetailRecurrOverdueComponent  , 
  data: {
    title: 'TD details Recurring',
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
export class TddetailRecurrOverdueRoutingModule { } 
 