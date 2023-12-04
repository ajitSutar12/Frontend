import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendMessageComponent } from './send-message.component'
const routes: Routes = [
  {
    path: '',
    component: SendMessageComponent,
    data: {
      title: 'Send Message',
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
export class SendMessageRoutingModule { }
