import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkGlIntStatementComponent } from './bnk-gl-int-statement.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkGlIntStatementComponent,
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