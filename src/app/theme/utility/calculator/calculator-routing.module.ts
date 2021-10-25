import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CalculatorComponent } from './calculator.component';


const routes: Routes = [
  {
    path: '',
    component:  CalculatorComponent ,
    data: {
      title: 'Calculator',
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
export class  CalculatorRoutingModule { }
