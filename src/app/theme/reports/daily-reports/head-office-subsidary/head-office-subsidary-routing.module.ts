import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadOfficeSubsidaryComponent } from './head-office-subsidary.component';

const routes: Routes = [
  {
    path: '',
    component: HeadOfficeSubsidaryComponent,
    data: {
      title: 'Head Office Subsidary',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    },
   
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadOfficeSubsidaryRoutingModule { }
