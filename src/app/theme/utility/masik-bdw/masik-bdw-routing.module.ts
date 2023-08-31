import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MasikBDWComponent } from './masik-bdw.component';


const routes: Routes = [
  {
    path: '',
    component:  MasikBDWComponent ,
    data: {
      title: 'Masik BDW',
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
export class  MasikBDWRoutingModule { }
