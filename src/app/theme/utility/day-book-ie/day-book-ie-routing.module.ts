import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DayBookIEComponent } from './day-book-ie.component';

const routes: Routes = [
  {
    path: '',
    component: DayBookIEComponent,
    data: {
      title: 'Daybook Import/ Export',
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
export class DayBookIERoutingModule { }
