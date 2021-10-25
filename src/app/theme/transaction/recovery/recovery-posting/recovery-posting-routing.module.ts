import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RecoveryPostingComponent } from './recovery-posting.component';


const routes: Routes = [
  {
    path: '',
    component: RecoveryPostingComponent,
    data: {
      title: 'Recovery Posting',
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
export class RecoveryPostingRoutingModule { }
