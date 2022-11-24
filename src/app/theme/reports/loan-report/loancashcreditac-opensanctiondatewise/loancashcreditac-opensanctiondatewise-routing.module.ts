import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoancashcreditacOpensanctiondatewiseComponent } from './loancashcreditac-opensanctiondatewise.component';

const routes: Routes = [ {
  path: '',
  component:LoancashcreditacOpensanctiondatewiseComponent  ,
  data: {
    title: 'LienMark Clear Reports ',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: false
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoancashcreditacOpensanctiondatewiseRoutingModule { }
