import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkPayIntListComponent } from './bnk-pay-int-list.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkPayIntListComponent,
    data: {
      title: 'Account Statement',
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
export class  BnkPayIntListRoutingModule { }