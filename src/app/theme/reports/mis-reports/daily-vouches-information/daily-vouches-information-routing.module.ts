import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyVouchesInformationComponent } from './daily-vouches-information.component';

const routes: Routes = [
  {
    path: '',
    component:  DailyVouchesInformationComponent,
    data: {
      title: 'Daily Vouchers Information Report ',
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
export class DailyVouchesInformationRoutingModule { }
