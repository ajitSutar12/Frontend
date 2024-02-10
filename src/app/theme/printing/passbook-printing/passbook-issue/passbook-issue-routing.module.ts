import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PassbookIssueComponent } from './passbook-issue.component';


const routes: Routes = [
  {
    path: '',
    component: PassbookIssueComponent,
    data: {
      title: 'Passbook Issue',
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
export class PassbookIssueRoutingModule { }
