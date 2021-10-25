import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BackDatedDOComponent } from './back-dated-do.component';


const routes: Routes = [
  {
    path: '',
    component: BackDatedDOComponent,
    data: {
      title: 'Back Dated Day Open',
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
export class BackDatedDORoutingModule { }
