import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GovtSecurityAndLicComponent } from './govt-security-and-lic.component';

const routes: Routes = [
  {
    path: '',
    component: GovtSecurityAndLicComponent,
    data: {
      title: 'Goverment Security And Lic',
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
export class GovtSecurityAndLicRoutingModule { }
