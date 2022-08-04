import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherSecurityComponent } from './other-security.component';

const routes: Routes = [
  {
    path: '',
    component: OtherSecurityComponent,
    data: {
      title: 'Other Security',
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
export class OtherSecurityRoutingModule { }
