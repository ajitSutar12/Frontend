import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkLNamtStatementComponent } from './bnk-lnamt-statement.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkLNamtStatementComponent,
    data: {
      title: 'Term Loan stament with other amount',
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