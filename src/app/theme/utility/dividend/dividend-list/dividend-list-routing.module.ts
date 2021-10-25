import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DividendListComponent } from './dividend-list.component';


const routes: Routes = [
  {
    path: '',
    component: DividendListComponent,
    data: {
      title: 'Dividend List',
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
export class DividendListRoutingModule { }
