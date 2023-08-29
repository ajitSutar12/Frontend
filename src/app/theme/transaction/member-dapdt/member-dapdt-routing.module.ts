import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberDAPDTComponent} from './member-dapdt.component';

const routes: Routes = [
  {
    path: '',
    component: MemberDAPDTComponent,
    data: {
      title: 'Mem Div & Payable DivTran',
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
export class MemberDAPDTRoutingModule { }