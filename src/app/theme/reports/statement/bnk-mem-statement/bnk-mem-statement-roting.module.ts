import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkMemStatementComponent } from './bnk-mem-statement.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkMemStatementComponent,
    data: {
      title: 'Member Statement',
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
export class  BnkMemStatementRoutingModule { }