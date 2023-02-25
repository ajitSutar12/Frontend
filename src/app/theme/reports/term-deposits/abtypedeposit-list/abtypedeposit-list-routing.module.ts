import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbtypedepositListComponent } from './abtypedeposit-list.component'

const routes: Routes = [
  {
    path: '',
    component:AbtypedepositListComponent  , 
    data: {
      title: 'A/B Type Deposit List',
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
export class AbtypedepositListRoutingModule { }
