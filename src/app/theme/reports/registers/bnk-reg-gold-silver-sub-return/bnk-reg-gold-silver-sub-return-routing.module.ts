import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkRegGoldSilverSubReturnComponent } from './bnk-reg-gold-silver-sub-return.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkRegGoldSilverSubReturnComponent,
    data: {
      title: 'Gold Silver Register',
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
export class  BnkRegGoldSilverSubReturnRoutingModule { }