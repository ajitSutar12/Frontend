import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonNpaRecoveryComponent } from './non-npa-recovery.component';

const routes: Routes = [
  {
    path: '',
  component:  NonNpaRecoveryComponent,
    data: {
      title: 'To be recovery for non NPA',
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
export class NonNpaRecoveryRoutingModule { }
