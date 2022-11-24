import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortBalListComponent } from './short-bal-list.component';

const routes: Routes = [{
  path: '',
  component: ShortBalListComponent ,
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
export class ShortBalListRoutingModule { }
