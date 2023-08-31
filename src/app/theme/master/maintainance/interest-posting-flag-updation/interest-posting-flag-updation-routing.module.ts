import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { InterestPostingFlagUpdationComponent } from './interest-posting-flag-updation.component';


const routes: Routes = [
  {
    path: '',
    component: InterestPostingFlagUpdationComponent,
    data: {
      title: 'Int Post Flag Updat',
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
export class InterestPostingFlagUpdationRoutingModule { }
