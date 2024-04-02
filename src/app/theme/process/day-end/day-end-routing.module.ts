import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayEndComponent } from './day-end.component';
import { DayEndFinalComponent } from './day-end-final/day-end-final.component'
import { YearEndComponent } from './year-end/year-end.component'

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
        path: 'yearEnd',
        loadChildren: () => import('./year-end/year-end.module').then(m => m.YearEndModule)
      },

      {
        path: 'FinalDayEnd',
        component: DayEndFinalComponent
      },
      // {
      //   path: 'yearEnd',
      //   component: YearEndComponent
      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayEndRoutingModule { }
