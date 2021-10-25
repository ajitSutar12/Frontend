import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CasecadeComponent } from './casecade.component'

const routes: Routes = [
  {
    path: '',
    component: CasecadeComponent,
    data: {
      title: 'Casecade',
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
export class CasecadeRoutingModule { }
