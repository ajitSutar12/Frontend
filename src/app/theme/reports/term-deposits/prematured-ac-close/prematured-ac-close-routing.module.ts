import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrematuredAcCloseComponent } from './prematured-ac-close.component'
const routes: Routes = [{
  path: '',
  component:PrematuredAcCloseComponent  , 
  data: {
    title: 'Prematured Ac Close',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrematuredAcCloseRoutingModule { }
 