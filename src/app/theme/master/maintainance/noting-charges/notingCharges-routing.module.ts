import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NotingChargesComponent} from './noting-charges.component';
import { NgSelectModule } from '@ng-select/ng-select';


const routes: Routes = [
  {
    path: '',
    component: NotingChargesComponent,
    data: {
      title: 'Noting Charges',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),NgSelectModule],
  exports: [RouterModule]
})
export class NotingChargesRoutingModule { }
