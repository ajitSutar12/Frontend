import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InformationComponent} from './information.component';

const routes: Routes = [
  
  {
    path: '',
    component: InformationComponent,
    data: {
      title: 'Information',
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
export class InformationRoutingModule { }
