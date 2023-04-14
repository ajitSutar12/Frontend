import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TFormDayBookComponent } from './t-form-day-book/t-form-day-book.component';

const routes: Routes = [
  {
    path: '',
    component:TFormDayBookComponent,
    data: {
      title: 'T Form Day Book',
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
export class TFormDayBookRoutingModule { }
