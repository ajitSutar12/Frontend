import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RecoveryProcessingComponent } from './recovery-processing.component';


const routes: Routes = [
  {
    path: '',
    component: RecoveryProcessingComponent,
    data: {
      title: 'Recovery Processing',
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
export class RecoveryProcessingRoutingModule { }
