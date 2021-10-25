import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TrasferredMemberOBComponent} from './trasferred-member-ob.component';

const routes: Routes = [
  {
    path: '',
    component:  TrasferredMemberOBComponent,
    data: {
      title: 'Trasferred Member Opening Balance',
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
export class  TrasferredMemberOBRoutingModule { }