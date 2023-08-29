import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkLNamtStatementComponent } from './bnk-lnamt-statement.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkLNamtStatementComponent,
    data: {
      title: 'T LN stmt with other amt',
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
export class  BnkLNamtStatementRoutingModule { }