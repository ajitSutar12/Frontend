import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DenominationReportsComponent} from './denomination-reports.component';

const routes: Routes = [
  {
    path: '',
    component: DenominationReportsComponent,
    data: {
      title: 'Denomination Reports',
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
export class DenominationReportsRoutingModule { }
