import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PigmyHandbookComponent } from './pigmy-handbook.component';

const routes: Routes = [ {
  path: '',
  component: PigmyHandbookComponent ,
  data: {
    title: 'Pigmy Balance Book',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PigmyHandbookRoutingModule { }
