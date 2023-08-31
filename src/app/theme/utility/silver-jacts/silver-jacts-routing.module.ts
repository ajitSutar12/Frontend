import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SilverJACTSComponent } from './silver-jacts.component';

const routes: Routes = [
  {
    path: '',
    component: SilverJACTSComponent,
    data: {
      title: 'Silver JACTS',
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
export class SilverJACTSRoutingModule { }
