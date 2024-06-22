import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AccountEnquiryComponent } from './account-enquiry.component';

const routes: Routes = [
  {
    path: '',
    component: AccountEnquiryComponent,
    data: {
      title: 'Account Enquiry',
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
export class AccountEnquiryRoutingModule { }
