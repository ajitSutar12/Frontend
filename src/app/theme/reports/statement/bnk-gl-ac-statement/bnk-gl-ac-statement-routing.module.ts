import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkGlAcStatementComponent } from './bnk-gl-ac-statement.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkGlAcStatementComponent,
    data: {
      title: 'GL account Statement',
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
export class  BnkGlAcStatementRoutingModule { }