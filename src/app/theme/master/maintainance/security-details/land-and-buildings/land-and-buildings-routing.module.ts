import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandAndBuildingsComponent } from './land-and-buildings.component';

const routes: Routes = [
  {
    path: '',
    component: LandAndBuildingsComponent,
    data: {
      title: 'Land And Buildings',
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
export class LandAndBuildingsRoutingModule { }
