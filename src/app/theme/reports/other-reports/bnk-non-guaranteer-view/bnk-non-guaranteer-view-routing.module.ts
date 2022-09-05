import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkNonGuaranteerViewComponent } from './bnk-non-guaranteer-view.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkNonGuaranteerViewComponent,
    data: {
      title: 'Non Guarantor (A-Type Members Only) List',
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
export class  BnkNonGuaranteerViewRoutingModule { }