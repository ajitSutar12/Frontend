import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DividendTransferPostingComponent } from './dividend-transfer-posting.component';


const routes: Routes = [
  {
    path: '',
    component: DividendTransferPostingComponent,
    data: {
      title: 'Dividend Transfer Posting',
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
export class DividendTransferPostingRoutingModule { }
