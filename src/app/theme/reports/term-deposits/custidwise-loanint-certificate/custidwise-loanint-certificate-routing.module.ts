import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustidwiseLoanintCertificateComponent } from './custidwise-loanint-certificate.component';

const routes: Routes = [{
  path: '',
  component:CustidwiseLoanintCertificateComponent  ,
  data: {
    title: 'CustIdWise LN/Int Certi',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustidwiseLoanintCertificateRoutingModule { }
