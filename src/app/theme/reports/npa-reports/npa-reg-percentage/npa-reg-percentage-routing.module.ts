import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpaRegPercentageComponent } from './npa-reg-percentage.component';

const routes: Routes = [
  {
    path: '',
    component:  NpaRegPercentageComponent,
    data: {
      title: 'NPA Register Percentage',
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
export class NpaRegPercentageRoutingModule { }
