import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PigmyAccountMasterComponent } from './pigmy-account-master.component';
const routes: Routes = [
  {
    path: '',
    component:  PigmyAccountMasterComponent,
    data: {
      title: 'Pigmy Account Master',
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
export class  PigmyAccountMasterRoutingModule { }