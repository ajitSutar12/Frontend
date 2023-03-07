import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinorToMajorListComponent } from "./minor-to-major-list.component";

const routes: Routes = [
  {
    path: '',
    component:  MinorToMajorListComponent,
    data: {
      title: 'Minor to Major List',
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
export class MinorToMajorListRoutingModule { }
