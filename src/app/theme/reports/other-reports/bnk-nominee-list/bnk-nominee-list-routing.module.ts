import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkNomineeListComponent } from './bnk-nominee-list.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkNomineeListComponent,
    data: {
      title: 'Nominee List',
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
export class  BnkNomineeListRoutingModule { }