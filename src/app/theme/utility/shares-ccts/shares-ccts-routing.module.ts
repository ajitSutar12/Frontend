import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SharesCCTSComponent } from './shares-ccts.component';


const routes: Routes = [
  {
    path: '',
    component: SharesCCTSComponent,
    data: {
      title: 'Shares Contribution Credit To Shares',
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
export class SharesCCTSRoutingModule { }
