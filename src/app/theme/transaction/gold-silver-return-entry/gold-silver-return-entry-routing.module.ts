import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { GoldSilverReturnEntryComponent } from './gold-silver-return-entry.component';
const routes: Routes = [
  {
    path: '',
    component: GoldSilverReturnEntryComponent,
    data: {
      title: 'GoldSilverReturnEntry',
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
export class  GoldSilverReturnEntryRoutingModule { }