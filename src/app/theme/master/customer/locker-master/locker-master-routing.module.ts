import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LockerMasterComponent } from './lockermaster.component';
const routes: Routes = [
  {
    path: '',
    component:  LockerMasterComponent,
    data: {
      title: 'Locker Account Master',
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
export class  LockerMasterRoutingModule { }