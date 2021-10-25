import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { StatementHeadInsertComponent } from './statement-head-insert.component';

const routes: Routes = [
  {
    path: '',
    component: StatementHeadInsertComponent,
    data: {
      title: 'Statement Head Insert',
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
export class StatementHeadInsertRoutingModule { }
