import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SchemeATEComponent } from './scheme-ate.component';


const routes: Routes = [
  {
    path: '',
    component:  SchemeATEComponent ,
    data: {
      title: 'Scheme ATE',
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
export class  SchemeATERoutingModule { }
