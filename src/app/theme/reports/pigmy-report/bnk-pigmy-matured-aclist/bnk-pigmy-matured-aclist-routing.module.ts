import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BnkPigmyMaturedAclistComponent } from './bnk-pigmy-matured-aclist.component';

const routes: Routes = [{
  path: '',
  component:  BnkPigmyMaturedAclistComponent,
  data: {
    title: 'Pigmy Balance List',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BnkPigmyMaturedAclistRoutingModule { }
