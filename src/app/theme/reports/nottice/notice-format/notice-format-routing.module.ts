import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticeFormatComponent } from './notice-format.component';

const routes: Routes = [
  {
    path: '',
    component:  NoticeFormatComponent,
    data: {
      title: 'Notice Format',
    
      status: true
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeFormatRoutingModule { }
