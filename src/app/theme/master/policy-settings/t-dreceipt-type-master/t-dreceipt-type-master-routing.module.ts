import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TDReceiptTypeMasterComponent} from './t-dreceipt-type-master.component';

const routes: Routes = [
  {
    path: '',
    component: TDReceiptTypeMasterComponent,
    data: {
      title: 'TD Receipt Master',
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
export class TDReceiptTypeMasterRoutingModule { }
