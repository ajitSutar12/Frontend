import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharesIssueRegisterComponent } from './shares-issue-register.component';

const routes: Routes = [
  {
    path: '',
    component:  SharesIssueRegisterComponent,
    data: {
      title: 'Shares Issue Register',
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
export class SharesIssueRegisterRoutingModule { }
 