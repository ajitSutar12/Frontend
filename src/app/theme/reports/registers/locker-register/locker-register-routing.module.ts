import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LockerRegisterComponent } from './locker-register.component';


const routes: Routes = [
  {
    path: '',
    component:  LockerRegisterComponent,
    data: {
      title: 'Locker Register ',
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
export class LockerRegisterRoutingModule { } 
