import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManagerViewComponent} from './manager-view.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerViewComponent,
    data: {
      title: 'Manager View',
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
export class ManagerViewRoutingModule { }
