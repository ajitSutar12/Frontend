import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KYCDocumentComponent } from './kyc-document.component';

const routes: Routes = [
  {
    path: '',
    component: KYCDocumentComponent,
    data: {
      title: 'KYC Document',
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
export class KYCDocumentRoutingModule { }
