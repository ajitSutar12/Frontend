import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CounterWorkDayEndComponent } from './counter-work-day-end.component';


const routes: Routes = [
  {
    path: '',
    component: CounterWorkDayEndComponent,
    data: {
      title: 'Counter Work Day End',
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
export class CounterWorkDayEndRoutingModule { }
