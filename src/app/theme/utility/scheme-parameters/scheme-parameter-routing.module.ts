import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SchemeParametersComponent } from './scheme-parameters.component';


const routes: Routes = [
  {
    path: '',
    component:  SchemeParametersComponent ,
    data: {
      title: 'Scheme Parameters',
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
export class  SchemeParametersRoutingModule { }
