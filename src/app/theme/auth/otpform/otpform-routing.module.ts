import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtpformComponent } from './otpform.component';

const routes: Routes = [
  {
    path: '',
    component: OtpformComponent,
    data: {
      title: 'otpform'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtpformRoutingModule { }
