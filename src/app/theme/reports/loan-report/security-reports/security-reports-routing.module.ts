import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityReportsComponent } from './security-reports.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityReportsComponent,
    data: {
      title: 'Security Reports',
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
export class SecurityReportsRoutingModule { }
