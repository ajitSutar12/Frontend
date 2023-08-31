import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SharesDataEIComponent } from './shares-data-ei.component';

const routes: Routes = [
  {
    path: '',
    component: SharesDataEIComponent,
    data: {
      title: 'Sheres Data Ex/Im',
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
export class SharesDataEIRoutingModule { }
