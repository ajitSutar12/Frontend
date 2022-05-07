import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkAcStatementComponent } from './bnk-ac-statement.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkAcStatementComponent,
    data: {
      title: 'Account Statement',
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
export class  BnkAcStatementRoutingModule { }