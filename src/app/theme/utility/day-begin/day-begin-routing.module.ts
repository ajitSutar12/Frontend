import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DayBeginComponent } from './day-begin.component';


const routes: Routes = [
  {
    path: '',
    component: DayBeginComponent,
    data: {
      title: 'Day Begin',
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
export class DayBeginRoutingModule { }
