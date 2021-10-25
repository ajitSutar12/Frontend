import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EditInterestCalculationComponent } from './edit-interest-calculation.component';


const routes: Routes = [
  {
    path: '',
    component: EditInterestCalculationComponent,
    data: {
      title: 'Edit Interest Calculation',
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
export class EditInterestCalculationRoutingModule { }
