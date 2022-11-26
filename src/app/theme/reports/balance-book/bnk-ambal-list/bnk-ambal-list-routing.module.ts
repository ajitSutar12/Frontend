import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BnkAmbalListComponent } from './bnk-ambal-list.component';

const routes: Routes = [ {
  path: '',
  component:  BnkAmbalListComponent,
  data: {
    title: 'Amountwise Balance List',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BnkAmbalListRoutingModule { }


  