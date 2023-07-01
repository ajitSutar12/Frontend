import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExitComponent } from './exit.component';

const routes: Routes = [
  {
    path: '',
    component: ExitComponent
    // children: [
    //   {
    //     path: '',
    //     redirectTo: '/auth/login/simple',
    //     pathMatch: 'full'
    //   },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExitRoutingModule { }
