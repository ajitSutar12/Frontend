import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkDormantAcListComponent } from './bnk-dormant-ac-list.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkDormantAcListComponent,
    data: {
      title: 'Dormant Account List',
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
export class  BnkDormantAcListRoutingModule { }