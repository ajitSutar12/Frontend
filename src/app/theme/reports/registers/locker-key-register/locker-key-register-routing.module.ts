import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LockerKeyRegisterComponent } from './locker-key-register.component';

const routes: Routes = [{
  path: '',
  component:  LockerKeyRegisterComponent,
  data: {
    title: 'Locker Register',
    icon: 'icon-home',
    caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
    status: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LockerKeyRegisterRoutingModule { }
