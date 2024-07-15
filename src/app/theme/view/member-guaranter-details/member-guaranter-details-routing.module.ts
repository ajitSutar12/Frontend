import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberGuaranterDetailsComponent } from './member-guaranter-details.component';

const routes: Routes = [
  {
    path: '',
    component: MemberGuaranterDetailsComponent,
    data: {
      title: 'Member Guaranter Details',
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
export class MemberGuaranterDetailsRoutingModule { }
