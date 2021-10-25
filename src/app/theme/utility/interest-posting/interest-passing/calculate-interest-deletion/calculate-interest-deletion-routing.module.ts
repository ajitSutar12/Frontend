import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CalculateInterestDeletionComponent } from './calculate-interest-deletion.component';


const routes: Routes = [
  {
    path: '',
    component: CalculateInterestDeletionComponent,
    data: {
      title: 'Calculate Interest Deletion',
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
export class CalculateInterestDeletionRoutingModule { }
