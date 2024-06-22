import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkLienMarkedAcListComponent } from './bnk-lien-marked-ac-list.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkLienMarkedAcListComponent,
    data: {
      title: 'LeinMark Account list',
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
export class  BnkLienMarkedAcListRoutingModule { }