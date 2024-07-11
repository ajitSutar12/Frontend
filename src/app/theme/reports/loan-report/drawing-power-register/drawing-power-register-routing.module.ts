import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawingPowerRegisterComponent } from './drawing-power-register.component';

const routes: Routes = [
  {
    path: '',
    component: DrawingPowerRegisterComponent ,
    data: {
      title: 'Drawing Power Redister ',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawingPowerRegisterRoutingModule { }
