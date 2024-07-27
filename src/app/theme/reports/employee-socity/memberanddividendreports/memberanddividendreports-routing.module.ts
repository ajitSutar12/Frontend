import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberanddividendreportsComponent } from './memberanddividendreports.component';

const routes: Routes = [
  {
    path: '',
    component:  MemberanddividendreportsComponent,
    data: {
      title: 'Member And Divident Reports',
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
export class MemberanddividendreportsRoutingModule { }
