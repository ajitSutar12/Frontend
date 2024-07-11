import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharesAccountLabelPrintComponent } from './shares-account-label-print.component';

const routes: Routes = [  {
  path: '',
  component:  SharesAccountLabelPrintComponent,
  data: {
    title: 'Shares Account Label Print',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharesAccountLabelPrintRoutingModule { }
