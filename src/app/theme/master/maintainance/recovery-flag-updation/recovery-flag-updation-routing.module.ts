import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoveryFlagUpdationComponent } from './recovery-flag-updation.component';
const routes: Routes = [
  {
    path: '',
    component: RecoveryFlagUpdationComponent,
    data: {
      title: ' Recovery Flag Updation',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }
  }
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoveryFlagUpdationRoutingModule { }
