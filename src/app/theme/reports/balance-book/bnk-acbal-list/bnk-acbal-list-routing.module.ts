import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BnkAcbalListComponent } from './bnk-acbal-list.component';
const routes: Routes = [ {
  path: '',
  component:  BnkAcbalListComponent ,
  data: {
    title: 'Account Balance List',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BnkAcbalListRoutingModule { } 
