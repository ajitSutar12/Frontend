import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotticeComponent} from './nottice.component';

const routes: Routes = [
  {
    path: '',
    component: NotticeComponent,
    data: {
      title: 'Nottice/ Latter ',
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
export class NotticeRoutingModule { }
