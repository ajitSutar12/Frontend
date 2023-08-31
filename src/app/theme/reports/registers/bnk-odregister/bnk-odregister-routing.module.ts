import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkODRegisterComponent } from './bnk-odregister.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkODRegisterComponent,
    data: {
      title: 'O.D.Reg(Temp/Period)',
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
export class  BnkODRegisterRoutingModule { }