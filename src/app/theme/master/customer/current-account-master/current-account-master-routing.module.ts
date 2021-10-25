import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CurrentAccountMasterComponent } from './current-account-master.component';
const routes: Routes = [
  {
    path: '',
    component:  CurrentAccountMasterComponent,
    data: {
      title: 'Current Account Master',
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
export class  CurrentAccountMasterRoutingModule { }