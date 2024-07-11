import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitywiseMemberListComponent } from '../citywise-member-list/citywise-member-list.component';
import { BirthdayWishComponent } from './birthday-wish.component';

const routes: Routes = [
  {
    path: '',
    component:  BirthdayWishComponent,
    data: {
      title: 'Citywise Member List',
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
export class BirthdayWishRoutingModule { }
