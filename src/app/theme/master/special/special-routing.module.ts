import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SpecialComponent } from './special.component';


const routes: Routes = [
  {
    path: '',
    component: SpecialComponent,
    data: {
      title: 'Special',
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
export class SpecialRoutingModule { }
