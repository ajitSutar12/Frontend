import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuarantorViewComponent} from './guarantor-view.component';

const routes: Routes = [
  {
    path: '',
    component: GuarantorViewComponent,
    data: {
      title: 'Guarantor View',
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
export class GuarantorViewRoutingModule { }