import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PataSevaSupportRComponent } from './pata-seva-support-r.component';

const routes: Routes = [
  {
    path: '',
    component: PataSevaSupportRComponent,
    data: {
      title: 'PatSeva Support Register',
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
export class PataSevaSupportRRoutingModule { }
