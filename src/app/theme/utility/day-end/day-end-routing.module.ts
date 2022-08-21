import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DayEndComponent } from './day-end.component';
import { DayEndFinalComponent } from './day-end-final/day-end-final.component'

const routes: Routes = [
  {
    path: '',
    // component: DayEndComponent,
    data: {
      title: 'Day End',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    },
    children: [
    {
      path: 'counterWorkDayEnd',
      loadChildren: () => import('./counter-work-day-end/counter-work-day-end.module').then(m => m.CounterWorkDayEndModule)
    },

    {
      path: 'pigmyDayEnd',
      loadChildren: () => import('./pigmy-day-end/pigmy-day-end.module').then(m => m.PigmyDayEndModule)
    },
    {
      path:'FinalDayEnd',
      component: DayEndFinalComponent
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayEndRoutingModule { }
