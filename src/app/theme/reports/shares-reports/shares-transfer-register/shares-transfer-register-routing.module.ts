import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharesTransferRegisterComponent } from './shares-transfer-register.component';

const routes: Routes = [
  {
    path: '',
    component:  SharesTransferRegisterComponent,
    data: {
      title: 'Shares Transfer Register',
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
export class SharesTransferRegisterRoutingModule { } 
