import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FreezeAccountComponent } from './freeze-account.component';


const routes: Routes = [
  {
    path: '',
    component: FreezeAccountComponent,
    data: {
      title: 'Freeze Account',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
 
})
export class FreezeAccountRoutingModule { }
