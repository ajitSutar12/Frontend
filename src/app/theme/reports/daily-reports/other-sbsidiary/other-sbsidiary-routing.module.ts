import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherSbsidiaryComponent } from './other-sbsidiary.component';

const routes: Routes = [
  {
    path: '',
    component:  OtherSbsidiaryComponent,
    data: {
      title: 'Subsidiary Summery',
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
export class OtherSbsidiaryRoutingModule { }
