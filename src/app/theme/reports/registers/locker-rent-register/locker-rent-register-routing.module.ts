import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LockerRentRegisterComponent } from './locker-rent-register.component';

const routes: Routes = [ 
   {
  path: '',
  component:  LockerRentRegisterComponent,
  data: {
    title: 'Stand Inst Reg (Act/Rev)',
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
export class LockerRentRegisterRoutingModule { } 
