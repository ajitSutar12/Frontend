import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharesARRComponent} from './shares-arr.component';

const routes: Routes = [
  {
    path: '',
    component: SharesARRComponent,
    data: {
      title: 'Shares And Recovery Reports',
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
export class SharesARRRoutingModule { }
