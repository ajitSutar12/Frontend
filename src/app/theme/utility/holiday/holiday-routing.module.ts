import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HolidayComponent } from './holiday.component';

const routes: Routes = [
  {
    path: '',
    component: HolidayComponent,
    data: {
      title: 'Holiday',
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
export class HolidayRoutingModule { }
