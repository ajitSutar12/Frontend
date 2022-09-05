import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkCustIDBalListComponent } from './bnk-cust-idbal-list.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkCustIDBalListComponent,
    data: {
      title: 'Customer ID wise Balance List',
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
export class  BnkCustIDBalListRoutingModule { }