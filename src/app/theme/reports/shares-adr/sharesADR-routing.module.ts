import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharesADRComponent} from './shares-adr.component';

const routes: Routes = [
  {
    path: '',
    component: SharesADRComponent,
    data: {
      title: 'Member And Dividend Reports',
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
export class SharesADRRoutingModule { }
