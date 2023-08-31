import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharesReturnRegisterComponent } from './shares-return-register.component';

const routes: Routes = [
  {
    path: '',
    component:  SharesReturnRegisterComponent,
    data: {
      title: 'Membership Canl (SH Retn)',
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
export class SharesReturnRegisterRoutingModule { } 
