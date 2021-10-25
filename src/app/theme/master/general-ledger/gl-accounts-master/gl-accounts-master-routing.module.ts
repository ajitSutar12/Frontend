import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GlAccountsMasterComponent} from './gl-accounts-master.component';

const routes: Routes = [
  {
    path: '',
    component: GlAccountsMasterComponent,
    data: {
      title: 'GL Account Master',
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
export class GeneralLedgerRoutingModule { }
