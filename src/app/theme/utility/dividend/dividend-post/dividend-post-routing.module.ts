import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DividendPostComponent } from './dividend-post.component';


const routes: Routes = [
  {
    path: '',
    component: DividendPostComponent,
    data: {
      title: 'Dividend Post',
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
export class DividendPostRoutingModule { }
