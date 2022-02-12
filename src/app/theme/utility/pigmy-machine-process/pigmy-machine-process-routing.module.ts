import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PigmyMachineProcessComponent } from './pigmy-machine-process.component';

const routes: Routes = [
  {
    path: '',
    component: PigmyMachineProcessComponent,
    data: {
      title: 'Pigmy Machine Process',
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
export class PigmyMachineProcessRoutingModule { }
