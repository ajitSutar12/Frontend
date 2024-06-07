import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralMeetingPresentMemComponent } from './general-meeting-present-mem.component';

const routes: Routes = [

  {
    path: '',
    component: GeneralMeetingPresentMemComponent,
    data: {
      title: 'General Meeting Present Mem',
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
export class GeneralMeetingPresentMemRoutingModule { }
