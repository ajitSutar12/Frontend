import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LedgBwiseBtypeMemberComponent} from './ledg-bwise-btype-member.component'

const routes: Routes = [
  {
    path: '',
    component:  LedgBwiseBtypeMemberComponent,
    data: {
      title: 'Ledger Balance B Type',
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
export class LedgBwiseBtypeMemberRoutingModule { }
