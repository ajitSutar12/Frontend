import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SizewiseBalanceModificationComponent} from './sizewise-balance-modification.component';

const routes: Routes = [
  {
    path: '',
    component: SizewiseBalanceModificationComponent,
    data: {
      title: 'Definations',
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
export class SizewiseBalanceModificationRoutingModule { }
