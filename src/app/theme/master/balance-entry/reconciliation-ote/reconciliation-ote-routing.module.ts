import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReconciliationOTEComponent } from './reconciliation-ote.component';

const routes: Routes = [
  {
    path: '',
    component: ReconciliationOTEComponent,
    data: {
      title: 'Opening Transaction Entry',
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
export class ReconciliationOTERoutingModule { }
