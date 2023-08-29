import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaturedNotpaidComponent } from './matured-notpaid.component';

const routes: Routes = [{
  path: '',
  component:  MaturedNotpaidComponent,
  data: {
    title: 'matured not paid',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaturedNotpaidRoutingModule { }
