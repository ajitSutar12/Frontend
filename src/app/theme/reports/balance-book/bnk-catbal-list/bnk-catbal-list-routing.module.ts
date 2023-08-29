import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BnkCatbalListComponent } from './bnk-catbal-list.component';

const routes: Routes = [
  {
    path: '',
    component:  BnkCatbalListComponent ,
    data: {
      title: 'CatWise Bal-List',
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
export class BnkCatbalListRoutingModule { }
