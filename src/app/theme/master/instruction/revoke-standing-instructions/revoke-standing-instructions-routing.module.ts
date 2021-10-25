import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RevokeStandingInstructionsComponent } from './revoke-standing-instructions.component';


const routes: Routes = [
  {
    path: '',
    component: RevokeStandingInstructionsComponent,
    data: {
      title: 'Revoke Standing Instructions',
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
export class RevokeStandingInstructionsRoutingModule { }
