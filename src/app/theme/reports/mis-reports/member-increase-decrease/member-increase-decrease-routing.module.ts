import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberIncreaseDecreaseComponent } from './member-increase-decrease.component';

const routes: Routes = [
  {
    path: '',
    component: MemberIncreaseDecreaseComponent ,
    data: {
      title: 'Member Increase Decrease Report ',
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
export class MemberIncreaseDecreaseRoutingModule { }
