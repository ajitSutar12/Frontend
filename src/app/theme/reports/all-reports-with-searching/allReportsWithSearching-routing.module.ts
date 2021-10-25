import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllReportsWithSearchingComponent} from './all-reports-with-searching.component';

const routes: Routes = [
  {
    path: '',
    component: AllReportsWithSearchingComponent,
    data: {
      title: 'All Reports With Searching',
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
export class allReportsWithSearchingRoutingModule { }
