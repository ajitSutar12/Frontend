import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HotKeysComponent } from './hot-keys.component';

const routes: Routes = [
  {
    path: '',
    component: HotKeysComponent,
    data: {
      title: 'Hot Key',
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
export class HotKeysRoutingModule { }
