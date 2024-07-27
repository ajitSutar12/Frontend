import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeSocityComponent } from './employee-socity.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'EmployeeSocity',
  icon: 'icon-home',
  caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
  status: true
},
children:[

// {
//   path: 'SharesandRecovery',
//   loadChildren: () => import('./sharesand-recovery/sharesand-recovery.module').then(m => m.SharesandRecoveryModule)
// },
{
  path: 'memberanddividendreports',
  loadChildren: () => import('./memberanddividendreports/memberanddividendreports.module').then(m => m.MemberanddividendreportsModule)
},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeSocityRoutingModule { }
