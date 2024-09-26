import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CustomdocComponent } from './customdoc.component';

const routes: Routes = [
  {
    path: '',
    component: CustomdocComponent,
    data: {
      title: 'Customer Document',
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
export class CustomdocRoutingModule { }
