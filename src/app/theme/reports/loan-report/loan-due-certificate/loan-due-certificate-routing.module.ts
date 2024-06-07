import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanDueCertificateComponent } from './loan-due-certificate.component';

const routes: Routes = [
  {
    path: '',
    component: LoanDueCertificateComponent ,
    data: {
      title: 'No Due Certificate ',
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
export class LoanDueCertificateRoutingModule { }
