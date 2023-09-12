import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SbsidiarySummeryComponent } from './sbsidiary-summery.component';

const routes: Routes = [
  {
    path: '',
    component:  SbsidiarySummeryComponent,
    data: {
      title: 'Subsidary Summery',
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
export class SbsidiarySummeryRoutingModule { }
