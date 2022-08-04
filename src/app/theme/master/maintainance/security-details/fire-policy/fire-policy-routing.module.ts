import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirePolicyComponent } from './fire-policy.component';

const routes: Routes = [
  {
    path: '',
    component: FirePolicyComponent,
    data: {
      title: 'Fire Policy',
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
export class FirePolicyRoutingModule { }
