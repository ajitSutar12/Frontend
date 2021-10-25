import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DividendPostingComponent } from './dividend-posting.component';


const routes: Routes = [
  {
    path: '',
    component: DividendPostingComponent,
    data: {
      title: 'Dividend Posting',
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
export class DividendPostingRoutingModule { }
