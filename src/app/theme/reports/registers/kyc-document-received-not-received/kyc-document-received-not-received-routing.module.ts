import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KYCDocumentReceivedNotReceivedComponent } from './kyc-document-received-not-received.component';

const routes: Routes = [
  {
    path: '',
    component:  KYCDocumentReceivedNotReceivedComponent,
    data: {
      title: 'KYC Doc.Received/Not Received Compo',
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
export class KYCDocumentReceivedNotReceivedRoutingModule { }
