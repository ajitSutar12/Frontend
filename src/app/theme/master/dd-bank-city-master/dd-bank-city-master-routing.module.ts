import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DDBankCityMasterComponent} from './dd-bank-city-master.component';

const routes: Routes = [
  {
    path: '',
    component: DDBankCityMasterComponent,
    data: {
      title: 'DD Bank City Master',
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
export class DDBankCityMasterRoutingModule { }
