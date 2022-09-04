import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BnkSubsidaryDetailComponent } from './bnk-subsidary-detail.component';
const routes: Routes = [
  {
    path: '',
    component:  BnkSubsidaryDetailComponent,
    data: {
      title: 'Subsidiary Debit/Credit',
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
export class  BnkSubsidaryDetailRoutingModule { }