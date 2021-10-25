import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReminderInstructionComponent } from './reminder-instruction.component';


const routes: Routes = [
  {
    path: '',
    component: ReminderInstructionComponent,
    data: {
      title: 'Reminder Instruction',
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
export class ReminderInstructionRoutingModule { }
