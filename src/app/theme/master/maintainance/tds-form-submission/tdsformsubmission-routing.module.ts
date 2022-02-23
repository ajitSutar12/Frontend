import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TDSFormSubmissionComponent} from './tds-form-submission.component';


const routes: Routes = [
  {
    path: '',
    component: TDSFormSubmissionComponent,
    data: {
      title: 'Tds Form Submission',
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
export class TDSFormSubmissionRoutingModule { }
