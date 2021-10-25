import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PigmyDayEndComponent } from './pigmy-day-end.component';


const routes: Routes = [
  {
    path: '',
    component: PigmyDayEndComponent,
    data: {
      title: 'Pigmy Day End',
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
export class PigmyDayEndRoutingModule { }
