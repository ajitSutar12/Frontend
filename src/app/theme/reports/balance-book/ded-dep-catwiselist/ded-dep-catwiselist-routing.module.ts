import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DedDepCatwiselistComponent } from './ded-dep-catwiselist.component';

const routes: Routes = [ {
  path: '',
  component:  DedDepCatwiselistComponent,
  data: {
    title: 'Account Statement',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DedDepCatwiselistRoutingModule { }
