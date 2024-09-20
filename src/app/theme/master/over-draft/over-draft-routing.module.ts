import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OverDraftComponent } from './over-draft.component';


const routes: Routes = [
  {
    path: '',
    component: OverDraftComponent,
    data: {
      title: 'Over Draft',
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
export class OverDraftRoutingModule { }
